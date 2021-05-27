import { Column, Entity } from 'typeorm';

@Entity('creature_template_classlevelstats', { schema: 'mangos1' })
export class CreatureTemplateClasslevelstats {
  @Column('tinyint', {
    primary: true,
    name: 'Level',
    comment: 'Creature level for the stats.',
  })
  level: number;

  @Column('tinyint', {
    primary: true,
    name: 'Class',
    comment:
      'A creature\'s class. The following table describes the available classes.',
  })
  class: number;

  @Column('mediumint', {
    name: 'BaseHealthExp0',
    comment: 'Base health value for expansion 0 aka. vanilla WoW.',
    unsigned: true,
    default: () => '\'0\'',
  })
  baseHealthExp0: number;

  @Column('mediumint', {
    name: 'BaseHealthExp1',
    unsigned: true,
    default: () => '\'0\'',
  })
  baseHealthExp1: number;

  @Column('mediumint', {
    name: 'BaseMana',
    comment: 'Base mana value for any creature of this level and class.',
    unsigned: true,
    default: () => '\'0\'',
  })
  baseMana: number;

  @Column('float', {
    name: 'BaseDamageExp0',
    comment: 'Base damage value for expansion 0 aka. vanilla WoW.',
    precision: 12,
    default: () => '\'0\'',
  })
  baseDamageExp0: number;

  @Column('float', {
    name: 'BaseDamageExp1',
    precision: 12,
    default: () => '\'0\'',
  })
  baseDamageExp1: number;

  @Column('float', {
    name: 'BaseMeleeAttackPower',
    comment:
      'Base melee attack power that has been factored for low level creatures.',
    precision: 12,
    default: () => '\'0\'',
  })
  baseMeleeAttackPower: number;

  @Column('float', {
    name: 'BaseRangedAttackPower',
    comment: 'Base ranged attack power.',
    precision: 12,
    default: () => '\'0\'',
  })
  baseRangedAttackPower: number;

  @Column('mediumint', {
    name: 'BaseArmor',
    comment: 'Base armor value for any creature of this level and class.',
    unsigned: true,
    default: () => '\'0\'',
  })
  baseArmor: number;
}
