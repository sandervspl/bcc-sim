import { Column, Entity } from 'typeorm';

@Entity('item_enchantment_template', { schema: 'mangos1' })
export class ItemEnchantmentTemplate {
  @Column('mediumint', {
    primary: true,
    name: 'entry',
    comment: 'Random property type (See item_template.RandomProperty).',
    unsigned: true,
    default: () => '\'0\'',
  })
  entry: number;

  @Column('mediumint', {
    primary: true,
    name: 'ench',
    comment: 'Enchantment type (See ItemRandomProperties.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  ench: number;

  @Column('float', {
    name: 'chance',
    comment: 'Chance to get the enchantment (%).',
    unsigned: true,
    precision: 12,
    default: () => '\'0\'',
  })
  chance: number;
}
