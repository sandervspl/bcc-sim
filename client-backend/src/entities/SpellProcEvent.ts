import { Column, Entity } from 'typeorm';

@Entity('spell_proc_event', { schema: 'mangos1' })
export class SpellProcEvent {
  @Column('mediumint', {
    primary: true,
    name: 'entry',
    comment: 'Spell ID (See Spell.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  entry: number;

  @Column('tinyint', {
    name: 'SchoolMask',
    comment: 'Spell school mask.',
    unsigned: true,
    default: () => '\'0\'',
  })
  schoolMask: number;

  @Column('smallint', {
    name: 'SpellFamilyName',
    comment: 'Spell family name.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellFamilyName: number;

  @Column('bigint', {
    name: 'SpellFamilyMask0',
    comment: 'Spell family mask for effect 0.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellFamilyMask0: string;

  @Column('bigint', {
    name: 'SpellFamilyMask1',
    comment: 'Spell family mask for effect 1.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellFamilyMask1: string;

  @Column('bigint', {
    name: 'SpellFamilyMask2',
    comment: 'Spell family mask for effect 2.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellFamilyMask2: string;

  @Column('int', {
    name: 'procFlags',
    comment: 'Flags defining conditions for aura to proc.',
    unsigned: true,
    default: () => '\'0\'',
  })
  procFlags: number;

  @Column('int', {
    name: 'procEx',
    comment: 'Flags refining proc condition.',
    unsigned: true,
    default: () => '\'0\'',
  })
  procEx: number;

  @Column('float', {
    name: 'ppmRate',
    comment: 'Proc frequency limit.',
    precision: 12,
    default: () => '\'0\'',
  })
  ppmRate: number;

  @Column('float', {
    name: 'CustomChance',
    comment: 'Chance of proc.',
    precision: 12,
    default: () => '\'0\'',
  })
  customChance: number;

  @Column('int', {
    name: 'Cooldown',
    comment: 'Cooldown (in msec).',
    unsigned: true,
    default: () => '\'0\'',
  })
  cooldown: number;
}
