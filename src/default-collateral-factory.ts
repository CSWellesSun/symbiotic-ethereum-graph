import { AddEntity as AddEntityEvent } from "../generated/DefaultCollateralFactory/DefaultCollateralFactory"
import { AddEntity } from "../generated/schema"

export function handleAddEntity(event: AddEntityEvent): void {
  let entity = new AddEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.entity = event.params.entity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
