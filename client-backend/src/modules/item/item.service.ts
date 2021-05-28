import * as sim from 'bcc-sim/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { FindOperator, In, Like, Repository } from 'typeorm';

import * as entities from 'entities';
import { SearchQueries } from './types';


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

  async search(query: SearchQueries): Promise<sim.ItemTemplate[]> {
    let escapedQuery = query.q.replace(/'/g, '\\\'');
    escapedQuery = escapedQuery.replace(/"/g, '\\\"');

    const isWeaponSearch = [
      sim.Item.INVENTORY_TYPE.WEAPONMAINHAND,
      sim.Item.INVENTORY_TYPE.WEAPONOFFHAND,
      sim.Item.INVENTORY_TYPE.RANGED,
      sim.Item.INVENTORY_TYPE.THROWN,
      sim.Item.INVENTORY_TYPE.SHIELD,
    ].includes(Number(query.type));

    const isMainHandSearch = Number(query.type) === sim.Item.INVENTORY_TYPE.WEAPONMAINHAND;
    const isOffHandSearch = Number(query.type) === sim.Item.INVENTORY_TYPE.WEAPONOFFHAND;
    const isRangedSearch = Number(query.type) === sim.Item.INVENTORY_TYPE.RANGED;
    // const isAmmoSearch = query.type === sim.Item.INVENTORY_TYPE.AMMO;

    // const isArmorSearch = [
    //   sim.Item.INVENTORY_TYPE.HEAD,
    //   sim.Item.INVENTORY_TYPE.NECK,
    //   sim.Item.INVENTORY_TYPE.SHOULDERS,
    //   sim.Item.INVENTORY_TYPE.SHIRT,
    //   sim.Item.INVENTORY_TYPE.CHEST,
    //   sim.Item.INVENTORY_TYPE.WAIST,
    //   sim.Item.INVENTORY_TYPE.LEGS,
    //   sim.Item.INVENTORY_TYPE.FEET,
    //   sim.Item.INVENTORY_TYPE.WRISTS,
    //   sim.Item.INVENTORY_TYPE.HANDS,
    //   sim.Item.INVENTORY_TYPE.FINGER,
    //   sim.Item.INVENTORY_TYPE.TRINKET,
    //   sim.Item.INVENTORY_TYPE.CLOAK,
    //   sim.Item.INVENTORY_TYPE.ROBE,
    //   sim.Item.INVENTORY_TYPE.RELIC,
    // ].includes(Number(query.type));


    const inventoryType = ((): number | FindOperator<number> => {
      if (isWeaponSearch) {
        if (isMainHandSearch) {
          return In([
            sim.Item.INVENTORY_TYPE.WEAPON,
            sim.Item.INVENTORY_TYPE.WEAPONMAINHAND,
            sim.Item.INVENTORY_TYPE.WEAPON_2H,
          ]);
        }

        if (isOffHandSearch) {
          return In([
            sim.Item.INVENTORY_TYPE.WEAPON,
            sim.Item.INVENTORY_TYPE.WEAPONOFFHAND,
            sim.Item.INVENTORY_TYPE.SHIELD,
          ]);
        }

        if (isRangedSearch) {
          return In([
            sim.Item.INVENTORY_TYPE.RANGED,
            sim.Item.INVENTORY_TYPE.RANGEDRIGHT,
            sim.Item.INVENTORY_TYPE.THROWN,
          ]);
        }
      }

      return Number(query.type);
    })();

    // if (isArmorSearch) {
      // subclass = In([
      //   sim.Item.SUBCLASS_ARMOR.LEATHER,
      //   sim.Item.SUBCLASS_ARMOR.MAIL,
      //   sim.Item.SUBCLASS_ARMOR.PLATE,
      // ]);
    // }

    const items = await this.itemTemplate.find({
      where: {
        class: query.class,
        // subclass,
        inventoryType,
        name: Like(`%${escapedQuery}%`),
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
