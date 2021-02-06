import { CreateItemDto } from '../dto/create-item.dto';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import {CreateItemEvent} from "./events";
import {Logger} from "@nestjs/common";

export class CreateItemCommand {
  constructor(public readonly item: CreateItemDto) {}
}

@CommandHandler(CreateItemCommand)
export class CreateItemCommandHandler
  implements ICommandHandler<CreateItemCommand> {
  constructor(private eventBus: EventBus) {}

  execute(command: CreateItemCommand): Promise<any> {

    Logger.log('create item command fired');
    return this.eventBus.publish(new CreateItemEvent(command.item));
  }
}
