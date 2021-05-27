import { Column, Entity } from 'typeorm';

@Entity('creature_item_template', { schema: 'mangos1' })
export class CreatureItemTemplate {
  @Column('mediumint', {
    primary: true,
    name: 'entry',
    comment: 'The unique identifier of the item template entry.',
    unsigned: true,
    default: () => '\'0\'',
  })
  entry: number;

  @Column('tinyint', {
    name: 'class',
    nullable: true,
    comment: 'The class of the item template.',
    unsigned: true,
    default: () => '\'0\'',
  })
  class: number | null;

  @Column('tinyint', {
    name: 'subclass',
    nullable: true,
    comment: 'The subclass of the item template.',
    unsigned: true,
    default: () => '\'0\'',
  })
  subclass: number | null;

  @Column('mediumint', {
    name: 'material',
    nullable: true,
    comment: 'The material that the item is made of.',
    unsigned: true,
    default: () => '\'0\'',
  })
  material: number | null;

  @Column('mediumint', {
    name: 'displayid',
    nullable: true,
    comment: 'A display model identifier for the Item.',
    unsigned: true,
    default: () => '\'0\'',
  })
  displayid: number | null;

  @Column('tinyint', {
    name: 'inventory_type',
    nullable: true,
    comment: 'Defines if and in which slot an item can be equipped.',
    unsigned: true,
    default: () => '\'0\'',
  })
  inventoryType: number | null;

  @Column('tinyint', {
    name: 'sheath_type',
    nullable: true,
    comment:
      'The value of this field controls how characters will show or hide items worn.',
    unsigned: true,
    default: () => '\'0\'',
  })
  sheathType: number | null;
}
