import { Column, Entity } from 'typeorm';

@Entity('spell_target_position', { schema: 'mangos1' })
export class SpellTargetPosition {
  @Column('mediumint', {
    primary: true,
    name: 'id',
    comment:
      'The spell identifier. The value has to match with a defined spell identifier.',
    unsigned: true,
    default: () => '\'0\'',
  })
  id: number;

  @Column('smallint', {
    name: 'target_map',
    comment: 'The target map\'s identifier.',
    unsigned: true,
    default: () => '\'0\'',
  })
  targetMap: number;

  @Column('float', {
    name: 'target_position_x',
    comment: 'The X position on the target map.',
    precision: 12,
    default: () => '\'0\'',
  })
  targetPositionX: number;

  @Column('float', {
    name: 'target_position_y',
    comment: 'The Y position on the target map.',
    precision: 12,
    default: () => '\'0\'',
  })
  targetPositionY: number;

  @Column('float', {
    name: 'target_position_z',
    comment: 'The Z position on the target map.',
    precision: 12,
    default: () => '\'0\'',
  })
  targetPositionZ: number;

  @Column('float', {
    name: 'target_orientation',
    comment: 'The orientation for the character on the target map.',
    precision: 12,
    default: () => '\'0\'',
  })
  targetOrientation: number;
}
