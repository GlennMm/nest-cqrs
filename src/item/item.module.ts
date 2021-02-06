import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateItemCommandHandler } from './cqrs/commands';
import { ClassCreatedEventHandler } from '../../../dist/resources/class/entities/events/create-class.event';
import { GetAllQuery } from './cqrs/queries';

const commands = [CreateItemCommandHandler];
const events = [ClassCreatedEventHandler];
const queries = [GetAllQuery];

@Module({
  imports: [CqrsModule],
  controllers: [ItemController],
  providers: [ItemService, ...commands, ...events, ...queries],
})
export class ItemModule {}
