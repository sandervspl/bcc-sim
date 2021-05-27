import { Column, Entity } from 'typeorm';

@Entity('creature_template', { schema: 'mangos1' })
export class CreatureTemplate {
  @Column('mediumint', {
    primary: true,
    name: 'Entry',
    comment:
      'This is the Primary NPC Entry Number and is Also the Dungeon Normal Mode / Raid ',
    unsigned: true,
    default: () => '\'0\'',
  })
  entry: number;

  @Column('char', {
    name: 'Name',
    comment: 'The creature\'s name that will be displayed.',
    length: 100,
  })
  name: string;

  @Column('char', {
    name: 'SubName',
    nullable: true,
    comment: 'An optional tag, which will be shown below the creature\'s name.',
    length: 100,
  })
  subName: string | null;

  @Column('char', { name: 'IconName', nullable: true, length: 100 })
  iconName: string | null;

  @Column('tinyint', {
    name: 'MinLevel',
    comment: 'The minimum level of the creature when it is spawned in-game.',
    unsigned: true,
    default: () => '\'1\'',
  })
  minLevel: number;

  @Column('tinyint', {
    name: 'MaxLevel',
    comment: 'The maximum level of the creature when it is spawned in-game.',
    unsigned: true,
    default: () => '\'1\'',
  })
  maxLevel: number;

  @Column('mediumint', {
    name: 'HeroicEntry',
    unsigned: true,
    default: () => '\'0\'',
  })
  heroicEntry: number;

  @Column('mediumint', {
    name: 'ModelId1',
    comment: 'A display model identifier for the creature_template.',
    unsigned: true,
    default: () => '\'0\'',
  })
  modelId1: number;

  @Column('mediumint', {
    name: 'ModelId2',
    comment:
      'An alternative display model identifier for the creature_template.',
    unsigned: true,
    default: () => '\'0\'',
  })
  modelId2: number;

  @Column('mediumint', {
    name: 'ModelId3',
    unsigned: true,
    default: () => '\'0\'',
  })
  modelId3: number;

  @Column('mediumint', {
    name: 'ModelId4',
    unsigned: true,
    default: () => '\'0\'',
  })
  modelId4: number;

