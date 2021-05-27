import * as sim from 'bcc-sim/types';
import { Controller, Get, Param, Query } from '@nestjs/common';

import { ItemService } from './item.service';
import { SearchParams, SearchQueries, SingleParams } from './types';


@Controller('/item')
export class ItemController {
  constructor(
    private readonly itemService: ItemService,
  ) {}

  @Get('/single/:id')
  async single(
    @Param() param: SingleParams,
  ): Promise<sim.ItemTemplate> {
    return await this.itemService.single(param.id);
  }

  @Get('/search/:subclass')
  async search(
    @Param() param: SearchParams,
    @Query() query: SearchQueries,
  ): Promise<sim.ItemTemplate[]> {
    return await this.itemService.searchSubclass(param.subclass, query.q);
  }
}
