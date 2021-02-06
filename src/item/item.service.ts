import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateItemCommand } from './cqrs/commands';
import { GetAllQuery } from './cqrs/queries';

@Injectable()
export class ItemService {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}
  create(createItemDto: CreateItemDto) {
    return this.commandBus.execute(new CreateItemCommand(createItemDto));
  }

  findAll() {
    return this.queryBus.execute(new GetAllQuery());
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
