import {
  Approval as ApprovalEvent,
  Deposit as DepositEvent,
  IncreaseLimit as IncreaseLimitEvent,
  Initialized as InitializedEvent,
  IssueDebt as IssueDebtEvent,
  RepayDebt as RepayDebtEvent,
  SetLimitIncreaser as SetLimitIncreaserEvent,
  Transfer as TransferEvent,
  Withdraw as WithdrawEvent,
} from "../generated/DefaultCollateral_wstETH/DefaultCollateral_wstETH"
import {
  Approval,
  Deposit,
  IncreaseLimit,
  Initialized,
  IssueDebt,
  RepayDebt,
  SetLimitIncreaser,
  Transfer,
  Withdraw,
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.depositor = event.params.depositor
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreaseLimit(event: IncreaseLimitEvent): void {
  let entity = new IncreaseLimit(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIssueDebt(event: IssueDebtEvent): void {
  let entity = new IssueDebt(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.issuer = event.params.issuer
  entity.recipient = event.params.recipient
  entity.debtIssued = event.params.debtIssued

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRepayDebt(event: RepayDebtEvent): void {
  let entity = new RepayDebt(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.issuer = event.params.issuer
  entity.recipient = event.params.recipient
  entity.debtRepaid = event.params.debtRepaid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetLimitIncreaser(event: SetLimitIncreaserEvent): void {
  let entity = new SetLimitIncreaser(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.limitIncreaser = event.params.limitIncreaser

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.withdrawer = event.params.withdrawer
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
