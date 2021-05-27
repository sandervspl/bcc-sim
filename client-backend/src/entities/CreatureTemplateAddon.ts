import { Column, Entity } from 'typeorm';

@Entity('creature_template_addon', { schema: 'mangos1' })
export class CreatureTemplateAddon {
  @Column('mediumint', {
    primary: true,
    name: 'entry',
    comment: 'This references the creature_template table\'s unique ID.',
    unsigned: true,
    default: () => '\'0\'',
  })
  entry: number;

  @Column('mediumint', {
    name: 'mount',
    comment:
      'A display model identifier used as mount for the creature_template.',
    unsigned: true,
    default: () => '\'0\'',
  })
  mount: number;

  @Column('int', {
    name: 'bytes1',
    comment: 'TODO',
    unsigned: true,
    default: () => '\'0\'',
  })
  bytes1: number;

  @Column('tinyint', {
    name: 'b2_0_sheath',
    comment: 'Defines the sheath state of the creature_template.',
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

  @Column('mediumint', {
    name: 'emote',
    comment: 'Emote ID that the creature should continually perform.',
    unsigned: true,
    default: () => '\'0\'',
  })
  emote: number;

  @Column('int', {
    name: 'moveflags',
    comment:
      '\nThe flag controls how a creature_template will be animated while moving.',
    unsigned: true,
    default: () => '\'0\'',
  })
  moveflags: number;

  @Column('text', {
    name: 'auras',
    nullable: true,
    comment: 'Allows to attach auras to a creature_template entry.',
  })
  auras: string | null;
}
