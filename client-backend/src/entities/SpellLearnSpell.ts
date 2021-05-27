import { Column, Entity } from 'typeorm';

@Entity('spell_learn_spell', { schema: 'mangos1' })
export class SpellLearnSpell {
  @Column('smallint', {
    primary: true,
    name: 'entry',
    comment: 'Spell ID (See Spell.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  entry: number;

  @Column('smallint', {
    primary: true,
    name: 'SpellID',
    comment: 'Spell ID (See Spell.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellId: number;

  @Column('tinyint', {
    name: 'Active',
    comment: 'Active flag.',
    unsigned: true,
    default: () => '\'1\'',
  })
  active: number;
}
