import { Column, Entity } from 'typeorm';

@Entity('creature_equip_template_raw', { schema: 'mangos1' })
export class CreatureEquipTemplateRaw {
  @Column('mediumint', {
    primary: true,
    name: 'entry',
    comment: 'Deprecated Table',
    unsigned: true,
    default: () => '\'0\'',
  })
  entry: number;

  @Column('mediumint', {
    name: 'equipmodel1',
    comment: 'Deprecated Table',
    unsigned: true,
    default: () => '\'0\'',
  })
  equipmodel1: number;

  @Column('mediumint', {
    name: 'equipmodel2',
    comment: 'Deprecated Table',
    unsigned: true,
    default: () => '\'0\'',
  })
  equipmodel2: number;

  @Column('mediumint', {
    name: 'equipmodel3',
    comment: 'Deprecated Table',
    unsigned: true,
    default: () => '\'0\'',
  })
  equipmodel3: number;

  @Column('int', {
    name: 'equipinfo1',
    comment: 'Deprecated Table',
    unsigned: true,
    default: () => '\'0\'',
  })
  equipinfo1: number;

  @Column('int', {
    name: 'equipinfo2',
    comment: 'Deprecated Table',
    unsigned: true,
    default: () => '\'0\'',
  })
  equipinfo2: number;

  @Column('int', {
    name: 'equipinfo3',
    comment: 'Deprecated Table',
    unsigned: true,
    default: () => '\'0\'',
  })
  equipinfo3: number;

  @Column('int', {
    name: 'equipslot1',
    comment: 'Deprecated Table',
    default: () => '\'0\'',
  })
  equipslot1: number;

  @Column('int', {
    name: 'equipslot2',
    comment: 'Deprecated Table',
    default: () => '\'0\'',
  })
  equipslot2: number;

  @Column('int', {
    name: 'equipslot3',
    comment: 'Deprecated Table',
    default: () => '\'0\'',
  })
  equipslot3: number;
}
