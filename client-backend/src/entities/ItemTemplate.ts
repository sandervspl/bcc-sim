import { Column, Entity, Index } from 'typeorm';

@Index('idx_name', ['name'], {})
@Index('items_index', ['class'], {})
@Entity('item_template', { schema: 'mangos1' })
export class ItemTemplate {
  @Column('mediumint', {
    primary: true,
    name: 'entry',
    comment: 'Item prototype ID.',
    unsigned: true,
    default: () => '\'0\'',
  })
  entry: number;

  @Column('tinyint', {
    name: 'class',
    comment: 'Class of the item.',
    unsigned: true,
    default: () => '\'0\'',
  })
  class: number;

  @Column('tinyint', {
    name: 'subclass',
    comment: 'The subclass of the item template.',
    unsigned: true,
    default: () => '\'0\'',
  })
  subclass: number;

  @Column('int', { name: 'unk0', default: () => '\'-1\'' })
  unk0: number;

  @Column('varchar', { name: 'name', comment: 'Item name.', length: 255 })
  name: string;

  @Column('mediumint', {
    name: 'displayid',
    comment: 'A display model identifier for the Item.',
    unsigned: true,
    default: () => '\'0\'',
  })
  displayid: number;

  @Column('tinyint', {
    name: 'Quality',
    comment: 'Quality of item.',
    unsigned: true,
    default: () => '\'0\'',
  })
  quality: number;

  @Column('int', {
    name: 'Flags',
    comment: 'Item prototype flags.',
    unsigned: true,
    default: () => '\'0\'',
  })
  flags: number;

  @Column('tinyint', {
    name: 'BuyCount',
    comment: 'Stack size by vendors.',
    unsigned: true,
    default: () => '\'1\'',
  })
  buyCount: number;

  @Column('int', {
    name: 'BuyPrice',
    comment: 'Item buying price (coppers).',
    unsigned: true,
    default: () => '\'0\'',
  })
  buyPrice: number;

  @Column('int', {
    name: 'SellPrice',
    comment: 'Item selling price (coppers).',
    unsigned: true,
    default: () => '\'0\'',
  })
  sellPrice: number;

  @Column('tinyint', {
    name: 'InventoryType',
    comment: 'Inventory type.',
    unsigned: true,
    default: () => '\'0\'',
  })
  inventoryType: number;

  @Column('mediumint', {
    name: 'AllowableClass',
    comment: 'Mask of allowed classes.',
    default: () => '\'-1\'',
  })
  allowableClass: number;

  @Column('mediumint', {
    name: 'AllowableRace',
    comment: 'Mask of allowed races.',
    default: () => '\'-1\'',
  })
  allowableRace: number;

  @Column('tinyint', {
    name: 'ItemLevel',
    comment: 'Level of item.',
    unsigned: true,
    default: () => '\'0\'',
  })
  itemLevel: number;

  @Column('tinyint', {
    name: 'RequiredLevel',
    comment: 'Required level.',
    unsigned: true,
    default: () => '\'0\'',
  })
  requiredLevel: number;

  @Column('smallint', {
    name: 'RequiredSkill',
    comment: 'Required skill type.',
    unsigned: true,
    default: () => '\'0\'',
  })
  requiredSkill: number;

  @Column('smallint', {
    name: 'RequiredSkillRank',
    comment: 'Required skill value.',
    unsigned: true,
    default: () => '\'0\'',
  })
  requiredSkillRank: number;

