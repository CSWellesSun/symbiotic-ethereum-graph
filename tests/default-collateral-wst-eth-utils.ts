import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  Deposit,
  IncreaseLimit,
  Initialized,
  IssueDebt,
  RepayDebt,
  SetLimitIncreaser,
  Transfer,
  Withdraw
} from "../generated/DefaultCollateral_wstETH/DefaultCollateral_wstETH"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createDepositEvent(
  depositor: Address,
  recipient: Address,
  amount: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createIncreaseLimitEvent(amount: BigInt): IncreaseLimit {
  let increaseLimitEvent = changetype<IncreaseLimit>(newMockEvent())

  increaseLimitEvent.parameters = new Array()

  increaseLimitEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return increaseLimitEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createIssueDebtEvent(
  issuer: Address,
  recipient: Address,
  debtIssued: BigInt
): IssueDebt {
  let issueDebtEvent = changetype<IssueDebt>(newMockEvent())

  issueDebtEvent.parameters = new Array()

  issueDebtEvent.parameters.push(
    new ethereum.EventParam("issuer", ethereum.Value.fromAddress(issuer))
  )
  issueDebtEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  issueDebtEvent.parameters.push(
    new ethereum.EventParam(
      "debtIssued",
      ethereum.Value.fromUnsignedBigInt(debtIssued)
    )
  )

  return issueDebtEvent
}

export function createRepayDebtEvent(
  issuer: Address,
  recipient: Address,
  debtRepaid: BigInt
): RepayDebt {
  let repayDebtEvent = changetype<RepayDebt>(newMockEvent())

  repayDebtEvent.parameters = new Array()

  repayDebtEvent.parameters.push(
    new ethereum.EventParam("issuer", ethereum.Value.fromAddress(issuer))
  )
  repayDebtEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  repayDebtEvent.parameters.push(
    new ethereum.EventParam(
      "debtRepaid",
      ethereum.Value.fromUnsignedBigInt(debtRepaid)
    )
  )

  return repayDebtEvent
}

export function createSetLimitIncreaserEvent(
  limitIncreaser: Address
): SetLimitIncreaser {
  let setLimitIncreaserEvent = changetype<SetLimitIncreaser>(newMockEvent())

  setLimitIncreaserEvent.parameters = new Array()

  setLimitIncreaserEvent.parameters.push(
    new ethereum.EventParam(
      "limitIncreaser",
      ethereum.Value.fromAddress(limitIncreaser)
    )
  )

  return setLimitIncreaserEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createWithdrawEvent(
  withdrawer: Address,
  recipient: Address,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawer",
      ethereum.Value.fromAddress(withdrawer)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
