import * as sim from 'bcc-sim/types';
import { Controller, Get, Param } from '@nestjs/common';

import { ItemService } from './item.service';
import { SingleParams } from './types';


@Controller('/item')
export class ItemController {
  constructor(
    private readonly itemService: ItemService,
  ) {}

  @Get('/:id')
  async single(
    @Param() param: SingleParams,
  ): Promise<sim.ItemTemplate> {
    return await this.itemService.single(param.id);
  }
}