  @Column('mediumint', {
    name: 'requiredspell',
    comment: 'Required spell (See Spell.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  requiredspell: number;

  @Column('mediumint', {
    name: 'requiredhonorrank',
    comment: 'Required honor rank.',
    unsigned: true,
    default: () => '\'0\'',
  })
  requiredhonorrank: number;

  @Column('mediumint', {
    name: 'RequiredCityRank',
    comment:
      'DEPRECATED: the city rank required. City ranks did not make it into WoW.',
    unsigned: true,
    default: () => '\'0\'',
  })
  requiredCityRank: number;

  @Column('smallint', {
    name: 'RequiredReputationFaction',
    comment: 'Required faction for reputation check (See Faction.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  requiredReputationFaction: number;

  @Column('smallint', {
    name: 'RequiredReputationRank',
    comment: 'Required minimal reputation rank.',
    unsigned: true,
    default: () => '\'0\'',
  })
  requiredReputationRank: number;

  @Column('smallint', {
    name: 'maxcount',
    comment:
      'The maximum amount of copies of the item that a character may have.',
    unsigned: true,
    default: () => '\'0\'',
  })
  maxcount: number;

  @Column('smallint', {
    name: 'stackable',
    comment: 'Maximum stack size.',
    unsigned: true,
    default: () => '\'1\'',
  })
  stackable: number;

  @Column('tinyint', {
    name: 'ContainerSlots',
    comment:
      'Defines the amount of slots for items of type container or ammunition container.',
    unsigned: true,
    default: () => '\'0\'',
  })
  containerSlots: number;

  @Column('tinyint', {
    name: 'stat_type1',
    comment: 'An item modifier to apply for this item. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  statType1: number;

  @Column('smallint', {
    name: 'stat_value1',
    comment: 'The value to add for the matching modifier.',
    default: () => '\'0\'',
  })
  statValue1: number;

  @Column('tinyint', {
    name: 'stat_type2',
    comment: 'An item modifier to apply for this item. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  statType2: number;

  @Column('smallint', {
    name: 'stat_value2',
    comment: 'The value to add for the matching modifier.',
    default: () => '\'0\'',
  })
  statValue2: number;

  @Column('tinyint', {
    name: 'stat_type3',
    comment: 'An item modifier to apply for this item. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  statType3: number;

  @Column('smallint', {
    name: 'stat_value3',
    comment: 'The value to add for the matching modifier.',
    default: () => '\'0\'',
  })
  statValue3: number;

  @Column('tinyint', {
    name: 'stat_type4',
    comment: 'An item modifier to apply for this item. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  statType4: number;

  @Column('smallint', {
    name: 'stat_value4',
    comment: 'The value to add for the matching modifier.',
    default: () => '\'0\'',
  })
  statValue4: number;

  @Column('tinyint', {
    name: 'stat_type5',
    comment: 'An item modifier to apply for this item. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  statType5: number;

  @Column('smallint', {
    name: 'stat_value5',
    comment: 'The value to add for the matching modifier.',
    default: () => '\'0\'',
  })
  statValue5: number;

  @Column('tinyint', {
    name: 'stat_type6',
    comment: 'An item modifier to apply for this item. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  statType6: number;

  @Column('smallint', {
    name: 'stat_value6',
    comment: 'The value to add for the matching modifier.',
    default: () => '\'0\'',
  })
  statValue6: number;

  @Column('tinyint', {
    name: 'stat_type7',
    comment: 'An item modifier to apply for this item. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  statType7: number;

  @Column('smallint', {
    name: 'stat_value7',
    comment: 'The value to add for the matching modifier.',
    default: () => '\'0\'',
  })
  statValue7: number;

  @Column('tinyint', {
    name: 'stat_type8',
    comment: 'An item modifier to apply for this item. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  statType8: number;

  @Column('smallint', {
    name: 'stat_value8',
    comment: 'The value to add for the matching modifier.',
    default: () => '\'0\'',
  })
  statValue8: number;

  @Column('tinyint', {
    name: 'stat_type9',
    comment: 'An item modifier to apply for this item. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  statType9: number;

  @Column('smallint', {
    name: 'stat_value9',
    comment: 'The value to add for the matching modifier.',
    default: () => '\'0\'',
  })
  statValue9: number;

  @Column('tinyint', {
    name: 'stat_type10',
    comment: 'An item modifier to apply for this item. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  statType10: number;

  @Column('smallint', {
    name: 'stat_value10',
    comment: 'The value to add for the matching modifier.',
    default: () => '\'0\'',
  })
  statValue10: number;

  @Column('float', {
    name: 'dmg_min1',
    comment: 'The minimum damage caused by the item.',
    precision: 12,
    default: () => '\'0\'',
  })
  dmgMin1: number;

  @Column('float', {
    name: 'dmg_max1',
    comment: 'The maximum damage caused by the item.',
    precision: 12,
    default: () => '\'0\'',
  })
  dmgMax1: number;

  @Column('tinyint', {
    name: 'dmg_type1',
    comment: 'The type of damage the matching dmg_min/dmg_max fields cause.',
    unsigned: true,
    default: () => '\'0\'',
  })
  dmgType1: number;

  @Column('float', {
    name: 'dmg_min2',
    comment: 'The minimum damage caused by the item.',
    precision: 12,
    default: () => '\'0\'',
  })
  dmgMin2: number;

  @Column('float', {
    name: 'dmg_max2',
    comment: 'The maximum damage caused by the item.',
    precision: 12,
    default: () => '\'0\'',
  })
  dmgMax2: number;

  @Column('tinyint', {
    name: 'dmg_type2',
    comment: 'The type of damage the matching dmg_min/dmg_max fields cause.',
    unsigned: true,
    default: () => '\'0\'',
  })
  dmgType2: number;

  @Column('float', {
    name: 'dmg_min3',
    comment: 'The minimum damage caused by the item.',
    precision: 12,
    default: () => '\'0\'',
  })
  dmgMin3: number;

  @Column('float', {
    name: 'dmg_max3',
    comment: 'The maximum damage caused by the item.',
    precision: 12,
    default: () => '\'0\'',
  })
  dmgMax3: number;

  @Column('tinyint', {
    name: 'dmg_type3',
    comment: 'The type of damage the matching dmg_min/dmg_max fields cause.',
    unsigned: true,
    default: () => '\'0\'',
  })
  dmgType3: number;

  @Column('float', {
    name: 'dmg_min4',
    comment: 'The minimum damage caused by the item.',
    precision: 12,
    default: () => '\'0\'',
  })
  dmgMin4: number;

  @Column('float', {
    name: 'dmg_max4',
    comment: 'The maximum damage caused by the item.',
    precision: 12,
    default: () => '\'0\'',
  })
  dmgMax4: number;

  @Column('tinyint', {
    name: 'dmg_type4',
    comment: 'The type of damage the matching dmg_min/dmg_max fields cause.',
    unsigned: true,
    default: () => '\'0\'',
  })
  dmgType4: number;

  @Column('float', {
    name: 'dmg_min5',
    comment: 'The minimum damage caused by the item.',
    precision: 12,
    default: () => '\'0\'',
  })
  dmgMin5: number;

  @Column('float', {
    name: 'dmg_max5',
    comment: 'The maximum damage caused by the item.',
    precision: 12,
    default: () => '\'0\'',
  })
  dmgMax5: number;

  @Column('tinyint', {
    name: 'dmg_type5',
    comment: 'The type of damage the matching dmg_min/dmg_max fields cause.',
    unsigned: true,
    default: () => '\'0\'',
  })
  dmgType5: number;

  @Column('smallint', {
    name: 'armor',
    comment: 'The armor value of the item.',
    unsigned: true,
    default: () => '\'0\'',
  })
  armor: number;

  @Column('tinyint', {
    name: 'holy_res',
    comment: 'Holy resistance.',
    unsigned: true,
    default: () => '\'0\'',
  })
  holyRes: number;

  @Column('tinyint', {
    name: 'fire_res',
    comment: 'Fire resistance.',
    unsigned: true,
    default: () => '\'0\'',
  })
  fireRes: number;

  @Column('tinyint', {
    name: 'nature_res',
    comment: 'Nature resistance.',
    unsigned: true,
    default: () => '\'0\'',
  })
  natureRes: number;

  @Column('tinyint', {
    name: 'frost_res',
    comment: 'Frost resistance.',
    unsigned: true,
    default: () => '\'0\'',
  })
  frostRes: number;

  @Column('tinyint', {
    name: 'shadow_res',
    comment: 'Shadow resistance.',
    unsigned: true,
    default: () => '\'0\'',
  })
  shadowRes: number;

  @Column('tinyint', {
    name: 'arcane_res',
    comment: 'Arcane resistance.',
    unsigned: true,
    default: () => '\'0\'',
  })
  arcaneRes: number;

  @Column('smallint', {
    name: 'delay',
    comment: 'The delay in milliseconds between successive hits for the item.',
    unsigned: true,
    default: () => '\'1000\'',
  })
  delay: number;

  @Column('tinyint', {
    name: 'ammo_type',
    comment: 'The type of ammunition the item uses. Arrows = 2; Bullets = 3',
    unsigned: true,
    default: () => '\'0\'',
  })
  ammoType: number;

  @Column('float', {
    name: 'RangedModRange',
    precision: 12,
    default: () => '\'0\'',
  })
  rangedModRange: number;

  @Column('mediumint', {
    name: 'spellid_1',
    comment: 'If the item can cast or trigger a spell, this is the reference.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellid_1: number;

  @Column('tinyint', {
    name: 'spelltrigger_1',
    comment: 'The type of trigger for the matching spellid entry.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spelltrigger_1: number;

  @Column('tinyint', {
    name: 'spellcharges_1',
    comment:
      'The amount of charges for the spell referenced in the matching spellid entry. ',
    default: () => '\'0\'',
  })
  spellcharges_1: number;

  @Column('float', {
    name: 'spellppmRate_1',
    comment: 'This controls the proc per minute rate for a spell.',
    precision: 12,
    default: () => '\'0\'',
  })
  spellppmRate_1: number;

  @Column('int', {
    name: 'spellcooldown_1',
    comment: 'The cooldown in milliseconds for the matching spell.',
    default: () => '\'-1\'',
  })
  spellcooldown_1: number;

  @Column('smallint', {
    name: 'spellcategory_1',
    comment: 'A spell category identifier.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellcategory_1: number;

  @Column('int', {
    name: 'spellcategorycooldown_1',
    comment: 'The cooldown in milliseconds for the matching spell category.',
    default: () => '\'-1\'',
  })
  spellcategorycooldown_1: number;

  @Column('mediumint', {
    name: 'spellid_2',
    comment: 'If the item can cast or trigger a spell, this is the references.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellid_2: number;

  @Column('tinyint', {
    name: 'spelltrigger_2',
    comment: 'The type of trigger for the matching spellid entry.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spelltrigger_2: number;

  @Column('tinyint', {
    name: 'spellcharges_2',
    comment:
      'The amount of charges for the spell referenced in the matching spellid entry. ',
    default: () => '\'0\'',
  })
  spellcharges_2: number;

  @Column('float', {
    name: 'spellppmRate_2',
    comment: 'This controls the proc per minute rate for a spell.',
    precision: 12,
    default: () => '\'0\'',
  })
  spellppmRate_2: number;

  @Column('int', {
    name: 'spellcooldown_2',
    comment: 'The cooldown in milliseconds for the matching spell.',
    default: () => '\'-1\'',
  })
  spellcooldown_2: number;

  @Column('smallint', {
    name: 'spellcategory_2',
    comment: 'A spell category identifier.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellcategory_2: number;

  @Column('int', {
    name: 'spellcategorycooldown_2',
    comment: 'The cooldown in milliseconds for the matching spell category.',
    default: () => '\'-1\'',
  })
  spellcategorycooldown_2: number;

  @Column('mediumint', {
    name: 'spellid_3',
    comment: 'If the item can cast or trigger a spell, this is the references.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellid_3: number;

  @Column('tinyint', {
    name: 'spelltrigger_3',
    comment: 'The type of trigger for the matching spellid entry.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spelltrigger_3: number;

  @Column('tinyint', {
    name: 'spellcharges_3',
    comment:
      'The amount of charges for the spell referenced in the matching spellid entry. ',
    default: () => '\'0\'',
  })
  spellcharges_3: number;

  @Column('float', {
    name: 'spellppmRate_3',
    comment: 'This controls the proc per minute rate for a spell.',
    precision: 12,
    default: () => '\'0\'',
  })
  spellppmRate_3: number;

  @Column('int', {
    name: 'spellcooldown_3',
    comment: 'The cooldown in milliseconds for the matching spell.',
    default: () => '\'-1\'',
  })
  spellcooldown_3: number;

  @Column('smallint', {
    name: 'spellcategory_3',
    comment: 'A spell category identifier.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellcategory_3: number;

  @Column('int', {
    name: 'spellcategorycooldown_3',
    comment: 'The cooldown in milliseconds for the matching spell category.',
    default: () => '\'-1\'',
  })
  spellcategorycooldown_3: number;

  @Column('mediumint', {
    name: 'spellid_4',
    comment: 'If the item can cast or trigger a spell, this is the references.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellid_4: number;

  @Column('tinyint', {
    name: 'spelltrigger_4',
    comment: 'The type of trigger for the matching spellid entry.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spelltrigger_4: number;

  @Column('tinyint', {
    name: 'spellcharges_4',
    comment:
      'The amount of charges for the spell referenced in the matching spellid entry. ',
    default: () => '\'0\'',
  })
  spellcharges_4: number;

  @Column('float', {
    name: 'spellppmRate_4',
    comment: 'This controls the proc per minute rate for a spell.',
    precision: 12,
    default: () => '\'0\'',
  })
  spellppmRate_4: number;

  @Column('int', {
    name: 'spellcooldown_4',
    comment: 'The cooldown in milliseconds for the matching spell.',
    default: () => '\'-1\'',
  })
  spellcooldown_4: number;

  @Column('smallint', {
    name: 'spellcategory_4',
    comment: 'A spell category identifier.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellcategory_4: number;

  @Column('int', {
    name: 'spellcategorycooldown_4',
    comment: 'The cooldown in milliseconds for the matching spell category.',
    default: () => '\'-1\'',
  })
  spellcategorycooldown_4: number;

  @Column('mediumint', {
    name: 'spellid_5',
    comment: 'If the item can cast or trigger a spell, this is the references.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellid_5: number;

  @Column('tinyint', {
    name: 'spelltrigger_5',
    comment: 'The type of trigger for the matching spellid entry.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spelltrigger_5: number;

  @Column('tinyint', {
    name: 'spellcharges_5',
    comment:
      'The amount of charges for the spell referenced in the matching spellid entry. ',
    default: () => '\'0\'',
  })
  spellcharges_5: number;

  @Column('float', {
    name: 'spellppmRate_5',
    comment: 'This controls the proc per minute rate for a spell.',
    precision: 12,
    default: () => '\'0\'',
  })
  spellppmRate_5: number;

  @Column('int', {
    name: 'spellcooldown_5',
    comment: 'The cooldown in milliseconds for the matching spell.',
    default: () => '\'-1\'',
  })
  spellcooldown_5: number;

  @Column('smallint', {
    name: 'spellcategory_5',
    comment: 'A spell category identifier.',
    unsigned: true,
    default: () => '\'0\'',
  })
  spellcategory_5: number;

  @Column('int', {
    name: 'spellcategorycooldown_5',
    comment: 'The cooldown in milliseconds for the matching spell category.',
    default: () => '\'-1\'',
  })
  spellcategorycooldown_5: number;

  @Column('tinyint', {
    name: 'bonding',
    comment: 'Defines if and how and item will be bound to a character. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  bonding: number;

  @Column('varchar', {
    name: 'description',
    comment:
      'A short - usually one sentence - description of the item. Mostly flavor texts.',
    length: 255,
  })
  description: string;

  @Column('mediumint', {
    name: 'PageText',
    comment: 'If the item should be readable, e.g. for letters.',
    unsigned: true,
    default: () => '\'0\'',
  })
  pageText: number;

  @Column('tinyint', {
    name: 'LanguageID',
    comment:
      'The material to be used as background for items with page texts set.',
    unsigned: true,
    default: () => '\'0\'',
  })
  languageId: number;

  @Column('tinyint', {
    name: 'PageMaterial',
    comment:
      'The material to be used as background for items with page texts set.',
    unsigned: true,
    default: () => '\'0\'',
  })
  pageMaterial: number;

  @Column('mediumint', {
    name: 'startquest',
    comment: 'Quest ID (See quest_template.entry).',
    unsigned: true,
    default: () => '\'0\'',
  })
  startquest: number;

  @Column('mediumint', {
    name: 'lockid',
    comment: 'Lock ID (See Lock.dbc).',
    unsigned: true,
    default: () => '\'0\'',
  })
  lockid: number;

  @Column('tinyint', {
    name: 'Material',
    comment: 'Material type.',
    default: () => '\'0\'',
  })
  material: number;

  @Column('tinyint', {
    name: 'sheath',
    comment:
      'The value of this field controls how characters will show or hide items worn, e.',
    unsigned: true,
    default: () => '\'0\'',
  })
  sheath: number;

  @Column('mediumint', {
    name: 'RandomProperty',
    comment: 'Random property type (See item_enchantment_template.entry).',
    unsigned: true,
    default: () => '\'0\'',
  })
  randomProperty: number;

  @Column('mediumint', {
    name: 'RandomSuffix',
    unsigned: true,
    default: () => '\'0\'',
  })
  randomSuffix: number;

  @Column('mediumint', {
    name: 'block',
    comment: 'If an item is a shield, this field holds the block chance.',
    unsigned: true,
    default: () => '\'0\'',
  })
  block: number;

  @Column('mediumint', {
    name: 'itemset',
    comment:
      'If an item is part of an item set, this references the item set\'s identifier.',
    unsigned: true,
    default: () => '\'0\'',
  })
  itemset: number;

  @Column('smallint', {
    name: 'MaxDurability',
    comment: 'The maximum durability for an item.',
    unsigned: true,
    default: () => '\'0\'',
  })
  maxDurability: number;

  @Column('mediumint', {
    name: 'area',
    comment:
      'If an item is only usable on a specific map, this is the reference.',
    unsigned: true,
    default: () => '\'0\'',
  })
  area: number;

  @Column('smallint', {
    name: 'Map',
    comment:
      'If an item is only usable on a specific map, this is the reference.',
    default: () => '\'0\'',
  })
  map: number;

  @Column('mediumint', {
    name: 'BagFamily',
    comment:
      'If an item is a bag, this holds a bit-mask corresponding to bag families to whic',
    default: () => '\'0\'',
  })
  bagFamily: number;

  @Column('tinyint', { name: 'TotemCategory', default: () => '\'0\'' })
  totemCategory: number;

  @Column('tinyint', { name: 'socketColor_1', default: () => '\'0\'' })
  socketColor_1: number;

  @Column('mediumint', { name: 'socketContent_1', default: () => '\'0\'' })
  socketContent_1: number;

  @Column('tinyint', { name: 'socketColor_2', default: () => '\'0\'' })
  socketColor_2: number;

  @Column('mediumint', { name: 'socketContent_2', default: () => '\'0\'' })
  socketContent_2: number;

  @Column('tinyint', { name: 'socketColor_3', default: () => '\'0\'' })
  socketColor_3: number;

  @Column('mediumint', { name: 'socketContent_3', default: () => '\'0\'' })
  socketContent_3: number;

  @Column('mediumint', { name: 'socketBonus', default: () => '\'0\'' })
  socketBonus: number;

  @Column('mediumint', { name: 'GemProperties', default: () => '\'0\'' })
  gemProperties: number;

  @Column('smallint', {
    name: 'RequiredDisenchantSkill',
    default: () => '\'-1\'',
  })
  requiredDisenchantSkill: number;

  @Column('float', {
    name: 'ArmorDamageModifier',
    precision: 12,
    default: () => '\'0\'',
  })
  armorDamageModifier: number;

  @Column('mediumint', {
    name: 'DisenchantID',
    comment: 'Disenchant template (See disenchant_loot_template.entry).',
    unsigned: true,
    default: () => '\'0\'',
  })
  disenchantId: number;

  @Column('tinyint', {
    name: 'FoodType',
    comment: 'If an item is usable as pet food, this table is the reference.',
    unsigned: true,
    default: () => '\'0\'',
  })
  foodType: number;

  @Column('int', {
    name: 'minMoneyLoot',
    comment:
      'This field specifies the minimum amount in a container holding money.',
    unsigned: true,
    default: () => '\'0\'',
  })
  minMoneyLoot: number;

  @Column('int', {
    name: 'maxMoneyLoot',
    comment:
      'This field specifies the maximum amount in a container holding money.',
    unsigned: true,
    default: () => '\'0\'',
  })
  maxMoneyLoot: number;

  @Column('int', {
    name: 'Duration',
    comment:
      'Items may have a duration set until the get removed from a character\'s inventory',
    unsigned: true,
    default: () => '\'0\'',
  })
  duration: number;

  @Column('tinyint', {
    name: 'ExtraFlags',
    comment:
      'With these flags it is possible to set rare conditions on an item. ',
    unsigned: true,
    default: () => '\'0\'',
  })
  extraFlags: number;
}
