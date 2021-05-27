import { Column, Entity } from 'typeorm';

@Entity('creature_template_spells', { schema: 'mangos1' })
export class CreatureTemplateSpells {
  @Column('mediumint', {
    primary: true,
    name: 'entry',
    comment: 'This references the unique ID in table creature_template.',
    unsigned: true,
  })
  entry: number;

  @Column('mediumint', {
    name: 'spell1',
    comment:
      'The spell identifier. The value has to match with a defined spell identifier.',
    unsigned: true,
  })
  spell1: number;

  @Column('mediumint', {
    name: 'spell2',
    comment:
      'The spell identifier. The value has to match with a defined spell identifier.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spell2: number;

  @Column('mediumint', {
    name: 'spell3',
    comment:
      'The spell identifier. The value has to match with a defined spell identifier.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spell3: number;

  @Column('mediumint', {
    name: 'spell4',
    comment:
      'The spell identifier. The value has to match with a defined spell identifier.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spell4: number;
}
