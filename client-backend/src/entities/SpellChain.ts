import { Column, Entity } from 'typeorm';

@Entity('spell_chain', { schema: 'mangos1' })
export class SpellChain {
  @Column('mediumint', {
    primary: true,
    name: 'spell_id',
    comment: 'Spell ID.',
    default: () => '\'0\'',
  })
  spellId: number;

  @Column('mediumint', {
    name: 'prev_spell',
    comment: 'Previous rank of the spell.',
    default: () => '\'0\'',
  })
  prevSpell: number;

  @Column('mediumint', {
    name: 'first_spell',
    comment: 'Lowest rank spell.',
    default: () => '\'0\'',
  })
  firstSpell: number;

  @Column('tinyint', { name: 'rank', comment: 'Rank.', default: () => '\'0\'' })
  rank: number;

  @Column('mediumint', {
    name: 'req_spell',
    comment: 'Required spell ID.',
    default: () => '\'0\'',
  })
  reqSpell: number;
}
