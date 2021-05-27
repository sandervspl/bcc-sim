import { Column, Entity } from 'typeorm';

@Entity('spell_area', { schema: 'mangos1' })
export class SpellArea {
  @Column('mediumint', {
    primary: true,
    name: 'spell',
    comment: 'Spell ID (See Spell.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  spell: number;

  @Column('mediumint', {
    primary: true,
    name: 'area',
    comment: 'Area ID (See AreaTable.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  area: number;

  @Column('mediumint', {
    primary: true,
    name: 'quest_start',
    comment: 'Quest ID (See quest_template.entry).',
    unsigned: true,
    default: () => '\'0\'',
  })
  questStart: number;

  @Column('tinyint', {
    primary: true,
    name: 'quest_start_active',
    comment: 'Flag for quest_start.',
    unsigned: true,
    default: () => '\'0\'',
  })
  questStartActive: number;

  @Column('mediumint', {
    name: 'quest_end',
    comment: 'Quest ID (See quest_template.entry).',
    unsigned: true,
    default: () => '\'0\'',
  })
  questEnd: number;

  @Column('mediumint', {
    name: 'condition_id',
    comment: 'Condition ID (See conditions.condition_entry).',
    unsigned: true,
    default: () => '\'0\'',
  })
  conditionId: number;

  @Column('mediumint', {
    primary: true,
    name: 'aura_spell',
    comment: 'Spell ID (See Spell.dbc).',
    default: () => '\'0\'',
  })
  auraSpell: number;

  @Column('mediumint', {
    primary: true,
    name: 'racemask',
    comment: 'Race mask value.',
    unsigned: true,
    default: () => '\'0\'',
  })
  racemask: number;

  @Column('tinyint', {
    primary: true,
    name: 'gender',
    comment: 'The gender of characters to which the spell is applied.',
    unsigned: true,
    default: () => '\'2\'',
  })
  gender: number;

  @Column('tinyint', {
    name: 'autocast',
    comment: 'Autocast flag.',
    unsigned: true,
    default: () => '\'0\'',
  })
  autocast: number;
}
