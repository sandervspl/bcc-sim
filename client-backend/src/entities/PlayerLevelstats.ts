import { Column, Entity } from 'typeorm';

@Entity('player_levelstats', { schema: 'mangos1' })
export class PlayerLevelstats {
  @Column('tinyint', {
    primary: true,
    name: 'race',
    comment: 'A bit-mask corresponding to races that should get the spell. ',
    unsigned: true,
  })
  race: number;

  @Column('tinyint', {
    primary: true,
    name: 'class',
    comment: 'A bit-mask corresponding to class that should get the spell',
    unsigned: true,
  })
  class: number;

  @Column('tinyint', {
    primary: true,
    name: 'level',
    comment: 'The level at which the stats should be applied.',
    unsigned: true,
  })
  level: number;

  @Column('tinyint', {
    name: 'str',
    comment: 'The base strength of the character.',
    unsigned: true,
  })
  str: number;

  @Column('tinyint', {
    name: 'agi',
    comment: 'The base agility of the character.',
    unsigned: true,
  })
  agi: number;

  @Column('tinyint', {
    name: 'sta',
    comment: 'The base stamina of the character.',
    unsigned: true,
  })
  sta: number;

  @Column('tinyint', {
    name: 'inte',
    comment: 'The base intellect of the character.',
    unsigned: true,
  })
  inte: number;

  @Column('tinyint', {
    name: 'spi',
    comment: 'The base spirit of the character.',
    unsigned: true,
  })
  spi: number;
}
