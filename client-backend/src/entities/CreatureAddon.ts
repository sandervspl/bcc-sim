import { Column, Entity } from 'typeorm';

@Entity('creature_addon', { schema: 'mangos1' })
export class CreatureAddon {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Signifies a unique creature guid (See creature.guid).',
    unsigned: true,
    default: () => '\'0\'',
  })
  guid: number;

  @Column('mediumint', {
    name: 'mount',
    comment:
      'The model ID of the mount to be used to make the creature appear mounted.',
    unsigned: true,
    default: () => '\'0\'',
  })
  mount: number;

  @Column('int', {
    name: 'bytes1',
    comment:
      'The value here overrides the value for the creature\'s unit field UNIT_FIELD_BYTE',
    unsigned: true,
    default: () => '\'0\'',
  })
  bytes1: number;

  @Column('tinyint', {
    name: 'b2_0_sheath',
    comment: 'SheathState.',
    unsigned: true,
    default: () => '\'0\'',
  })
  b2_0Sheath: number;

  @Column('tinyint', {
    name: 'b2_1_flags',
    comment:
      'The value here overrides the value for the creature\'s unit field UNIT_FIELD_BYTE',
    unsigned: true,
    default: () => '\'0\'',
  })
  b2_1Flags: number;

  @Column('int', {
    name: 'emote',
    comment: 'Emote ID that the creature should continually perform.',
    unsigned: true,
    default: () => '\'0\'',
  })
  emote: number;

  @Column('int', {
    name: 'moveflags',
    comment:
      'Flags controlling how the creature will behave animation-wise while moving.',
    unsigned: true,
    default: () => '\'0\'',
  })
  moveflags: number;

  @Column('text', {
    name: 'auras',
    nullable: true,
    comment: 'This field controls any auras to be applied on the creature.',
  })
  auras: string | null;
}
