import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('idx_map', ['map'], {})
@Index('idx_id', ['id'], {})
@Entity('creature', { schema: 'mangos1' })
export class Creature {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'guid',
    comment:
      'A unique identifier given to each creature to distinguish creatures.',
    unsigned: true,
  })
  guid: number;

  @Column('mediumint', {
    name: 'id',
    comment:
      'The id of the template that is used when instantiating this creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  id: number;

  @Column('smallint', {
    name: 'map',
    comment: 'The map id of the location of the creature (See map.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  map: number;

  @Column('tinyint', {
    name: 'spawnMask',
    unsigned: true,
    default: () => '\'1\'',
  })
  spawnMask: number;

  @Column('mediumint', {
    name: 'modelid',
    comment: 'The model id of the the creature. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  modelid: number;

  @Column('mediumint', {
    name: 'equipment_id',
    comment: 'The ID of the equipment that the creature is using.',
    default: () => '\'0\'',
  })
  equipmentId: number;

  @Column('float', {
    name: 'position_x',
    comment: 'The x position of the creature.',
    precision: 12,
    default: () => '\'0\'',
  })
  positionX: number;

  @Column('float', {
    name: 'position_y',
    comment: 'The y position of the creature.',
    precision: 12,
    default: () => '\'0\'',
  })
  positionY: number;

  @Column('float', {
    name: 'position_z',
    comment: 'The z position of the creature.',
    precision: 12,
    default: () => '\'0\'',
  })
  positionZ: number;

  @Column('float', {
    name: 'orientation',
    comment:
      'The orientation of the creature. (North = 0.0; South = pi (3.14159))',
    precision: 12,
    default: () => '\'0\'',
  })
  orientation: number;

  @Column('int', {
    name: 'spawntimesecs',
    comment: 'The respawn time of the creature in seconds. ',
    unsigned: true,
    default: () => '\'120\'',
  })
  spawntimesecs: number;

  @Column('float', {
    name: 'spawndist',
    comment:
      'The maximum distance that the creature should spawn from its spawn point.',
    precision: 12,
    default: () => '\'5\'',
  })
  spawndist: number;

  @Column('mediumint', {
    name: 'currentwaypoint',
    comment: 'The current waypoint of the creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  currentwaypoint: number;

  @Column('int', {
    name: 'curhealth',
    comment: 'The current health of the creature.',
    unsigned: true,
    default: () => '\'1\'',
  })
  curhealth: number;

  @Column('int', {
    name: 'curmana',
    comment: 'The current mana of the creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  curmana: number;

  @Column('tinyint', {
    name: 'DeathState',
    comment: 'The creature\'s death state.',
    unsigned: true,
    default: () => '\'0\'',
  })
  deathState: number;

  @Column('tinyint', {
    name: 'MovementType',
    comment: 'The movement type associated with this creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  movementType: number;
}
