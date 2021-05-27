import { Column, Entity } from 'typeorm';

@Entity('spell_threat', { schema: 'mangos1' })
export class SpellThreat {
  @Column('mediumint', {
    primary: true,
    name: 'entry',
    comment: 'The spell identifier.',
    unsigned: true,
  })
  entry: number;

  @Column('smallint', {
    name: 'Threat',
    comment: 'The value of threat to add or remove from the characters threat.',
  })
  threat: number;

  @Column('float', {
    name: 'multiplier',
    comment:
      'Any value here will modify the spells threat with the factor given here.',
    precision: 12,
    default: () => '\'1\'',
  })
  multiplier: number;

  @Column('float', {
    name: 'ap_bonus',
    comment:
      'Any value here will modify the spells attack power with the factor given here.',
    precision: 12,
    default: () => '\'0\'',
  })
  apBonus: number;
}
