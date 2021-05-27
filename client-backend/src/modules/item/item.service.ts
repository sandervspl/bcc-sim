import * as sim from 'bcc-sim/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';

import * as entities from 'entities';


@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(entities.ItemTemplate)
    private readonly itemTemplate: Repository<entities.ItemTemplate>
  ) {}

  async single(id: number): Promise<sim.ItemTemplate> {
    const item = await this.itemTemplate.findOne({ entry: id });

    if (!item) {
      throw new NotFoundException('No item found with entry!');
    }

    return item;
  }

  async searchSubclass(subclass: number, search: string): Promise<sim.ItemTemplate[]> {
    const items = await this.itemTemplate.find({
      where: {
        subclass,
        name: Like(`%${search}%`),
      },
      order: {
        itemLevel: 'DESC',
        quality: 'DESC',
        name: 'ASC',
      },
      take: 5,
    });

    return items;
  }
}
