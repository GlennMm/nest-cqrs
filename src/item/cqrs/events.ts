import { CreateItemDto } from '../dto/create-item.dto';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

export class CreateItemEvent {
  constructor(public readonly item: CreateItemDto) {}
}

@EventsHandler(CreateItemEvent)
export class CreateItemEventHandler implements IEventHandler<CreateItemEvent> {
  handle(event: CreateItemEvent): any {
    Logger.log('create item event fired');
    Logger.log(event.item);
  }
}
