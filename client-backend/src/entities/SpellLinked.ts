import { Column, Entity } from 'typeorm';

@Entity('spell_linked', { schema: 'mangos1' })
export class SpellLinked {
  @Column('int', {
    primary: true,
    name: 'entry',
    comment: 'Spell ID (See Spell.dbc).',
    unsigned: true,
  })
  entry: number;

  @Column('int', {
    primary: true,
    name: 'linked_entry',
    comment: 'Spell ID (See Spell.dbc).',
    unsigned: true,
  })
  linkedEntry: number;

  @Column('int', {
    primary: true,
    name: 'type',
    comment: 'Link type.',
    unsigned: true,
    default: () => '\'0\'',
  })
  type: number;

  @Column('int', {
    name: 'effect_mask',
    comment: 'Effect mask.',
    unsigned: true,
    default: () => '\'0\'',
  })
  effectMask: number;

  @Column('varchar', {
    name: 'comment',
    comment: 'Textual comment.',
    length: 255,
  })
  comment: string;
}