  @Column('smallint', {
    name: 'FactionAlliance',
    comment:
      'The Faction If The Creature Is On The Alliance Side (See FactionTemplate.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  factionAlliance: number;

  @Column('smallint', {
    name: 'FactionHorde',
    comment:
      'The Faction If The Creature Is On The Alliance Side (See FactionTemplate.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  factionHorde: number;

  @Column('float', {
    name: 'Scale',
    comment: 'The scale/size of the creature.<br />Normal => 1 (100%)',
    precision: 12,
    default: () => '\'1\'',
  })
  scale: number;

  @Column('tinyint', {
    name: 'Family',
    comment: 'This Defines The Family That This Creature Belongs To.',
    default: () => '\'0\'',
  })
  family: number;

  @Column('tinyint', {
    name: 'CreatureType',
    comment: 'This Field Defines The Type Of Creature This NPC Is.',
    unsigned: true,
    default: () => '\'0\'',
  })
  creatureType: number;

  @Column('tinyint', {
    name: 'InhabitType',
    comment:
      'This Field Controls Where The Creature Can Move Into, Chase And Attack.',
    unsigned: true,
    default: () => '\'3\'',
  })
  inhabitType: number;

  @Column('tinyint', {
    name: 'RegenerateStats',
    comment:
      'Controls if a creature template should regenerate it\'s Health/Mana.',
    unsigned: true,
    default: () => '\'3\'',
  })
  regenerateStats: number;

  @Column('tinyint', {
    name: 'RacialLeader',
    comment: 'Determines if a creature template is a racial leader.',
    unsigned: true,
    default: () => '\'0\'',
  })
  racialLeader: number;

  @Column('int', {
    name: 'NpcFlags',
    comment: 'The flags of the creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  npcFlags: number;

  @Column('int', {
    name: 'UnitFlags',
    comment: 'Allows the manual application of unit flags to creatures.',
    unsigned: true,
    default: () => '\'0\'',
  })
  unitFlags: number;

  @Column('int', {
    name: 'DynamicFlags',
    comment:
      'Dynamic flags are used to control the visual appearance of a creature template.',
    unsigned: true,
    default: () => '\'0\'',
  })
  dynamicFlags: number;

  @Column('int', {
    name: 'ExtraFlags',
    comment:
      'The extra flags allow to modify special behaviour for a creature_template. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  extraFlags: number;

  @Column('int', {
    name: 'CreatureTypeFlags',
    comment: 'Type flags seem to control what actions a player can perform.',
    unsigned: true,
    default: () => '\'0\'',
  })
  creatureTypeFlags: number;

  @Column('float', {
    name: 'SpeedWalk',
    comment: 'Controls how fast the creature can move in walking mode.',
    precision: 12,
    default: () => '\'1\'',
  })
  speedWalk: number;

  @Column('float', {
    name: 'SpeedRun',
    comment: 'Controls how fast the creature can move in running mode.',
    precision: 12,
    default: () => '\'1.14286\'',
  })
  speedRun: number;

  @Column('tinyint', {
    name: 'UnitClass',
    comment:
      'A creature\'s class. The following table describes the available classes.',
    unsigned: true,
    default: () => '\'0\'',
  })
  unitClass: number;

  @Column('tinyint', {
    name: 'Rank',
    comment: 'The border of a creature portrait.',
    unsigned: true,
    default: () => '\'0\'',
  })
  rank: number;

  @Column('tinyint', { name: 'Expansion', default: () => '\'-1\'' })
  expansion: number;

  @Column('float', {
    name: 'HealthMultiplier',
    comment: 'Modifies the creature template\'s health by this factor.',
    precision: 12,
    default: () => '\'1\'',
  })
  healthMultiplier: number;

  @Column('float', {
    name: 'PowerMultiplier',
    comment: 'The affects the creature\'s power.',
    precision: 12,
    default: () => '\'1\'',
  })
  powerMultiplier: number;

  @Column('float', {
    name: 'DamageMultiplier',
    comment: 'This affects the amount of damage a creature can do.',
    precision: 12,
    default: () => '\'1\'',
  })
  damageMultiplier: number;

  @Column('float', {
    name: 'DamageVariance',
    comment: 'This is used in damage calculations.',
    precision: 12,
    default: () => '\'1\'',
  })
  damageVariance: number;

  @Column('float', {
    name: 'ArmorMultiplier',
    comment: 'Modify the creature template\'s armor by this factor.',
    precision: 12,
    default: () => '\'1\'',
  })
  armorMultiplier: number;

  @Column('float', {
    name: 'ExperienceMultiplier',
    comment: 'This affects the amount of experience the creature will earn.',
    precision: 12,
    default: () => '\'1\'',
  })
  experienceMultiplier: number;

  @Column('int', {
    name: 'MinLevelHealth',
    comment: 'The minimum health of the creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  minLevelHealth: number;

  @Column('int', {
    name: 'MaxLevelHealth',
    comment: 'The maximum health of the creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  maxLevelHealth: number;

  @Column('int', {
    name: 'MinLevelMana',
    comment:
      'The miminum mana of the creature if the creature has variable mana.',
    unsigned: true,
    default: () => '\'0\'',
  })
  minLevelMana: number;

  @Column('int', {
    name: 'MaxLevelMana',
    comment: 'The maximum mana of the creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  maxLevelMana: number;

  @Column('float', {
    name: 'MinMeleeDmg',
    comment: 'Minimum damage the creature deals in melee combat.',
    precision: 12,
    default: () => '\'0\'',
  })
  minMeleeDmg: number;

  @Column('float', {
    name: 'MaxMeleeDmg',
    comment: 'Maximum damage the creature deals in melee combat.',
    precision: 12,
    default: () => '\'0\'',
  })
  maxMeleeDmg: number;

  @Column('float', {
    name: 'MinRangedDmg',
    comment: 'Minimum damage the creature deals in ranged combat.',
    precision: 12,
    default: () => '\'0\'',
  })
  minRangedDmg: number;

  @Column('float', {
    name: 'MaxRangedDmg',
    comment: 'Maximum damage the creature deals in ranged combat.',
    precision: 12,
    default: () => '\'0\'',
  })
  maxRangedDmg: number;

  @Column('mediumint', {
    name: 'Armor',
    comment: 'The total armor of the creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  armor: number;

  @Column('int', {
    name: 'MeleeAttackPower',
    comment: 'The attack power for the creature\'s melee attacks.',
    unsigned: true,
    default: () => '\'0\'',
  })
  meleeAttackPower: number;

  @Column('smallint', {
    name: 'RangedAttackPower',
    comment: 'The attack power for the creature\'s ranged attacks.',
    unsigned: true,
    default: () => '\'0\'',
  })
  rangedAttackPower: number;

  @Column('int', {
    name: 'MeleeBaseAttackTime',
    comment: 'A creature\'s melee attack time in milliseconds.',
    unsigned: true,
    default: () => '\'2000\'',
  })
  meleeBaseAttackTime: number;

  @Column('int', {
    name: 'RangedBaseAttackTime',
    comment: 'The delay between ranged attacks, in milliseconds.',
    unsigned: true,
    default: () => '\'2000\'',
  })
  rangedBaseAttackTime: number;

  @Column('tinyint', {
    name: 'DamageSchool',
    comment: 'A damage school for melee combat.',
    default: () => '\'0\'',
  })
  damageSchool: number;

  @Column('mediumint', {
    name: 'MinLootGold',
    comment: 'Minimum money the creature drops when killed, in copper.',
    unsigned: true,
    default: () => '\'0\'',
  })
  minLootGold: number;

  @Column('mediumint', {
    name: 'MaxLootGold',
    comment: 'The money dropped by the creature in copper.',
    unsigned: true,
    default: () => '\'0\'',
  })
  maxLootGold: number;

  @Column('mediumint', {
    name: 'LootId',
    comment: 'This adds loot to the creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  lootId: number;

  @Column('mediumint', {
    name: 'PickpocketLootId',
    comment: 'This adds pickpocket loot to the creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  pickpocketLootId: number;

  @Column('mediumint', {
    name: 'SkinningLootId',
    comment: 'This adds skinning loot to the creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  skinningLootId: number;

  @Column('int', {
    name: 'KillCredit1',
    comment:
      'If killing a creature should credit towards a different creature_template.',
    unsigned: true,
    default: () => '\'0\'',
  })
  killCredit1: number;

  @Column('int', {
    name: 'KillCredit2',
    comment:
      'If killing a creature should credit towards a different creature_template.',
    unsigned: true,
    default: () => '\'0\'',
  })
  killCredit2: number;

  @Column('int', {
    name: 'MechanicImmuneMask',
    comment:
      'This mask can be used to make creatures immune to spell mechanics.',
    unsigned: true,
    default: () => '\'0\'',
  })
  mechanicImmuneMask: number;

  @Column('int', {
    name: 'SchoolImmuneMask',
    unsigned: true,
    default: () => '\'0\'',
  })
  schoolImmuneMask: number;

  @Column('smallint', {
    name: 'ResistanceHoly',
    comment: 'The Holy resistance of the creature.',
    default: () => '\'0\'',
  })
  resistanceHoly: number;

  @Column('smallint', {
    name: 'ResistanceFire',
    comment: 'The Fire resistance of the creature.',
    default: () => '\'0\'',
  })
  resistanceFire: number;

  @Column('smallint', {
    name: 'ResistanceNature',
    comment: 'The Nature resistance of the creature.',
    default: () => '\'0\'',
  })
  resistanceNature: number;

  @Column('smallint', {
    name: 'ResistanceFrost',
    comment: 'The Frost resistance of the creature.',
    default: () => '\'0\'',
  })
  resistanceFrost: number;

  @Column('smallint', {
    name: 'ResistanceShadow',
    comment: 'The Shadow resistance of the creature.',
    default: () => '\'0\'',
  })
  resistanceShadow: number;

  @Column('smallint', {
    name: 'ResistanceArcane',
    comment: 'The Arcane resistance of the creature.',
    default: () => '\'0\'',
  })
  resistanceArcane: number;

  @Column('mediumint', {
    name: 'PetSpellDataId',
    comment: 'ID that displays what spells the pet has in the client.',
    unsigned: true,
    default: () => '\'0\'',
  })
  petSpellDataId: number;

  @Column('tinyint', {
    name: 'MovementType',
    comment:
      'The movement type defines what a creature spawn will behave like after spawning.',
    unsigned: true,
    default: () => '\'0\'',
  })
  movementType: number;

  @Column('tinyint', {
    name: 'TrainerType',
    comment: 'This details what kind of trainer the creature is.',
    default: () => '\'0\'',
  })
  trainerType: number;

  @Column('mediumint', {
    name: 'TrainerSpell',
    comment: 'This will restrict access to a profession trainer.',
    unsigned: true,
    default: () => '\'0\'',
  })
  trainerSpell: number;

  @Column('tinyint', {
    name: 'TrainerClass',
    comment:
      'The value of this field will restrict access to class and/or pet trainers',
    unsigned: true,
    default: () => '\'0\'',
  })
  trainerClass: number;

  @Column('tinyint', {
    name: 'TrainerRace',
    comment:
      'This field allows to restrict a riding trainer to a specific race.',
    unsigned: true,
    default: () => '\'0\'',
  })
  trainerRace: number;

  @Column('mediumint', {
    name: 'TrainerTemplateId',
    comment: 'This field adds a training spells to a creature template.',
    unsigned: true,
    default: () => '\'0\'',
  })
  trainerTemplateId: number;

  @Column('mediumint', {
    name: 'VendorTemplateId',
    comment: 'This field adds a vendor items to a creature template.',
    unsigned: true,
    default: () => '\'0\'',
  })
  vendorTemplateId: number;

  @Column('mediumint', {
    name: 'EquipmentTemplateId',
    comment: 'The field adds equipment to a creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  equipmentTemplateId: number;

  @Column('mediumint', {
    name: 'GossipMenuId',
    comment: 'This field is used for adding gossip to the creature.',
    unsigned: true,
    default: () => '\'0\'',
  })
  gossipMenuId: number;

  @Column('char', {
    name: 'AIName',
    comment: 'This string determines which built-in AI script will be used.',
    length: 64,
  })
  aiName: string;
}
