import { Column, Entity } from 'typeorm';

@Entity('spell_affect', { schema: 'mangos1' })
export class SpellAffect {
  @Column('smallint', {
    primary: true,
    name: 'entry',
    comment: 'Spell ID (See Spell.dbc#Id).',
    unsigned: true,
    default: () => '\'0\'',
  })
  entry: number;

  @Column('tinyint', {
    primary: true,
    name: 'effectId',
    comment: 'Effect ID (See Spell.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  effectId: number;

  @Column('bigint', {
    name: 'SpellFamilyMask',
    comment: 'SpellFamilyFlags (See Spell.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellFamilyMask: string;
}
