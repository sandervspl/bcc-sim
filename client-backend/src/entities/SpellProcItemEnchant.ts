import { Column, Entity } from 'typeorm';

@Entity('spell_proc_item_enchant', { schema: 'mangos1' })
export class SpellProcItemEnchant {
  @Column('mediumint', {
    primary: true,
    name: 'entry',
    comment: 'Spell ID (See Spell.dbc).',
    unsigned: true,
  })
  entry: number;

  @Column('float', {
    name: 'ppmRate',
    comment: 'Proc frequency limit, per minute.',
    precision: 12,
    default: () => '\'0\'',
  })
  ppmRate: number;
}
