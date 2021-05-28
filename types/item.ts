import * as entities from '../client-backend/src/entities';

export module Item {
  export enum CLASS {
    WEAPON     = 2,
    GEM        = 3,
    ARMOR      = 4,
    PROJECTILE = 6,
    QUIVER     = 11,
  }

  export enum SUBCLASS_WEAPON {
    AXE_1H       = 0,
    AXE_2H       = 1,
    BOW          = 2,
    GUN          = 3,
    MACE_1H      = 4,
    MACE_2H      = 5,
    POLEARM      = 6,
    SWORD_1H     = 7,
    SWORD_2H     = 8,
    STAFF        = 10,
    FIST_WEAPON  = 13,
    DAGGER       = 15,
    CROSSBOW     = 18,
    WAND         = 19,
    FISHING_POLE = 20,
  }

  export enum SUBCLASS_GEM {
    RED       = 0,
    BLUE      = 1,
    YELLOW    = 2,
    PURPLE    = 3,
    GREEN     = 4,
    ORANGE    = 5,
    META      = 6,
    SIMPLE    = 7,
    PRISMATIC = 8,
  }

  export enum SUBCLASS_ARMOR {
    MISC    = 0,
    CLOTH   = 1,
    LEATHER = 2,
    MAIL    = 3,
    PLATE   = 4,
    SHIELD  = 6,
    LIBRAM  = 7,
    IDOL    = 8,
    TOTEM   = 9,
    SIGIL   = 10,
  }

  export enum SUBCLASS_PROJECTILE {
    ARROW  = 2,
    BULLET = 3,
    THROWN = 4, // OBSOLETE?
  }

  export enum SUBCLASS_QUIVER {
    ARROWS  = 2,
    BULLETS = 3,
  }

  export enum INVENTORY_TYPE {
    NON_EQUIP      = 0,
    HEAD           = 1,
    NECK           = 2,
    SHOULDERS      = 3,
    SHIRT          = 4,
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

  export enum QUALITY {
    POOR      = 0,
    COMMON    = 1,
    UNCOMMON  = 2,
    RARE      = 3,
    EPIC      = 4,
    LEGENDARY = 5,
  }
}

export interface ItemTemplate extends entities.ItemTemplate {};
