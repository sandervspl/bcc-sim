import * as sim from 'bcc-sim/types';
import { Controller, Get, Param, Query } from '@nestjs/common';

import { ItemService } from './item.service';
import { SearchQueries, SingleParams } from './types';


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

  @Get('/search')
  async search(
    @Query() query: SearchQueries,
  ): Promise<sim.ItemTemplate[]> {
    return await this.itemService.search(query);
  }
}
