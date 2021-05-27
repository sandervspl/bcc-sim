import { Column, Entity } from 'typeorm';

@Entity('spell_bonus_data', { schema: 'mangos1' })
export class SpellBonusData {
  @Column('smallint', {
    primary: true,
    name: 'entry',
    comment: 'Spell ID (See Spell.dbc).',
    unsigned: true,
  })
  entry: number;

  @Column('float', {
    name: 'direct_bonus',
    comment: 'Direct damage bonus.',
    precision: 12,
    default: () => '\'0\'',
  })
  directBonus: number;

  @Column('float', {
    name: 'dot_bonus',
    comment: 'DoT tick bonus coefficient.',
    precision: 12,
    default: () => '\'0\'',
  })
  dotBonus: number;

  @Column('float', {
    name: 'ap_bonus',
    comment:
      'Any value here will modify the spells attack power with the factor given here.',
    precision: 12,
    default: () => '\'0\'',
  })
  apBonus: number;

  @Column('float', {
    name: 'ap_dot_bonus',
    comment: 'DoT bonus for physical damage.',
    precision: 12,
    default: () => '\'0\'',
  })
  apDotBonus: number;

  @Column('varchar', {
    name: 'comments',
    nullable: true,
    comment: 'Textual comment.',
    length: 255,
  })
  comments: string | null;
}
