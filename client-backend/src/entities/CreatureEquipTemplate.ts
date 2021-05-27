import { Column, Entity } from 'typeorm';

@Entity('creature_equip_template', { schema: 'mangos1' })
export class CreatureEquipTemplate {
  @Column('mediumint', {
    primary: true,
    name: 'entry',
    comment: 'Unique Id of the equipment, no link with any official data.',
    unsigned: true,
    default: () => '\'0\'',
  })
  entry: number;

  @Column('mediumint', {
    name: 'equipentry1',
    comment:
      'This is the item of the equipment used in the right hand (See Item.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  equipentry1: number;

  @Column('mediumint', {
    name: 'equipentry2',
    comment:
      'This is the item of the equipment used in the left hand (See Item.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  equipentry2: number;

  @Column('mediumint', {
    name: 'equipentry3',
    comment:
      'This is the item of the equipment used in the distance slot (See Item.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  equipentry3: number;
}
