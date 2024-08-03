import * as dotenv from "dotenv";
import axios from "axios";
import { ethers } from "ethers";

dotenv.config();

const GRAPH_API_KEY = process.env.GRAPH_API_KEY;

const query = `
{
  addEntities(first: 1, orderBy: blockNumber, orderDirection: desc) {
    id
    entity
    blockNumber
    blockTimestamp
  }
}
`;

const abi = [
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "limit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

const provider = ethers.getDefaultProvider();

async function fetchData() {
  try {
    const response = await axios.post(
      `https://gateway-arbitrum.network.thegraph.com/api/${GRAPH_API_KEY}/subgraphs/id/3mh3VvdBCwfkeYTVcanLRvM3Ez5pm4Hpy9co4kAGEMyS`,
      { query }
    );
    return response.data.data.addEntities;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function checkBalance(contractAddress: string) {
  const contract = new ethers.Contract(contractAddress, abi, provider);

  try {
    const totalSupply = await contract.totalSupply();
    const limit = await contract.limit();

    const balance = limit - totalSupply;

    console.log(`Total Supply: ${totalSupply}`);
    console.log(`Limit: ${limit}`);
    console.log(`Balance: ${balance}`);

    if (balance > 0) {
      console.log("There is remaining quota.");
    } else {
      console.log("There is no remaining quota.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function runFetchTask() {
  console.log("Fetching data...");
  const entities = await fetchData();
  if (entities == null || entities.length === 0) {
    console.log("No entities found or error occurred");
    return;
  }
  const entity_address = entities[0].entity;
  await checkBalance(entity_address);
}

async function main() {
  console.log("Starting the program");

  await runFetchTask();

  setInterval(runFetchTask, 10 * 60 * 1000);
}

main().catch(console.error);
