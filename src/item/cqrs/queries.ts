import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

export class GetAllQuery {}

@QueryHandler(GetAllQuery)
export class GetAllQueryHandler implements IQueryHandler<GetAllQuery> {
  execute(query: GetAllQuery): Promise<any> {
    Logger.log('Get all the data for db');
    return Promise.resolve([]);
  }
}
