import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { AddEntity } from "../generated/DefaultCollateralFactory/DefaultCollateralFactory"

export function createAddEntityEvent(entity: Address): AddEntity {
  let addEntityEvent = changetype<AddEntity>(newMockEvent())

  addEntityEvent.parameters = new Array()

  addEntityEvent.parameters.push(
    new ethereum.EventParam("entity", ethereum.Value.fromAddress(entity))
  )

  return addEntityEvent
}
