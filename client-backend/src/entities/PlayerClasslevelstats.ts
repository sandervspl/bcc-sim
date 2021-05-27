import { Column, Entity } from 'typeorm';

@Entity('player_classlevelstats', { schema: 'mangos1' })
export class PlayerClasslevelstats {
  @Column('tinyint', { primary: true, name: 'class', unsigned: true })
  class: number;

  @Column('tinyint', { primary: true, name: 'level', unsigned: true })
  level: number;

  @Column('smallint', { name: 'basehp', unsigned: true })
  basehp: number;

  @Column('smallint', {
    name: 'basemana',
    comment: 'Base mana value for any creature of this level and class.',
    unsigned: true,
  })
  basemana: number;
}
