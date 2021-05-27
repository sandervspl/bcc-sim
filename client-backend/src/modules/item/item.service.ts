import * as sim from 'bcc-sim/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import * as entities from 'entities';


@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(entities.ItemTemplate)
    private readonly itemTemplate: Repository<entities.ItemTemplate>
  ) {}

  single = async (id: number): Promise<sim.ItemTemplate> => {
    const item = await this.itemTemplate.findOne({ entry: id });

    if (!item) {
      throw new NotFoundException('No item found with entry');
    }

    return item;
  }
}
