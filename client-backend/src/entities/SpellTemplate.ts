import { Column, Entity } from 'typeorm';

@Entity('spell_template', { schema: 'mangos1' })
export class SpellTemplate {
  @Column('int', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => '\'0\'',
  })
  id: number;

  @Column('int', { name: 'proc_flags', unsigned: true, default: () => '\'0\'' })
  procFlags: number;

  @Column('int', { name: 'proc_chance', unsigned: true, default: () => '\'0\'' })
  procChance: number;

  @Column('int', {
    name: 'duration_index',
    unsigned: true,
    default: () => '\'0\'',
  })
  durationIndex: number;

  @Column('int', { name: 'effect0', unsigned: true, default: () => '\'0\'' })
  effect0: number;

  @Column('int', {
    name: 'effect0_implicit_target_a',
    unsigned: true,
    default: () => '\'0\'',
  })
  effect0ImplicitTargetA: number;

  @Column('int', {
    name: 'effect0_radius_idx',
    unsigned: true,
    default: () => '\'0\'',
  })
  effect0RadiusIdx: number;

  @Column('int', {
    name: 'effect0_apply_aura_name',
    unsigned: true,
    default: () => '\'0\'',
  })
  effect0ApplyAuraName: number;

  @Column('int', {
    name: 'effect0_misc_value',
    unsigned: true,
    default: () => '\'0\'',
  })
  effect0MiscValue: number;

  @Column('int', {
    name: 'effect0_misc_value_b',
    unsigned: true,
    default: () => '\'0\'',
  })
  effect0MiscValueB: number;

  @Column('int', {
    name: 'effect0_trigger_spell',
    unsigned: true,
    default: () => '\'0\'',
  })
  effect0TriggerSpell: number;

  @Column('varchar', { name: 'comments', length: 255 })
  comments: string;
}
