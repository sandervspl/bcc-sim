import { Column, Entity } from 'typeorm';

@Entity('spell_pet_auras', { schema: 'mangos1' })
export class SpellPetAuras {
  @Column('mediumint', {
    primary: true,
    name: 'spell',
    comment: 'Spell ID (See Spell.dbc).',
    unsigned: true,
  })
  spell: number;

  @Column('mediumint', {
    primary: true,
    name: 'pet',
    comment: 'Creature ID (See creature_template.entry).',
    unsigned: true,
    default: () => '\'0\'',
  })
  pet: number;

  @Column('mediumint', {
    name: 'aura',
    comment: 'Spell ID (See Spell.dbc).',
    unsigned: true,
  })
  aura: number;
}
