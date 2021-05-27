import { Column, Entity } from 'typeorm';

@Entity('spell_elixir', { schema: 'mangos1' })
export class SpellElixir {
  @Column('int', {
    primary: true,
    name: 'entry',
    comment: 'Spell ID (See Spell.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  entry: number;

  @Column('tinyint', {
    name: 'mask',
    comment: 'Defines what type of potion/food spell this is.',
    unsigned: true,
    default: () => '\'0\'',
  })
  mask: number;
}
