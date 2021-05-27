import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as entities from 'entities';
import { ItemController } from './item.controller';

import { ItemService } from './item.service';


@Module({
  imports: [TypeOrmModule.forFeature([
    entities.ItemTemplate,
  ])],
  exports: [TypeOrmModule],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
