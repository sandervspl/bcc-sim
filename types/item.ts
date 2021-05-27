import * as entities from '../client-backend/src/entities';


export enum INVENTORY_TYPE {
  NON_EQUIP      = 0,
  HEAD           = 1,
  NECK           = 2,
  SHOULDERS      = 3,
  BODY           = 4,
  CHEST          = 5,
  WAIST          = 6,
  LEGS           = 7,
  FEET           = 8,
  WRISTS         = 9,
  HANDS          = 10,
  FINGER         = 11,
  TRINKET        = 12,
  WEAPON         = 13,
  SHIELD         = 14,
  RANGED         = 15,
  CLOAK          = 16,
  WEAPON_2H      = 17,
  BAG            = 18,
  TABARD         = 19,
  ROBE           = 20,
  WEAPONMAINHAND = 21,
  WEAPONOFFHAND  = 22,
  HOLDABLE       = 23,
  AMMO           = 24,
  THROWN         = 25,
  RANGEDRIGHT    = 26,
  QUIVER         = 27,
  RELIC          = 28,
}

export enum SUBCLASS_ARMOR {
  ARMOR_MISC    = 0,
  ARMOR_CLOTH   = 1,
  ARMOR_LEATHER = 2,
  ARMOR_MAIL    = 3,
  ARMOR_PLATE   = 4,
  ARMOR_BUCKLER = 5,
  ARMOR_SHIELD  = 6,
  ARMOR_LIBRAM  = 7,
  ARMOR_IDOL    = 8,
  ARMOR_TOTEM   = 9,
}

export interface ItemTemplate extends entities.ItemTemplate {};