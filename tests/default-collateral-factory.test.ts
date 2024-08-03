import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { AddEntity } from "../generated/schema"
import { AddEntity as AddEntityEvent } from "../generated/DefaultCollateralFactory/DefaultCollateralFactory"
import { handleAddEntity } from "../src/default-collateral-factory"
import { createAddEntityEvent } from "./default-collateral-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let entity = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAddEntityEvent = createAddEntityEvent(entity)
    handleAddEntity(newAddEntityEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddEntity created and stored", () => {
    assert.entityCount("AddEntity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "entity",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
