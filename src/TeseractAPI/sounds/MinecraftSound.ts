import { AmbientSounds } from "./ambient/AmbientSounds";
import { ArmorSounds } from "./armor/ArmorSounds";
import { BeaconSounds } from "./beacon/BeaconSounds";

export enum MinecraftSounds {
  AMBIENT_BASALT_DELTAS_ADDITIONS = "ambient.basalt_deltas.additions",
  AMBIENT_BASALT_DELTAS_LOOP = "ambient.basalt_deltas.loop",
  AMBIENT_BASALT_DELTAS_MOOD = "ambient.basalt_deltas.mood",
  AMBIENT_CANDLE = "ambient.candle",
  AMBIENT_CAVE = "ambient.cave",
  AMBIENT_CRIMSON_FOREST_ADDITIONS = "ambient.crimson_forest.additions",
  AMBIENT_CRIMSON_FOREST_LOOP = "ambient.crimson_forest.loop",
  AMBIENT_CRIMSON_FOREST_MOOD = "ambient.crimson_forest.mood",
  AMBIENT_NETHER_WASTES_ADDITIONS = "ambient.nether_wastes.additions",
  AMBIENT_NETHER_WASTES_LOOP = "ambient.nether_wastes.loop",
  AMBIENT_NETHER_WASTES_MOOD = "ambient.nether_wastes.mood",
  AMBIENT_SOULSAND_VALLEY_ADDITIONS = "ambient.soulsand_valley.additions",
  AMBIENT_SOULSAND_VALLEY_LOOP = "ambient.soulsand_valley.loop",
  AMBIENT_SOULSAND_VALLEY_MOOD = "ambient.soulsand_valley.mood",
  AMBIENT_WARPED_FOREST_ADDITIONS = "ambient.warped_forest.additions",
  AMBIENT_WARPED_FOREST_LOOP = "ambient.warped_forest.loop",
  AMBIENT_WARPED_FOREST_MOOD = "ambient.warped_forest.mood",
  AMBIENT_WEATHER_LIGHTNING_IMPACT = "ambient.weather.lightning.impact",
  AMBIENT_WEATHER_RAIN = "ambient.weather.rain",
  AMBIENT_WEATHER_THUNDER = "ambient.weather.thunder",
  ARMOR_EQUIP_CHAIN = "armor.equip_chain",
  ARMOR_EQUIP_DIAMOND = "armor.equip_diamond",
  ARMOR_EQUIP_GENERIC = "armor.equip_generic",
  ARMOR_EQUIP_GOLD = "armor.equip_gold",
  ARMOR_EQUIP_IRON = "armor.equip_iron",
  ARMOR_EQUIP_LEATHER = "armor.equip_leather",
  ARMOR_EQUIP_NETHERITE = "armor.equip_netherite",
  BALLOON_POP = "balloon.pop",
  BEACON_ACTIVATE = "beacon.activate",
  BEACON_AMBIENT = "beacon.ambient",
  BEACON_DEACTIVATE = "beacon.deactivate",
  BEACON_POWER = "beacon.power",
  BLOCK_BAMBOO_BREAK = "block.bamboo.break",
  BLOCK_BAMBOO_FALL = "block.bamboo.fall",
  BLOCK_BAMBOO_HIT = "block.bamboo.hit",
  BLOCK_BAMBOO_PLACE = "block.bamboo.place",
  BLOCK_BAMBOO_SAPLING_BREAK = "block.bamboo_sapling.break",
  BLOCK_BAMBOO_SAPLING_PLACE = "block.bamboo_sapling.place",
  BLOCK_BAMBOO_STEP = "block.bamboo.step",
  BLOCK_BARREL_CLOSE = "block.barrel.close",
  BLOCK_BARREL_OPEN = "block.barrel.open",
  BLOCK_BEEHIVE_DRIP = "block.beehive.drip",
  BLOCK_BEEHIVE_ENTER = "block.beehive.enter",
  BLOCK_BEEHIVE_EXIT = "block.beehive.exit",
  BLOCK_BEEHIVE_SHEAR = "block.beehive.shear",
  BLOCK_BEEHIVE_WORK = "block.beehive.work",
  BLOCK_BELL_HIT = "block.bell.hit",
  BLOCK_BLASTFURNACE_FIRE_CRACKLE = "block.blastfurnace.fire_crackle",
  BLOCK_BOWHIT = "block.bowhit",
  BLOCK_CAMPFIRE_CRACKLE = "block.campfire.crackle",
  BLOCK_CARTOGRAPHY_TABLE_USE = "block.cartography_table.use",
  BLOCK_CHORUSFLOWER_DEATH = "block.chorusflower.death",
  BLOCK_CHORUSFLOWER_GROW = "block.chorusflower.grow",
  BLOCK_CLICK = "block.click",
  BLOCK_COMPOSTER_EMPTY = "block.composter.empty",
  BLOCK_COMPOSTER_FILL = "block.composter.fill",
  BLOCK_COMPOSTER_FILL_SUCCESS = "block.composter.fill_success",
  BLOCK_COMPOSTER_READY = "block.composter.ready",
  BLOCK_END_PORTAL_FRAME_FILL = "block.end_portal_frame.fill",
  BLOCK_END_PORTAL_SPAWN = "block.end_portal.spawn",
  BLOCK_FALSE_PERMISSIONS = "block.false_permissions",
  BLOCK_FURNACE_LIT = "block.furnace.lit",
  BLOCK_GRINDSTONE_USE = "block.grindstone.use",
  BLOCK_ITEMFRAME_ADD_ITEM = "block.itemframe.add_item",
  BLOCK_ITEMFRAME_BREAK = "block.itemframe.break",
  BLOCK_ITEMFRAME_PLACE = "block.itemframe.place",
  BLOCK_ITEMFRAME_REMOVE_ITEM = "block.itemframe.remove_item",
  BLOCK_ITEMFRAME_ROTATE_ITEM = "block.itemframe.rotate_item",
  BLOCK_LANTERN_BREAK = "block.lantern.break",
  BLOCK_LANTERN_FALL = "block.lantern.fall",
  BLOCK_LANTERN_HIT = "block.lantern.hit",
  BLOCK_LANTERN_PLACE = "block.lantern.place",
  BLOCK_LANTERN_STEP = "block.lantern.step",
  BLOCK_LOOM_USE = "block.loom.use",
  BLOCK_SCAFFOLDING_BREAK = "block.scaffolding.break",
  BLOCK_SCAFFOLDING_CLIMB = "block.scaffolding.climb",
  BLOCK_SCAFFOLDING_FALL = "block.scaffolding.fall",
  BLOCK_SCAFFOLDING_HIT = "block.scaffolding.hit",
  BLOCK_SCAFFOLDING_PLACE = "block.scaffolding.place",
  BLOCK_SCAFFOLDING_STEP = "block.scaffolding.step",
  BLOCK_SMOKER_SMOKE = "block.smoker.smoke",
  BLOCK_STONECUTTER_USE = "block.stonecutter.use",
  BLOCK_SWEET_BERRY_BUSH_BREAK = "block.sweet_berry_bush.break",
  BLOCK_SWEET_BERRY_BUSH_HURT = "block.sweet_berry_bush.hurt",
  BLOCK_SWEET_BERRY_BUSH_PICK = "block.sweet_berry_bush.pick",
  BLOCK_SWEET_BERRY_BUSH_PLACE = "block.sweet_berry_bush.place",
  BLOCK_TURTLE_EGG_BREAK = "block.turtle_egg.break",
  BLOCK_TURTLE_EGG_CRACK = "block.turtle_egg.crack",
  BLOCK_TURTLE_EGG_DROP = "block.turtle_egg.drop",
  BLOOM_SCULK_CATALYST = "bloom.sculk_catalyst",
  BOTTLE_DRAGONBREATH = "bottle.dragonbreath",
  BREAK_AMETHYST_BLOCK = "break.amethyst_block",
  BREAK_AMETHYST_CLUSTER = "break.amethyst_cluster",
  BREAK_AZALEA = "break.azalea",
  BREAK_BIG_DRIPLEAF = "break.big_dripleaf",
  BREAK_CALCITE = "break.calcite",
  BREAK_DIRT_WITH_ROOTS = "break.dirt_with_roots",
  BREAK_DRIPSTONE_BLOCK = "break.dripstone_block",
  BREAK_HANGING_ROOTS = "break.hanging_roots",
  BREAK_LARGE_AMETHYST_BUD = "break.large_amethyst_bud",
  BREAK_MEDIUM_AMETHYST_BUD = "break.medium_amethyst_bud",
  BREAK_POINTED_DRIPSTONE = "break.pointed_dripstone",
  BREAK_SCULK = "break.sculk",
  BREAK_SCULK_CATALYST = "break.sculk_catalyst",
  BREAK_SCULK_SENSOR = "break.sculk_sensor",
  BREAK_SCULK_SHRIEKER = "break.sculk_shrieker",
  BREAK_SCULK_VEIN = "break.sculk_vein",
  BREAK_SMALL_AMETHYST_BUD = "break.small_amethyst_bud",
  BREAK_SPORE_BLOSSOM = "break.spore_blossom",
  BREAK_TUFF = "break.tuff",
  BUBBLE_DOWN = "bubble.down",
  BUBBLE_DOWNINSIDE = "bubble.downinside",
  BUBBLE_POP = "bubble.pop",
  BUBBLE_UP = "bubble.up",
  BUBBLE_UPINSIDE = "bubble.upinside",
  BUCKET_EMPTY_FISH = "bucket.empty_fish",
  BUCKET_EMPTY_LAVA = "bucket.empty_lava",
  BUCKET_EMPTY_POWDER_SNOW = "bucket.empty_powder_snow",
  BUCKET_EMPTY_WATER = "bucket.empty_water",
  BUCKET_FILL_FISH = "bucket.fill_fish",
  BUCKET_FILL_LAVA = "bucket.fill_lava",
  BUCKET_FILL_POWDER_SNOW = "bucket.fill_powder_snow",
  BUCKET_FILL_WATER = "bucket.fill_water",
  CAKE_ADD_CANDLE = "cake.add_candle",
  CAMERA_TAKE_PICTURE = "camera.take_picture",
  CAULDRON_ADDDYE = "cauldron.adddye",
  CAULDRON_CLEANARMOR = "cauldron.cleanarmor",
  CAULDRON_CLEANBANNER = "cauldron.cleanbanner",
  CAULDRON_DRIP_LAVA_POINTED_DRIPSTONE = "cauldron_drip.lava.pointed_dripstone",
  CAULDRON_DRIP_WATER_POINTED_DRIPSTONE = "cauldron_drip.water.pointed_dripstone",
  CAULDRON_DYEARMOR = "cauldron.dyearmor",
  CAULDRON_EXPLODE = "cauldron.explode",
  CAULDRON_FILLPOTION = "cauldron.fillpotion",
  CAULDRON_FILLWATER = "cauldron.fillwater",
  CAULDRON_TAKEPOTION = "cauldron.takepotion",
  CAULDRON_TAKEWATER = "cauldron.takewater",
  CHIME_AMETHYST_BLOCK = "chime.amethyst_block",
  COMPONENT_JUMP_TO_BLOCK = "component.jump_to_block",
  CONDUIT_ACTIVATE = "conduit.activate",
  CONDUIT_AMBIENT = "conduit.ambient",
  CONDUIT_ATTACK = "conduit.attack",
  CONDUIT_DEACTIVATE = "conduit.deactivate",
  CONDUIT_SHORT = "conduit.short",
  COPPER_WAX_OFF = "copper.wax.off",
  COPPER_WAX_ON = "copper.wax.on",
  CROSSBOW_LOADING_END = "crossbow.loading.end",
  CROSSBOW_LOADING_MIDDLE = "crossbow.loading.middle",
  CROSSBOW_LOADING_START = "crossbow.loading.start",
  CROSSBOW_QUICK_CHARGE_END = "crossbow.quick_charge.end",
  CROSSBOW_QUICK_CHARGE_MIDDLE = "crossbow.quick_charge.middle",
  CROSSBOW_QUICK_CHARGE_START = "crossbow.quick_charge.start",
  CROSSBOW_SHOOT = "crossbow.shoot",
  DAMAGE_FALLBIG = "damage.fallbig",
  DAMAGE_FALLSMALL = "damage.fallsmall",
  DIG_ANCIENT_DEBRIS = "dig.ancient_debris",
  DIG_AZALEA_LEAVES = "dig.azalea_leaves",
  DIG_BASALT = "dig.basalt",
  DIG_BONE_BLOCK = "dig.bone_block",
  DIG_CANDLE = "dig.candle",
  DIG_CAVE_VINES = "dig.cave_vines",
  DIG_CHAIN = "dig.chain",
  DIG_CLOTH = "dig.cloth",
  DIG_COPPER = "dig.copper",
  DIG_CORAL = "dig.coral",
  DIG_DEEPSLATE = "dig.deepslate",
  DIG_DEEPSLATE_BRICKS = "dig.deepslate_bricks",
  DIG_FUNGUS = "dig.fungus",
  DIG_GRASS = "dig.grass",
  DIG_GRAVEL = "dig.gravel",
  DIG_HONEY_BLOCK = "dig.honey_block",
  DIG_LODESTONE = "dig.lodestone",
  DIG_MOSS = "dig.moss",
  DIG_NETHERITE = "dig.netherite",
  DIG_NETHERRACK = "dig.netherrack",
  DIG_NETHER_BRICK = "dig.nether_brick",
  DIG_NETHER_GOLD_ORE = "dig.nether_gold_ore",
  DIG_NETHER_SPROUTS = "dig.nether_sprouts",
  DIG_NETHER_WART = "dig.nether_wart",
  DIG_NYLIUM = "dig.nylium",
  DIG_POWDER_SNOW = "dig.powder_snow",
  DIG_ROOTS = "dig.roots",
  DIG_SAND = "dig.sand",
  DIG_SHROOMLIGHT = "dig.shroomlight",
  DIG_SNOW = "dig.snow",
  DIG_SOUL_SAND = "dig.soul_sand",
  DIG_SOUL_SOIL = "dig.soul_soil",
  DIG_STEM = "dig.stem",
  DIG_STONE = "dig.stone",
  DIG_VINES = "dig.vines",
  DIG_WOOD = "dig.wood",
  DRIP_LAVA_POINTED_DRIPSTONE = "drip.lava.pointed_dripstone",
  DRIP_WATER_POINTED_DRIPSTONE = "drip.water.pointed_dripstone",
  ELEMCONSTRUCT_ACTIVE = "elemconstruct.active",
  ELYTRA_LOOP = "elytra.loop",
  ENTITY_ZOMBIE_CONVERTED_TO_DROWNED = "entity.zombie.converted_to_drowned",
  EXTINGUISH_CANDLE = "extinguish.candle",
  FALL_AMETHYST_BLOCK = "fall.amethyst_block",
  FALL_AMETHYST_CLUSTER = "fall.amethyst_cluster",
  FALL_ANCIENT_DEBRIS = "fall.ancient_debris",
  FALL_AZALEA = "fall.azalea",
  FALL_AZALEA_LEAVES = "fall.azalea_leaves",
  FALL_BASALT = "fall.basalt",
  FALL_BIG_DRIPLEAF = "fall.big_dripleaf",
  FALL_BONE_BLOCK = "fall.bone_block",
  FALL_CALCITE = "fall.calcite",
  FALL_CAVE_VINES = "fall.cave_vines",
  FALL_CHAIN = "fall.chain",
  FALL_CLOTH = "fall.cloth",
  FALL_COPPER = "fall.copper",
  FALL_CORAL = "fall.coral",
  FALL_DEEPSLATE = "fall.deepslate",
  FALL_DEEPSLATE_BRICKS = "fall.deepslate_bricks",
  FALL_DIRT_WITH_ROOTS = "fall.dirt_with_roots",
  FALL_DRIPSTONE_BLOCK = "fall.dripstone_block",
  FALL_EGG = "fall.egg",
  FALL_GRASS = "fall.grass",
  FALL_GRAVEL = "fall.gravel",
  FALL_HANGING_ROOTS = "fall.hanging_roots",
  FALL_HONEY_BLOCK = "fall.honey_block",
  FALL_LADDER = "fall.ladder",
  FALL_MOSS = "fall.moss",
  FALL_NETHERITE = "fall.netherite",
  FALL_NETHERRACK = "fall.netherrack",
  FALL_NETHER_BRICK = "fall.nether_brick",
  FALL_NETHER_GOLD_ORE = "fall.nether_gold_ore",
  FALL_NETHER_SPROUTS = "fall.nether_sprouts",
  FALL_NETHER_WART = "fall.nether_wart",
  FALL_NYLIUM = "fall.nylium",
  FALL_POINTED_DRIPSTONE = "fall.pointed_dripstone",
  FALL_POWDER_SNOW = "fall.powder_snow",
  FALL_ROOTS = "fall.roots",
  FALL_SAND = "fall.sand",
  FALL_SCULK_SENSOR = "fall.sculk_sensor",
  FALL_SCULK_SHRIEKER = "fall.sculk_shrieker",
  FALL_SHROOMLIGHT = "fall.shroomlight",
  FALL_SLIME = "fall.slime",
  FALL_SNOW = "fall.snow",
  FALL_SOUL_SAND = "fall.soul_sand",
  FALL_SOUL_SOIL = "fall.soul_soil",
  FALL_SPORE_BLOSSOM = "fall.spore_blossom",
  FALL_STEM = "fall.stem",
  FALL_STONE = "fall.stone",
  FALL_TUFF = "fall.tuff",
  FALL_VINES = "fall.vines",
  FALL_WOOD = "fall.wood",
  FIREWORK_BLAST = "firework.blast",
  FIREWORK_LARGE_BLAST = "firework.large_blast",
  FIREWORK_LAUNCH = "firework.launch",
  FIREWORK_SHOOT = "firework.shoot",
  FIREWORK_TWINKLE = "firework.twinkle",
  FIRE_FIRE = "fire.fire",
  FIRE_IGNITE = "fire.ignite",
  GAME_PLAYER_ATTACK_NODAMAGE = "game.player.attack.nodamage",
  GAME_PLAYER_ATTACK_STRONG = "game.player.attack.strong",
  GAME_PLAYER_DIE = "game.player.die",
  GAME_PLAYER_HURT = "game.player.hurt",
  HIT_AMETHYST_BLOCK = "hit.amethyst_block",
  HIT_AMETHYST_CLUSTER = "hit.amethyst_cluster",
  HIT_ANCIENT_DEBRIS = "hit.ancient_debris",
  HIT_ANVIL = "hit.anvil",
  HIT_AZALEA = "hit.azalea",
  HIT_AZALEA_LEAVES = "hit.azalea_leaves",
  HIT_BASALT = "hit.basalt",
  HIT_BIG_DRIPLEAF = "hit.big_dripleaf",
  HIT_BONE_BLOCK = "hit.bone_block",
  HIT_CALCITE = "hit.calcite",
  HIT_CANDLE = "hit.candle",
  HIT_CAVE_VINES = "hit.cave_vines",
  HIT_CHAIN = "hit.chain",
  HIT_CLOTH = "hit.cloth",
  HIT_COPPER = "hit.copper",
  HIT_CORAL = "hit.coral",
  HIT_DEEPSLATE = "hit.deepslate",
  HIT_DEEPSLATE_BRICKS = "hit.deepslate_bricks",
  HIT_DIRT_WITH_ROOTS = "hit.dirt_with_roots",
  HIT_DRIPSTONE_BLOCK = "hit.dripstone_block",
  HIT_GRASS = "hit.grass",
  HIT_GRAVEL = "hit.gravel",
  HIT_HANGING_ROOTS = "hit.hanging_roots",
  HIT_HONEY_BLOCK = "hit.honey_block",
  HIT_LADDER = "hit.ladder",
  HIT_MOSS = "hit.moss",
  HIT_NETHERITE = "hit.netherite",
  HIT_NETHERRACK = "hit.netherrack",
  HIT_NETHER_BRICK = "hit.nether_brick",
  HIT_NETHER_GOLD_ORE = "hit.nether_gold_ore",
  HIT_NETHER_SPROUTS = "hit.nether_sprouts",
  HIT_NETHER_WART = "hit.nether_wart",
  HIT_NYLIUM = "hit.nylium",
  HIT_POINTED_DRIPSTONE = "hit.pointed_dripstone",
  HIT_POWDER_SNOW = "hit.powder_snow",
  HIT_ROOTS = "hit.roots",
  HIT_SAND = "hit.sand",
  HIT_SCULK = "hit.sculk",
  HIT_SCULK_CATALYST = "hit.sculk_catalyst",
  HIT_SCULK_SENSOR = "hit.sculk_sensor",
  HIT_SCULK_SHRIEKER = "hit.sculk_shrieker",
  HIT_SHROOMLIGHT = "hit.shroomlight",
  HIT_SLIME = "hit.slime",
  HIT_SNOW = "hit.snow",
  HIT_SOUL_SAND = "hit.soul_sand",
  HIT_SOUL_SOIL = "hit.soul_soil",
  HIT_SPORE_BLOSSOM = "hit.spore_blossom",
  HIT_STEM = "hit.stem",
  HIT_STONE = "hit.stone",
  HIT_TUFF = "hit.tuff",
  HIT_VINES = "hit.vines",
  HIT_WOOD = "hit.wood",
  ITEM_BONE_MEAL_USE = "item.bone_meal.use",
  ITEM_BOOK_PAGE_TURN = "item.book.page_turn",
  ITEM_BOOK_PUT = "item.book.put",
  ITEM_SHIELD_BLOCK = "item.shield.block",
  ITEM_SPYGLASS_STOP_USING = "item.spyglass.stop_using",
  ITEM_SPYGLASS_USE = "item.spyglass.use",
  ITEM_TRIDENT_HIT = "item.trident.hit",
  ITEM_TRIDENT_HIT_GROUND = "item.trident.hit_ground",
  ITEM_TRIDENT_RETURN = "item.trident.return",
  ITEM_TRIDENT_RIPTIDE_1 = "item.trident.riptide_1",
  ITEM_TRIDENT_RIPTIDE_2 = "item.trident.riptide_2",
  ITEM_TRIDENT_RIPTIDE_3 = "item.trident.riptide_3",
  ITEM_TRIDENT_THROW = "item.trident.throw",
  ITEM_TRIDENT_THUNDER = "item.trident.thunder",
  JUMP_ANCIENT_DEBRIS = "jump.ancient_debris",
  JUMP_AZALEA = "jump.azalea",
  JUMP_BASALT = "jump.basalt",
  JUMP_BIG_DRIPLEAF = "jump.big_dripleaf",
  JUMP_BONE_BLOCK = "jump.bone_block",
  JUMP_CAVE_VINES = "jump.cave_vines",
  JUMP_CHAIN = "jump.chain",
  JUMP_CLOTH = "jump.cloth",
  JUMP_CORAL = "jump.coral",
  JUMP_DEEPSLATE = "jump.deepslate",
  JUMP_DEEPSLATE_BRICKS = "jump.deepslate_bricks",
  JUMP_DIRT_WITH_ROOTS = "jump.dirt_with_roots",
  JUMP_DRIPSTONE_BLOCK = "jump.dripstone_block",
  JUMP_GRASS = "jump.grass",
  JUMP_GRAVEL = "jump.gravel",
  JUMP_HANGING_ROOTS = "jump.hanging_roots",
  JUMP_HONEY_BLOCK = "jump.honey_block",
  JUMP_MOSS = "jump.moss",
  JUMP_NETHERITE = "jump.netherite",
  JUMP_NETHERRACK = "jump.netherrack",
  JUMP_NETHER_BRICK = "jump.nether_brick",
  JUMP_NETHER_GOLD_ORE = "jump.nether_gold_ore",
  JUMP_NETHER_SPROUTS = "jump.nether_sprouts",
  JUMP_NETHER_WART = "jump.nether_wart",
  JUMP_NYLIUM = "jump.nylium",
  JUMP_POINTED_DRIPSTONE = "jump.pointed_dripstone",
  JUMP_ROOTS = "jump.roots",
  JUMP_SAND = "jump.sand",
  JUMP_SCULK_SENSOR = "jump.sculk_sensor",
  JUMP_SHROOMLIGHT = "jump.shroomlight",
  JUMP_SLIME = "jump.slime",
  JUMP_SNOW = "jump.snow",
  JUMP_SOUL_SAND = "jump.soul_sand",
  JUMP_SOUL_SOIL = "jump.soul_soil",
  JUMP_SPORE_BLOSSOM = "jump.spore_blossom",
  JUMP_STEM = "jump.stem",
  JUMP_STONE = "jump.stone",
  JUMP_VINES = "jump.vines",
  JUMP_WOOD = "jump.wood",
  LAND_ANCIENT_DEBRIS = "land.ancient_debris",
  LAND_AZALEA = "land.azalea",
  LAND_BASALT = "land.basalt",
  LAND_BIG_DRIPLEAF = "land.big_dripleaf",
  LAND_BONE_BLOCK = "land.bone_block",
  LAND_CAVE_VINES = "land.cave_vines",
  LAND_CHAIN = "land.chain",
  LAND_CLOTH = "land.cloth",
  LAND_CORAL = "land.coral",
  LAND_DEEPSLATE = "land.deepslate",
  LAND_DEEPSLATE_BRICKS = "land.deepslate_bricks",
  LAND_DIRT_WITH_ROOTS = "land.dirt_with_roots",
  LAND_DRIPSTONE_BLOCK = "land.dripstone_block",
  LAND_GRASS = "land.grass",
  LAND_GRAVEL = "land.gravel",
  LAND_HANGING_ROOTS = "land.hanging_roots",
  LAND_HONEY_BLOCK = "land.honey_block",
  LAND_MOSS = "land.moss",
  LAND_NETHERITE = "land.netherite",
  LAND_NETHERRACK = "land.netherrack",
  LAND_NETHER_BRICK = "land.nether_brick",
  LAND_NETHER_GOLD_ORE = "land.nether_gold_ore",
  LAND_NETHER_SPROUTS = "land.nether_sprouts",
  LAND_NETHER_WART = "land.nether_wart",
  LAND_NYLIUM = "land.nylium",
  LAND_POINTED_DRIPSTONE = "land.pointed_dripstone",
  LAND_ROOTS = "land.roots",
  LAND_SAND = "land.sand",
  LAND_SCULK_SENSOR = "land.sculk_sensor",
  LAND_SHROOMLIGHT = "land.shroomlight",
  LAND_SLIME = "land.slime",
  LAND_SNOW = "land.snow",
  LAND_SOUL_SAND = "land.soul_sand",
  LAND_SOUL_SOIL = "land.soul_soil",
  LAND_SPORE_BLOSSOM = "land.spore_blossom",
  LAND_STEM = "land.stem",
  LAND_STONE = "land.stone",
  LAND_VINES = "land.vines",
  LAND_WOOD = "land.wood",
  LEASHKNOT_BREAK = "leashknot.break",
  LEASHKNOT_PLACE = "leashknot.place",
  LIQUID_LAVA = "liquid.lava",
  LIQUID_LAVAPOP = "liquid.lavapop",
  LIQUID_WATER = "liquid.water",
  LODESTONE_COMPASS_LINK_COMPASS_TO_LODESTONE = "lodestone_compass.link_compass_to_lodestone",
  LT_REACTION_FIRE = "lt.reaction.fire",
  MINECART_BASE = "minecart.base",
  MINECART_INSIDE = "minecart.inside",
  MOB_AGENT_SPAWN = "mob.agent.spawn",
  MOB_ARMOR_STAND_BREAK = "mob.armor_stand.break",
  MOB_ARMOR_STAND_HIT = "mob.armor_stand.hit",
  MOB_ARMOR_STAND_LAND = "mob.armor_stand.land",
  MOB_ARMOR_STAND_PLACE = "mob.armor_stand.place",
  MOB_AXOLOTL_ATTACK = "mob.axolotl.attack",
  MOB_AXOLOTL_DEATH = "mob.axolotl.death",
  MOB_AXOLOTL_HURT = "mob.axolotl.hurt",
  MOB_AXOLOTL_IDLE = "mob.axolotl.idle",
  MOB_AXOLOTL_IDLE_WATER = "mob.axolotl.idle_water",
  MOB_AXOLOTL_SPLASH = "mob.axolotl.splash",
  MOB_AXOLOTL_SWIM = "mob.axolotl.swim",
  MOB_BAT_DEATH = "mob.bat.death",
  MOB_BAT_HURT = "mob.bat.hurt",
  MOB_BAT_IDLE = "mob.bat.idle",
  MOB_BAT_TAKEOFF = "mob.bat.takeoff",
  MOB_BEE_AGGRESSIVE = "mob.bee.aggressive",
  MOB_BEE_DEATH = "mob.bee.death",
  MOB_BEE_HURT = "mob.bee.hurt",
  MOB_BEE_LOOP = "mob.bee.loop",
  MOB_BEE_POLLINATE = "mob.bee.pollinate",
  MOB_BEE_STING = "mob.bee.sting",
  MOB_BLAZE_BREATHE = "mob.blaze.breathe",
  MOB_BLAZE_DEATH = "mob.blaze.death",
  MOB_BLAZE_HIT = "mob.blaze.hit",
  MOB_BLAZE_SHOOT = "mob.blaze.shoot",
  MOB_CAT_BEG = "mob.cat.beg",
  MOB_CAT_EAT = "mob.cat.eat",
  MOB_CAT_HISS = "mob.cat.hiss",
  MOB_CAT_HIT = "mob.cat.hit",
  MOB_CAT_MEOW = "mob.cat.meow",
  MOB_CAT_PURR = "mob.cat.purr",
  MOB_CAT_PURREOW = "mob.cat.purreow",
  MOB_CAT_STRAYMEOW = "mob.cat.straymeow",
  MOB_CHICKEN_HURT = "mob.chicken.hurt",
  MOB_CHICKEN_PLOP = "mob.chicken.plop",
  MOB_CHICKEN_SAY = "mob.chicken.say",
  MOB_CHICKEN_STEP = "mob.chicken.step",
  MOB_COW_HURT = "mob.cow.hurt",
  MOB_COW_MILK = "mob.cow.milk",
  MOB_COW_SAY = "mob.cow.say",
  MOB_COW_STEP = "mob.cow.step",
  MOB_CREEPER_DEATH = "mob.creeper.death",
  MOB_CREEPER_SAY = "mob.creeper.say",
  MOB_DOLPHIN_ATTACK = "mob.dolphin.attack",
  MOB_DOLPHIN_BLOWHOLE = "mob.dolphin.blowhole",
  MOB_DOLPHIN_DEATH = "mob.dolphin.death",
  MOB_DOLPHIN_EAT = "mob.dolphin.eat",
  MOB_DOLPHIN_HURT = "mob.dolphin.hurt",
  MOB_DOLPHIN_IDLE = "mob.dolphin.idle",
  MOB_DOLPHIN_IDLE_WATER = "mob.dolphin.idle_water",
  MOB_DOLPHIN_JUMP = "mob.dolphin.jump",
  MOB_DOLPHIN_PLAY = "mob.dolphin.play",
  MOB_DOLPHIN_SPLASH = "mob.dolphin.splash",
  MOB_DOLPHIN_SWIM = "mob.dolphin.swim",
  MOB_DROWNED_DEATH = "mob.drowned.death",
  MOB_DROWNED_DEATH_WATER = "mob.drowned.death_water",
  MOB_DROWNED_HURT = "mob.drowned.hurt",
  MOB_DROWNED_HURT_WATER = "mob.drowned.hurt_water",
  MOB_DROWNED_SAY = "mob.drowned.say",
  MOB_DROWNED_SAY_WATER = "mob.drowned.say_water",
  MOB_DROWNED_SHOOT = "mob.drowned.shoot",
  MOB_DROWNED_STEP = "mob.drowned.step",
  MOB_DROWNED_SWIM = "mob.drowned.swim",
  MOB_ELDERGUARDIAN_CURSE = "mob.elderguardian.curse",
  MOB_ELDERGUARDIAN_DEATH = "mob.elderguardian.death",
  MOB_ELDERGUARDIAN_HIT = "mob.elderguardian.hit",
  MOB_ELDERGUARDIAN_IDLE = "mob.elderguardian.idle",
  MOB_ENDERDRAGON_DEATH = "mob.enderdragon.death",
  MOB_ENDERDRAGON_FLAP = "mob.enderdragon.flap",
  MOB_ENDERDRAGON_GROWL = "mob.enderdragon.growl",
  MOB_ENDERDRAGON_HIT = "mob.enderdragon.hit",
  MOB_ENDERMEN_DEATH = "mob.endermen.death",
  MOB_ENDERMEN_HIT = "mob.endermen.hit",
  MOB_ENDERMEN_IDLE = "mob.endermen.idle",
  MOB_ENDERMEN_PORTAL = "mob.endermen.portal",
  MOB_ENDERMEN_SCREAM = "mob.endermen.scream",
  MOB_ENDERMEN_STARE = "mob.endermen.stare",
  MOB_ENDERMITE_HIT = "mob.endermite.hit",
  MOB_ENDERMITE_KILL = "mob.endermite.kill",
  MOB_ENDERMITE_SAY = "mob.endermite.say",
  MOB_ENDERMITE_STEP = "mob.endermite.step",
  MOB_EVOCATION_FANGS_ATTACK = "mob.evocation_fangs.attack",
  MOB_EVOCATION_ILLAGER_AMBIENT = "mob.evocation_illager.ambient",
  MOB_EVOCATION_ILLAGER_CAST_SPELL = "mob.evocation_illager.cast_spell",
  MOB_EVOCATION_ILLAGER_CELEBRATE = "mob.evocation_illager.celebrate",
  MOB_EVOCATION_ILLAGER_DEATH = "mob.evocation_illager.death",
  MOB_EVOCATION_ILLAGER_HURT = "mob.evocation_illager.hurt",
  MOB_EVOCATION_ILLAGER_PREPARE_ATTACK = "mob.evocation_illager.prepare_attack",
  MOB_EVOCATION_ILLAGER_PREPARE_SUMMON = "mob.evocation_illager.prepare_summon",
  MOB_EVOCATION_ILLAGER_PREPARE_WOLOLO = "mob.evocation_illager.prepare_wololo",
  MOB_FISH_FLOP = "mob.fish.flop",
  MOB_FISH_HURT = "mob.fish.hurt",
  MOB_FISH_STEP = "mob.fish.step",
  MOB_FOX_AGGRO = "mob.fox.aggro",
  MOB_FOX_AMBIENT = "mob.fox.ambient",
  MOB_FOX_BITE = "mob.fox.bite",
  MOB_FOX_DEATH = "mob.fox.death",
  MOB_FOX_EAT = "mob.fox.eat",
  MOB_FOX_HURT = "mob.fox.hurt",
  MOB_FOX_SCREECH = "mob.fox.screech",
  MOB_FOX_SLEEP = "mob.fox.sleep",
  MOB_FOX_SNIFF = "mob.fox.sniff",
  MOB_FOX_SPIT = "mob.fox.spit",
  MOB_FROG_AMBIENT = "mob.frog.ambient",
  MOB_FROG_DEATH = "mob.frog.death",
  MOB_FROG_EAT = "mob.frog.eat",
  MOB_FROG_HURT = "mob.frog.hurt",
  MOB_FROG_JUMP_TO_BLOCK = "mob.frog.jump_to_block",
  MOB_FROG_STEP = "mob.frog.step",
  MOB_FROG_TONGUE = "mob.frog.tongue",
  MOB_GHAST_AFFECTIONATE_SCREAM = "mob.ghast.affectionate_scream",
  MOB_GHAST_CHARGE = "mob.ghast.charge",
  MOB_GHAST_DEATH = "mob.ghast.death",
  MOB_GHAST_FIREBALL = "mob.ghast.fireball",
  MOB_GHAST_MOAN = "mob.ghast.moan",
  MOB_GHAST_SCREAM = "mob.ghast.scream",
  MOB_GLOW_SQUID_AMBIENT = "mob.glow_squid.ambient",
  MOB_GLOW_SQUID_DEATH = "mob.glow_squid.death",
  MOB_GLOW_SQUID_HURT = "mob.glow_squid.hurt",
  MOB_GLOW_SQUID_INK_SQUIRT = "mob.glow_squid.ink_squirt",
  MOB_GOAT_AMBIENT = "mob.goat.ambient",
  MOB_GOAT_AMBIENT_SCREAMER = "mob.goat.ambient.screamer",
  MOB_GOAT_DEATH = "mob.goat.death",
  MOB_GOAT_DEATH_SCREAMER = "mob.goat.death.screamer",
  MOB_GOAT_EAT = "mob.goat.eat",
  MOB_GOAT_HURT = "mob.goat.hurt",
  MOB_GOAT_HURT_SCREAMER = "mob.goat.hurt.screamer",
  MOB_GOAT_MILK_SCREAMER = "mob.goat.milk.screamer",
  MOB_GOAT_PREPARE_RAM = "mob.goat.prepare_ram",
  MOB_GOAT_PREPARE_RAM_SCREAMER = "mob.goat.prepare_ram.screamer",
  MOB_GOAT_RAM_IMPACT = "mob.goat.ram_impact",
  MOB_GOAT_RAM_IMPACT_SCREAMER = "mob.goat.ram_impact.screamer",
  MOB_GOAT_STEP = "mob.goat.step",
  MOB_GUARDIAN_AMBIENT = "mob.guardian.ambient",
  MOB_GUARDIAN_ATTACK_LOOP = "mob.guardian.attack_loop",
  MOB_GUARDIAN_DEATH = "mob.guardian.death",
  MOB_GUARDIAN_FLOP = "mob.guardian.flop",
  MOB_GUARDIAN_HIT = "mob.guardian.hit",
  MOB_GUARDIAN_LAND_DEATH = "mob.guardian.land_death",
  MOB_GUARDIAN_LAND_HIT = "mob.guardian.land_hit",
  MOB_GUARDIAN_LAND_IDLE = "mob.guardian.land_idle",
  MOB_HOGLIN_AMBIENT = "mob.hoglin.ambient",
  MOB_HOGLIN_ANGRY = "mob.hoglin.angry",
  MOB_HOGLIN_ATTACK = "mob.hoglin.attack",
  MOB_HOGLIN_DEATH = "mob.hoglin.death",
  MOB_HOGLIN_HOWL = "mob.hoglin.howl",
  MOB_HOGLIN_HURT = "mob.hoglin.hurt",
  MOB_HOGLIN_RETREAT = "mob.hoglin.retreat",
  MOB_HOGLIN_STEP = "mob.hoglin.step",
  MOB_HORSE_ANGRY = "mob.horse.angry",
  MOB_HORSE_ARMOR = "mob.horse.armor",
  MOB_HORSE_BREATHE = "mob.horse.breathe",
  MOB_HORSE_DEATH = "mob.horse.death",
  MOB_HORSE_DONKEY_ANGRY = "mob.horse.donkey.angry",
  MOB_HORSE_DONKEY_DEATH = "mob.horse.donkey.death",
  MOB_HORSE_DONKEY_HIT = "mob.horse.donkey.hit",
  MOB_HORSE_DONKEY_IDLE = "mob.horse.donkey.idle",
  MOB_HORSE_EAT = "mob.horse.eat",
  MOB_HORSE_GALLOP = "mob.horse.gallop",
  MOB_HORSE_HIT = "mob.horse.hit",
  MOB_HORSE_IDLE = "mob.horse.idle",
  MOB_HORSE_JUMP = "mob.horse.jump",
  MOB_HORSE_LAND = "mob.horse.land",
  MOB_HORSE_LEATHER = "mob.horse.leather",
  MOB_HORSE_SKELETON_DEATH = "mob.horse.skeleton.death",
  MOB_HORSE_SKELETON_HIT = "mob.horse.skeleton.hit",
  MOB_HORSE_SKELETON_IDLE = "mob.horse.skeleton.idle",
  MOB_HORSE_SOFT = "mob.horse.soft",
  MOB_HORSE_WOOD = "mob.horse.wood",
  MOB_HORSE_ZOMBIE_DEATH = "mob.horse.zombie.death",
  MOB_HORSE_ZOMBIE_HIT = "mob.horse.zombie.hit",
  MOB_HORSE_ZOMBIE_IDLE = "mob.horse.zombie.idle",
  MOB_HUSK_AMBIENT = "mob.husk.ambient",
  MOB_HUSK_DEATH = "mob.husk.death",
  MOB_HUSK_HURT = "mob.husk.hurt",
  MOB_HUSK_STEP = "mob.husk.step",
  MOB_IRONGOLEM_CRACK = "mob.irongolem.crack",
  MOB_IRONGOLEM_DEATH = "mob.irongolem.death",
  MOB_IRONGOLEM_HIT = "mob.irongolem.hit",
  MOB_IRONGOLEM_REPAIR = "mob.irongolem.repair",
  MOB_IRONGOLEM_THROW = "mob.irongolem.throw",
  MOB_IRONGOLEM_WALK = "mob.irongolem.walk",
  MOB_LLAMA_ANGRY = "mob.llama.angry",
  MOB_LLAMA_DEATH = "mob.llama.death",
  MOB_LLAMA_EAT = "mob.llama.eat",
  MOB_LLAMA_HURT = "mob.llama.hurt",
  MOB_LLAMA_IDLE = "mob.llama.idle",
  MOB_LLAMA_SPIT = "mob.llama.spit",
  MOB_LLAMA_STEP = "mob.llama.step",
  MOB_LLAMA_SWAG = "mob.llama.swag",
  MOB_MAGMACUBE_BIG = "mob.magmacube.big",
  MOB_MAGMACUBE_JUMP = "mob.magmacube.jump",
  MOB_MAGMACUBE_SMALL = "mob.magmacube.small",
  MOB_MOOSHROOM_CONVERT = "mob.mooshroom.convert",
  MOB_MOOSHROOM_EAT = "mob.mooshroom.eat",
  MOB_MOOSHROOM_SUSPICIOUS_MILK = "mob.mooshroom.suspicious_milk",
  MOB_OCELOT_DEATH = "mob.ocelot.death",
  MOB_OCELOT_IDLE = "mob.ocelot.idle",
  MOB_PANDA_BABY_IDLE = "mob.panda_baby.idle",
  MOB_PANDA_BITE = "mob.panda.bite",
  MOB_PANDA_CANT_BREED = "mob.panda.cant_breed",
  MOB_PANDA_DEATH = "mob.panda.death",
  MOB_PANDA_EAT = "mob.panda.eat",
  MOB_PANDA_HURT = "mob.panda.hurt",
  MOB_PANDA_IDLE = "mob.panda.idle",
  MOB_PANDA_IDLE_AGGRESSIVE = "mob.panda.idle.aggressive",
  MOB_PANDA_IDLE_WORRIED = "mob.panda.idle.worried",
  MOB_PANDA_PRESNEEZE = "mob.panda.presneeze",
  MOB_PANDA_SNEEZE = "mob.panda.sneeze",
  MOB_PANDA_STEP = "mob.panda.step",
  MOB_PARROT_DEATH = "mob.parrot.death",
  MOB_PARROT_EAT = "mob.parrot.eat",
  MOB_PARROT_FLY = "mob.parrot.fly",
  MOB_PARROT_HURT = "mob.parrot.hurt",
  MOB_PARROT_IDLE = "mob.parrot.idle",
  MOB_PARROT_STEP = "mob.parrot.step",
  MOB_PHANTOM_BITE = "mob.phantom.bite",
  MOB_PHANTOM_DEATH = "mob.phantom.death",
  MOB_PHANTOM_FLAP = "mob.phantom.flap",
  MOB_PHANTOM_HURT = "mob.phantom.hurt",
  MOB_PHANTOM_IDLE = "mob.phantom.idle",
  MOB_PHANTOM_SWOOP = "mob.phantom.swoop",
  MOB_PIGLIN_ADMIRING_ITEM = "mob.piglin.admiring_item",
  MOB_PIGLIN_AMBIENT = "mob.piglin.ambient",
  MOB_PIGLIN_ANGRY = "mob.piglin.angry",
  MOB_PIGLIN_BRUTE_AMBIENT = "mob.piglin_brute.ambient",
  MOB_PIGLIN_BRUTE_ANGRY = "mob.piglin_brute.angry",
  MOB_PIGLIN_BRUTE_CONVERTED_TO_ZOMBIFIED = "mob.piglin_brute.converted_to_zombified",
  MOB_PIGLIN_BRUTE_DEATH = "mob.piglin_brute.death",
  MOB_PIGLIN_BRUTE_HURT = "mob.piglin_brute.hurt",
  MOB_PIGLIN_BRUTE_STEP = "mob.piglin_brute.step",
  MOB_PIGLIN_CELEBRATE = "mob.piglin.celebrate",
  MOB_PIGLIN_CONVERTED_TO_ZOMBIFIED = "mob.piglin.converted_to_zombified",
  MOB_PIGLIN_DEATH = "mob.piglin.death",
  MOB_PIGLIN_HURT = "mob.piglin.hurt",
  MOB_PIGLIN_JEALOUS = "mob.piglin.jealous",
  MOB_PIGLIN_RETREAT = "mob.piglin.retreat",
  MOB_PIGLIN_STEP = "mob.piglin.step",
  MOB_PIG_BOOST = "mob.pig.boost",
  MOB_PIG_DEATH = "mob.pig.death",
  MOB_PIG_SAY = "mob.pig.say",
  MOB_PIG_STEP = "mob.pig.step",
  MOB_PILLAGER_CELEBRATE = "mob.pillager.celebrate",
  MOB_PILLAGER_DEATH = "mob.pillager.death",
  MOB_PILLAGER_HURT = "mob.pillager.hurt",
  MOB_PILLAGER_IDLE = "mob.pillager.idle",
  MOB_PLAYER_HURT_DROWN = "mob.player.hurt_drown",
  MOB_PLAYER_HURT_FREEZE = "mob.player.hurt_freeze",
  MOB_PLAYER_HURT_ON_FIRE = "mob.player.hurt_on_fire",
  MOB_POLARBEAR_BABY_IDLE = "mob.polarbear_baby.idle",
  MOB_POLARBEAR_DEATH = "mob.polarbear.death",
  MOB_POLARBEAR_HURT = "mob.polarbear.hurt",
  MOB_POLARBEAR_IDLE = "mob.polarbear.idle",
  MOB_POLARBEAR_STEP = "mob.polarbear.step",
  MOB_POLARBEAR_WARNING = "mob.polarbear.warning",
  MOB_RABBIT_DEATH = "mob.rabbit.death",
  MOB_RABBIT_HOP = "mob.rabbit.hop",
  MOB_RABBIT_HURT = "mob.rabbit.hurt",
  MOB_RABBIT_IDLE = "mob.rabbit.idle",
  MOB_RAVAGER_AMBIENT = "mob.ravager.ambient",
  MOB_RAVAGER_BITE = "mob.ravager.bite",
  MOB_RAVAGER_CELEBRATE = "mob.ravager.celebrate",
  MOB_RAVAGER_DEATH = "mob.ravager.death",
  MOB_RAVAGER_HURT = "mob.ravager.hurt",
  MOB_RAVAGER_ROAR = "mob.ravager.roar",
  MOB_RAVAGER_STEP = "mob.ravager.step",
  MOB_RAVAGER_STUN = "mob.ravager.stun",
  MOB_SHEEP_SAY = "mob.sheep.say",
  MOB_SHEEP_SHEAR = "mob.sheep.shear",
  MOB_SHEEP_STEP = "mob.sheep.step",
  MOB_SHULKER_AMBIENT = "mob.shulker.ambient",
  MOB_SHULKER_BULLET_HIT = "mob.shulker.bullet.hit",
  MOB_SHULKER_CLOSE = "mob.shulker.close",
  MOB_SHULKER_CLOSE_HURT = "mob.shulker.close.hurt",
  MOB_SHULKER_DEATH = "mob.shulker.death",
  MOB_SHULKER_HURT = "mob.shulker.hurt",
  MOB_SHULKER_OPEN = "mob.shulker.open",
  MOB_SHULKER_SHOOT = "mob.shulker.shoot",
  MOB_SHULKER_TELEPORT = "mob.shulker.teleport",
  MOB_SILVERFISH_HIT = "mob.silverfish.hit",
  MOB_SILVERFISH_KILL = "mob.silverfish.kill",
  MOB_SILVERFISH_SAY = "mob.silverfish.say",
  MOB_SILVERFISH_STEP = "mob.silverfish.step",
  MOB_SKELETON_CONVERT_TO_STRAY = "mob.skeleton.convert_to_stray",
  MOB_SKELETON_DEATH = "mob.skeleton.death",
  MOB_SKELETON_HURT = "mob.skeleton.hurt",
  MOB_SKELETON_SAY = "mob.skeleton.say",
  MOB_SKELETON_STEP = "mob.skeleton.step",
  MOB_SLIME_ATTACK = "mob.slime.attack",
  MOB_SLIME_BIG = "mob.slime.big",
  MOB_SLIME_DEATH = "mob.slime.death",
  MOB_SLIME_HURT = "mob.slime.hurt",
  MOB_SLIME_JUMP = "mob.slime.jump",
  MOB_SLIME_SMALL = "mob.slime.small",
  MOB_SLIME_SQUISH = "mob.slime.squish",
  MOB_SNOWGOLEM_DEATH = "mob.snowgolem.death",
  MOB_SNOWGOLEM_HURT = "mob.snowgolem.hurt",
  MOB_SNOWGOLEM_SHOOT = "mob.snowgolem.shoot",
  MOB_SPIDER_DEATH = "mob.spider.death",
  MOB_SPIDER_SAY = "mob.spider.say",
  MOB_SPIDER_STEP = "mob.spider.step",
  MOB_SQUID_AMBIENT = "mob.squid.ambient",
  MOB_SQUID_DEATH = "mob.squid.death",
  MOB_SQUID_HURT = "mob.squid.hurt",
  MOB_SQUID_INK_SQUIRT = "mob.squid.ink_squirt",
  MOB_STRAY_AMBIENT = "mob.stray.ambient",
  MOB_STRAY_DEATH = "mob.stray.death",
  MOB_STRAY_HURT = "mob.stray.hurt",
  MOB_STRAY_STEP = "mob.stray.step",
  MOB_STRIDER_DEATH = "mob.strider.death",
  MOB_STRIDER_EAT = "mob.strider.eat",
  MOB_STRIDER_HURT = "mob.strider.hurt",
  MOB_STRIDER_IDLE = "mob.strider.idle",
  MOB_STRIDER_PANIC = "mob.strider.panic",
  MOB_STRIDER_STEP = "mob.strider.step",
  MOB_STRIDER_STEP_LAVA = "mob.strider.step_lava",
  MOB_STRIDER_TEMPT = "mob.strider.tempt",
  MOB_TADPOLE_DEATH = "mob.tadpole.death",
  MOB_TADPOLE_HURT = "mob.tadpole.hurt",
  MOB_TURTLE_AMBIENT = "mob.turtle.ambient",
  MOB_TURTLE_BABY_BORN = "mob.turtle_baby.born",
  MOB_TURTLE_BABY_DEATH = "mob.turtle_baby.death",
  MOB_TURTLE_BABY_HURT = "mob.turtle_baby.hurt",
  MOB_TURTLE_BABY_STEP = "mob.turtle_baby.step",
  MOB_TURTLE_DEATH = "mob.turtle.death",
  MOB_TURTLE_HURT = "mob.turtle.hurt",
  MOB_TURTLE_STEP = "mob.turtle.step",
  MOB_TURTLE_SWIM = "mob.turtle.swim",
  MOB_VEX_AMBIENT = "mob.vex.ambient",
  MOB_VEX_CHARGE = "mob.vex.charge",
  MOB_VEX_DEATH = "mob.vex.death",
  MOB_VEX_HURT = "mob.vex.hurt",
  MOB_VILLAGER_DEATH = "mob.villager.death",
  MOB_VILLAGER_HAGGLE = "mob.villager.haggle",
  MOB_VILLAGER_HIT = "mob.villager.hit",
  MOB_VILLAGER_IDLE = "mob.villager.idle",
  MOB_VILLAGER_NO = "mob.villager.no",
  MOB_VILLAGER_YES = "mob.villager.yes",
  MOB_VINDICATOR_CELEBRATE = "mob.vindicator.celebrate",
  MOB_VINDICATOR_DEATH = "mob.vindicator.death",
  MOB_VINDICATOR_HURT = "mob.vindicator.hurt",
  MOB_VINDICATOR_IDLE = "mob.vindicator.idle",
  MOB_WANDERINGTRADER_DEATH = "mob.wanderingtrader.death",
  MOB_WANDERINGTRADER_DISAPPEARED = "mob.wanderingtrader.disappeared",
  MOB_WANDERINGTRADER_DRINK_MILK = "mob.wanderingtrader.drink_milk",
  MOB_WANDERINGTRADER_DRINK_POTION = "mob.wanderingtrader.drink_potion",
  MOB_WANDERINGTRADER_HAGGLE = "mob.wanderingtrader.haggle",
  MOB_WANDERINGTRADER_HURT = "mob.wanderingtrader.hurt",
  MOB_WANDERINGTRADER_IDLE = "mob.wanderingtrader.idle",
  MOB_WANDERINGTRADER_NO = "mob.wanderingtrader.no",
  MOB_WANDERINGTRADER_REAPPEARED = "mob.wanderingtrader.reappeared",
  MOB_WANDERINGTRADER_YES = "mob.wanderingtrader.yes",
  MOB_WITCH_AMBIENT = "mob.witch.ambient",
  MOB_WITCH_CELEBRATE = "mob.witch.celebrate",
  MOB_WITCH_DEATH = "mob.witch.death",
  MOB_WITCH_DRINK = "mob.witch.drink",
  MOB_WITCH_HURT = "mob.witch.hurt",
  MOB_WITCH_THROW = "mob.witch.throw",
  MOB_WITHER_AMBIENT = "mob.wither.ambient",
  MOB_WITHER_BREAK_BLOCK = "mob.wither.break_block",
  MOB_WITHER_DEATH = "mob.wither.death",
  MOB_WITHER_HURT = "mob.wither.hurt",
  MOB_WITHER_SHOOT = "mob.wither.shoot",
  MOB_WITHER_SPAWN = "mob.wither.spawn",
  MOB_WOLF_BARK = "mob.wolf.bark",
  MOB_WOLF_DEATH = "mob.wolf.death",
  MOB_WOLF_GROWL = "mob.wolf.growl",
  MOB_WOLF_HURT = "mob.wolf.hurt",
  MOB_WOLF_PANTING = "mob.wolf.panting",
  MOB_WOLF_SHAKE = "mob.wolf.shake",
  MOB_WOLF_STEP = "mob.wolf.step",
  MOB_WOLF_WHINE = "mob.wolf.whine",
  MOB_ZOGLIN_ANGRY = "mob.zoglin.angry",
  MOB_ZOGLIN_ATTACK = "mob.zoglin.attack",
  MOB_ZOGLIN_DEATH = "mob.zoglin.death",
  MOB_ZOGLIN_HURT = "mob.zoglin.hurt",
  MOB_ZOGLIN_IDLE = "mob.zoglin.idle",
  MOB_ZOGLIN_STEP = "mob.zoglin.step",
  MOB_ZOMBIEPIG_ZPIG = "mob.zombiepig.zpig",
  MOB_ZOMBIEPIG_ZPIGANGRY = "mob.zombiepig.zpigangry",
  MOB_ZOMBIEPIG_ZPIGDEATH = "mob.zombiepig.zpigdeath",
  MOB_ZOMBIEPIG_ZPIGHURT = "mob.zombiepig.zpighurt",
  MOB_ZOMBIE_DEATH = "mob.zombie.death",
  MOB_ZOMBIE_HURT = "mob.zombie.hurt",
  MOB_ZOMBIE_REMEDY = "mob.zombie.remedy",
  MOB_ZOMBIE_SAY = "mob.zombie.say",
  MOB_ZOMBIE_STEP = "mob.zombie.step",
  MOB_ZOMBIE_UNFECT = "mob.zombie.unfect",
  MOB_ZOMBIE_VILLAGER_DEATH = "mob.zombie_villager.death",
  MOB_ZOMBIE_VILLAGER_HURT = "mob.zombie_villager.hurt",
  MOB_ZOMBIE_VILLAGER_SAY = "mob.zombie_villager.say",
  MOB_ZOMBIE_WOOD = "mob.zombie.wood",
  MOB_ZOMBIE_WOODBREAK = "mob.zombie.woodbreak",
  MUSIC_GAME = "music.game",
  MUSIC_GAME_BASALT_DELTAS = "music.game.basalt_deltas",
  MUSIC_GAME_CREATIVE = "music.game.creative",
  MUSIC_GAME_CREDITS = "music.game.credits",
  MUSIC_GAME_CRIMSON_FOREST = "music.game.crimson_forest",
  MUSIC_GAME_DRIPSTONE_CAVES = "music.game.dripstone_caves",
  MUSIC_GAME_END = "music.game.end",
  MUSIC_GAME_ENDBOSS = "music.game.endboss",
  MUSIC_GAME_FROZEN_PEAKS = "music.game.frozen_peaks",
  MUSIC_GAME_GROVE = "music.game.grove",
  MUSIC_GAME_JAGGED_PEAKS = "music.game.jagged_peaks",
  MUSIC_GAME_LUSH_CAVES = "music.game.lush_caves",
  MUSIC_GAME_MEADOW = "music.game.meadow",
  MUSIC_GAME_NETHER = "music.game.nether",
  MUSIC_GAME_NETHER_WASTES = "music.game.nether_wastes",
  MUSIC_GAME_SNOWY_SLOPES = "music.game.snowy_slopes",
  MUSIC_GAME_SOULSAND_VALLEY = "music.game.soulsand_valley",
  MUSIC_GAME_SOUL_SAND_VALLEY = "music.game.soul_sand_valley",
  MUSIC_GAME_STONY_PEAKS = "music.game.stony_peaks",
  MUSIC_GAME_WARPED_FOREST = "music.game.warped_forest",
  MUSIC_GAME_WATER = "music.game.water",
  MUSIC_MENU = "music.menu",
  NEARBY_CLOSER_WARDEN = "nearby_closer.warden",
  NEARBY_CLOSEST_WARDEN = "nearby_closest.warden",
  NEARBY_CLOSE_WARDEN = "nearby_close.warden",
  NOTE_BANJO = "note.banjo",
  NOTE_BASS = "note.bass",
  NOTE_BASSATTACK = "note.bassattack",
  NOTE_BD = "note.bd",
  NOTE_BELL = "note.bell",
  NOTE_BIT = "note.bit",
  NOTE_CHIME = "note.chime",
  NOTE_COW_BELL = "note.cow_bell",
  NOTE_DIDGERIDOO = "note.didgeridoo",
  NOTE_FLUTE = "note.flute",
  NOTE_GUITAR = "note.guitar",
  NOTE_HARP = "note.harp",
  NOTE_HAT = "note.hat",
  NOTE_IRON_XYLOPHONE = "note.iron_xylophone",
  NOTE_PLING = "note.pling",
  NOTE_SNARE = "note.snare",
  NOTE_XYLOPHONE = "note.xylophone",
  PARTICLE_SOUL_ESCAPE = "particle.soul_escape",
  PICK_BERRIES_CAVE_VINES = "pick_berries.cave_vines",
  PLACE_AMETHYST_BLOCK = "place.amethyst_block",
  PLACE_AMETHYST_CLUSTER = "place.amethyst_cluster",
  PLACE_AZALEA = "place.azalea",
  PLACE_AZALEA_LEAVES = "place.azalea_leaves",
  PLACE_BIG_DRIPLEAF = "place.big_dripleaf",
  PLACE_CALCITE = "place.calcite",
  PLACE_COPPER = "place.copper",
  PLACE_DEEPSLATE = "place.deepslate",
  PLACE_DEEPSLATE_BRICKS = "place.deepslate_bricks",
  PLACE_DIRT_WITH_ROOTS = "place.dirt_with_roots",
  PLACE_DRIPSTONE_BLOCK = "place.dripstone_block",
  PLACE_HANGING_ROOTS = "place.hanging_roots",
  PLACE_LARGE_AMETHYST_BUD = "place.large_amethyst_bud",
  PLACE_MEDIUM_AMETHYST_BUD = "place.medium_amethyst_bud",
  PLACE_MOSS = "place.moss",
  PLACE_POINTED_DRIPSTONE = "place.pointed_dripstone",
  PLACE_POWDER_SNOW = "place.powder_snow",
  PLACE_SCULK = "place.sculk",
  PLACE_SCULK_CATALYST = "place.sculk_catalyst",
  PLACE_SCULK_SENSOR = "place.sculk_sensor",
  PLACE_SCULK_SHRIEKER = "place.sculk_shrieker",
  PLACE_SMALL_AMETHYST_BUD = "place.small_amethyst_bud",
  PLACE_SPORE_BLOSSOM = "place.spore_blossom",
  PLACE_TUFF = "place.tuff",
  PORTAL_PORTAL = "portal.portal",
  PORTAL_TRAVEL = "portal.travel",
  PORTAL_TRIGGER = "portal.trigger",
  POWER_OFF_SCULK_SENSOR = "power.off.sculk_sensor",
  POWER_ON_SCULK_SENSOR = "power.on.sculk_sensor",
  RAID_HORN = "raid.horn",
  RANDOM_ANVIL_BREAK = "random.anvil_break",
  RANDOM_ANVIL_LAND = "random.anvil_land",
  RANDOM_ANVIL_USE = "random.anvil_use",
  RANDOM_BOW = "random.bow",
  RANDOM_BOWHIT = "random.bowhit",
  RANDOM_BREAK = "random.break",
  RANDOM_BURP = "random.burp",
  RANDOM_CHESTCLOSED = "random.chestclosed",
  RANDOM_CHESTOPEN = "random.chestopen",
  RANDOM_CLICK = "random.click",
  RANDOM_DOOR_CLOSE = "random.door_close",
  RANDOM_DOOR_OPEN = "random.door_open",
  RANDOM_DRINK = "random.drink",
  RANDOM_DRINK_HONEY = "random.drink_honey",
  RANDOM_EAT = "random.eat",
  RANDOM_ENDERCHESTCLOSED = "random.enderchestclosed",
  RANDOM_ENDERCHESTOPEN = "random.enderchestopen",
  RANDOM_EXPLODE = "random.explode",
  RANDOM_FIZZ = "random.fizz",
  RANDOM_FUSE = "random.fuse",
  RANDOM_GLASS = "random.glass",
  RANDOM_HURT = "random.hurt",
  RANDOM_LEVELUP = "random.levelup",
  RANDOM_ORB = "random.orb",
  RANDOM_POP = "random.pop",
  RANDOM_POP2 = "random.pop2",
  RANDOM_POTION_BREWED = "random.potion.brewed",
  RANDOM_SCREENSHOT = "random.screenshot",
  RANDOM_SHULKERBOXCLOSED = "random.shulkerboxclosed",
  RANDOM_SHULKERBOXOPEN = "random.shulkerboxopen",
  RANDOM_SPLASH = "random.splash",
  RANDOM_SWIM = "random.swim",
  RANDOM_TOAST = "random.toast",
  RANDOM_TOTEM = "random.totem",
  RECORD_11 = "record.11",
  RECORD_13 = "record.13",
  RECORD_BLOCKS = "record.blocks",
  RECORD_CAT = "record.cat",
  RECORD_CHIRP = "record.chirp",
  RECORD_FAR = "record.far",
  RECORD_MALL = "record.mall",
  RECORD_MELLOHI = "record.mellohi",
  RECORD_OTHERSIDE = "record.otherside",
  RECORD_PIGSTEP = "record.pigstep",
  RECORD_STAL = "record.stal",
  RECORD_STRAD = "record.strad",
  RECORD_WAIT = "record.wait",
  RECORD_WARD = "record.ward",
  RESPAWN_ANCHOR_AMBIENT = "respawn_anchor.ambient",
  RESPAWN_ANCHOR_CHARGE = "respawn_anchor.charge",
  RESPAWN_ANCHOR_DEPLETE = "respawn_anchor.deplete",
  RESPAWN_ANCHOR_SET_SPAWN = "respawn_anchor.set_spawn",
  SCRAPE = "scrape",
  SHRIEK_SCULK_SHRIEKER = "shriek.sculk_shrieker",
  SIGN_DYE_USE = "sign.dye.use",
  SIGN_INK_SAC_USE = "sign.ink_sac.use",
  SLIGHTLY_ANGRY_WARDEN = "slightly_angry.warden",
  SMITHING_TABLE_USE = "smithing_table.use",
  SPARKLER_ACTIVE = "sparkler.active",
  SPREAD_SCULK = "spread.sculk",
  STEP_AMETHYST_BLOCK = "step.amethyst_block",
  STEP_AMETHYST_CLUSTER = "step.amethyst_cluster",
  STEP_ANCIENT_DEBRIS = "step.ancient_debris",
  STEP_AZALEA = "step.azalea",
  STEP_AZALEA_LEAVES = "step.azalea_leaves",
  STEP_BASALT = "step.basalt",
  STEP_BIG_DRIPLEAF = "step.big_dripleaf",
  STEP_BONE_BLOCK = "step.bone_block",
  STEP_CALCITE = "step.calcite",
  STEP_CANDLE = "step.candle",
  STEP_CAVE_VINES = "step.cave_vines",
  STEP_CHAIN = "step.chain",
  STEP_CLOTH = "step.cloth",
  STEP_COPPER = "step.copper",
  STEP_CORAL = "step.coral",
  STEP_DEEPSLATE = "step.deepslate",
  STEP_DEEPSLATE_BRICKS = "step.deepslate_bricks",
  STEP_DIRT_WITH_ROOTS = "step.dirt_with_roots",
  STEP_DRIPSTONE_BLOCK = "step.dripstone_block",
  STEP_GRASS = "step.grass",
  STEP_GRAVEL = "step.gravel",
  STEP_HANGING_ROOTS = "step.hanging_roots",
  STEP_HONEY_BLOCK = "step.honey_block",
  STEP_LADDER = "step.ladder",
  STEP_MOSS = "step.moss",
  STEP_NETHERITE = "step.netherite",
  STEP_NETHERRACK = "step.netherrack",
  STEP_NETHER_BRICK = "step.nether_brick",
  STEP_NETHER_GOLD_ORE = "step.nether_gold_ore",
  STEP_NETHER_SPROUTS = "step.nether_sprouts",
  STEP_NETHER_WART = "step.nether_wart",
  STEP_NYLIUM = "step.nylium",
  STEP_POINTED_DRIPSTONE = "step.pointed_dripstone",
  STEP_POWDER_SNOW = "step.powder_snow",
  STEP_ROOTS = "step.roots",
  STEP_SAND = "step.sand",
  STEP_SCULK = "step.sculk",
  STEP_SCULK_CATALYST = "step.sculk_catalyst",
  STEP_SCULK_SENSOR = "step.sculk_sensor",
  STEP_SCULK_SHRIEKER = "step.sculk_shrieker",
  STEP_SCULK_VEIN = "step.sculk_vein",
  STEP_SHROOMLIGHT = "step.shroomlight",
  STEP_SLIME = "step.slime",
  STEP_SNOW = "step.snow",
  STEP_SOUL_SAND = "step.soul_sand",
  STEP_SOUL_SOIL = "step.soul_soil",
  STEP_SPORE_BLOSSOM = "step.spore_blossom",
  STEP_STEM = "step.stem",
  STEP_STONE = "step.stone",
  STEP_TUFF = "step.tuff",
  STEP_VINES = "step.vines",
  STEP_WOOD = "step.wood",
  TILE_PISTON_IN = "tile.piston.in",
  TILE_PISTON_OUT = "tile.piston.out",
  TILT_DOWN_BIG_DRIPLEAF = "tilt_down.big_dripleaf",
  TILT_UP_BIG_DRIPLEAF = "tilt_up.big_dripleaf",
  UI_CARTOGRAPHY_TABLE_TAKE_RESULT = "ui.cartography_table.take_result",
  UI_LOOM_SELECT_PATTERN = "ui.loom.select_pattern",
  UI_LOOM_TAKE_RESULT = "ui.loom.take_result",
  UI_STONECUTTER_TAKE_RESULT = "ui.stonecutter.take_result",
  USE_ANCIENT_DEBRIS = "use.ancient_debris",
  USE_BASALT = "use.basalt",
  USE_BONE_BLOCK = "use.bone_block",
  USE_CANDLE = "use.candle",
  USE_CAVE_VINES = "use.cave_vines",
  USE_CHAIN = "use.chain",
  USE_CLOTH = "use.cloth",
  USE_COPPER = "use.copper",
  USE_CORAL = "use.coral",
  USE_DEEPSLATE = "use.deepslate",
  USE_DEEPSLATE_BRICKS = "use.deepslate_bricks",
  USE_DIRT_WITH_ROOTS = "use.dirt_with_roots",
  USE_DRIPSTONE_BLOCK = "use.dripstone_block",
  USE_GRASS = "use.grass",
  USE_GRAVEL = "use.gravel",
  USE_HANGING_ROOTS = "use.hanging_roots",
  USE_HONEY_BLOCK = "use.honey_block",
  USE_LADDER = "use.ladder",
  USE_MOSS = "use.moss",
  USE_NETHERITE = "use.netherite",
  USE_NETHERRACK = "use.netherrack",
  USE_NETHER_BRICK = "use.nether_brick",
  USE_NETHER_GOLD_ORE = "use.nether_gold_ore",
  USE_NETHER_SPROUTS = "use.nether_sprouts",
  USE_NETHER_WART = "use.nether_wart",
  USE_NYLIUM = "use.nylium",
  USE_POINTED_DRIPSTONE = "use.pointed_dripstone",
  USE_ROOTS = "use.roots",
  USE_SAND = "use.sand",
  USE_SCULK_SENSOR = "use.sculk_sensor",
  USE_SHROOMLIGHT = "use.shroomlight",
  USE_SLIME = "use.slime",
  USE_SNOW = "use.snow",
  USE_SOUL_SAND = "use.soul_sand",
  USE_SOUL_SOIL = "use.soul_soil",
  USE_SPORE_BLOSSOM = "use.spore_blossom",
  USE_STEM = "use.stem",
  USE_STONE = "use.stone",
  USE_VINES = "use.vines",
  USE_WOOD = "use.wood",
  VR_STUTTERTURN = "vr.stutterturn",
}

// armor.equip_chain
// armor.equip_diamond
// armor.equip_generic
// armor.equip_gold
// armor.equip_iron
// armor.equip_leather
// armor.equip_netherite
// balloon.pop
// beacon.activate
// beacon.ambient
// beacon.deactivate
// beacon.power
// block.bamboo.break
// block.bamboo.fall
// block.bamboo.hit
// block.bamboo.place
// block.bamboo.step
// block.bamboo_sapling.break
// block.bamboo_sapling.place
// block.barrel.close
// block.barrel.open
// block.beehive.drip
// block.beehive.enter
// block.beehive.exit
// block.beehive.shear
// block.beehive.work
// block.bell.hit
// block.blastfurnace.fire_crackle
// block.bowhit
// block.campfire.crackle
// block.cartography_table.use
// block.chorusflower.death
// block.chorusflower.grow
// block.click
// block.composter.empty
// block.composter.fill
// block.composter.fill_success
// block.composter.ready
// block.end_portal.spawn
// block.end_portal_frame.fill
// block.false_permissions
// block.furnace.lit
// block.grindstone.use
// block.itemframe.add_item
// block.itemframe.break
// block.itemframe.place
// block.itemframe.remove_item
// block.itemframe.rotate_item
// block.lantern.break
// block.lantern.fall
// block.lantern.hit
// block.lantern.place
// block.lantern.step
// block.loom.use
// block.scaffolding.break
// block.scaffolding.climb
// block.scaffolding.fall
// block.scaffolding.hit
// block.scaffolding.place
// block.scaffolding.step
// block.smoker.smoke
// block.stonecutter.use
// block.sweet_berry_bush.break
// block.sweet_berry_bush.hurt
// block.sweet_berry_bush.pick
// block.sweet_berry_bush.place
// block.turtle_egg.break
// block.turtle_egg.crack
// block.turtle_egg.drop
// bloom.sculk_catalyst
// bottle.dragonbreath
// break.amethyst_block
// break.amethyst_cluster
// break.azalea
// break.big_dripleaf
// break.calcite
// break.dirt_with_roots
// break.dripstone_block
// break.hanging_roots
// break.large_amethyst_bud
// break.medium_amethyst_bud
// break.pointed_dripstone
// break.sculk
// break.sculk_catalyst
// break.sculk_sensor
// break.sculk_shrieker
// break.sculk_vein
// break.small_amethyst_bud
// break.spore_blossom
// break.tuff
// bubble.down
// bubble.downinside
// bubble.pop
// bubble.up
// bubble.upinside
// bucket.empty_fish
// bucket.empty_lava
// bucket.empty_powder_snow
// bucket.empty_water
// bucket.fill_fish
// bucket.fill_lava
// bucket.fill_powder_snow
// bucket.fill_water
// cake.add_candle
// camera.take_picture
// cauldron.adddye
// cauldron.cleanarmor
// cauldron.cleanbanner
// cauldron.dyearmor
// cauldron.explode
// cauldron.fillpotion
// cauldron.fillwater
// cauldron.takepotion
// cauldron.takewater
// cauldron_drip.lava.pointed_dripstone
// cauldron_drip.water.pointed_dripstone
// chime.amethyst_block
// component.jump_to_block
// conduit.activate
// conduit.ambient
// conduit.attack
// conduit.deactivate
// conduit.short
// copper.wax.off
// copper.wax.on
// crossbow.loading.end
// crossbow.loading.middle
// crossbow.loading.start
// crossbow.quick_charge.end
// crossbow.quick_charge.middle
// crossbow.quick_charge.start
// crossbow.shoot
// damage.fallbig
// damage.fallsmall
// dig.ancient_debris
// dig.azalea_leaves
// dig.basalt
// dig.bone_block
// dig.candle
// dig.cave_vines
// dig.chain
// dig.cloth
// dig.copper
// dig.coral
// dig.deepslate
// dig.deepslate_bricks
// dig.fungus
// dig.grass
// dig.gravel
// dig.honey_block
// dig.lodestone
// dig.moss
// dig.nether_brick
// dig.nether_gold_ore
// dig.nether_sprouts
// dig.nether_wart
// dig.netherite
// dig.netherrack
// dig.nylium
// dig.powder_snow
// dig.roots
// dig.sand
// dig.shroomlight
// dig.snow
// dig.soul_sand
// dig.soul_soil
// dig.stem
// dig.stone
// dig.vines
// dig.wood
// drip.lava.pointed_dripstone
// drip.water.pointed_dripstone
// elemconstruct.active
// elytra.loop
// entity.zombie.converted_to_drowned
// extinguish.candle
// fall.amethyst_block
// fall.amethyst_cluster
// fall.ancient_debris
// fall.azalea
// fall.azalea_leaves
// fall.basalt
// fall.big_dripleaf
// fall.bone_block
// fall.calcite
// fall.cave_vines
// fall.chain
// fall.cloth
// fall.copper
// fall.coral
// fall.deepslate
// fall.deepslate_bricks
// fall.dirt_with_roots
// fall.dripstone_block
// fall.egg
// fall.grass
// fall.gravel
// fall.hanging_roots
// fall.honey_block
// fall.ladder
// fall.moss
// fall.nether_brick
// fall.nether_gold_ore
// fall.nether_sprouts
// fall.nether_wart
// fall.netherite
// fall.netherrack
// fall.nylium
// fall.pointed_dripstone
// fall.powder_snow
// fall.roots
// fall.sand
// fall.sculk_sensor
// fall.sculk_shrieker
// fall.shroomlight
// fall.slime
// fall.snow
// fall.soul_sand
// fall.soul_soil
// fall.spore_blossom
// fall.stem
// fall.stone
// fall.tuff
// fall.vines
// fall.wood
// fire.fire
// fire.ignite
// firework.blast
// firework.large_blast
// firework.launch
// firework.shoot
// firework.twinkle
// game.player.attack.nodamage
// game.player.attack.strong
// game.player.die
// game.player.hurt
// hit.amethyst_block
// hit.amethyst_cluster
// hit.ancient_debris
// hit.anvil
// hit.azalea
// hit.azalea_leaves
// hit.basalt
// hit.big_dripleaf
// hit.bone_block
// hit.calcite
// hit.candle
// hit.cave_vines
// hit.chain
// hit.cloth
// hit.copper
// hit.coral
// hit.deepslate
// hit.deepslate_bricks
// hit.dirt_with_roots
// hit.dripstone_block
// hit.grass
// hit.gravel
// hit.hanging_roots
// hit.honey_block
// hit.ladder
// hit.moss
// hit.nether_brick
// hit.nether_gold_ore
// hit.nether_sprouts
// hit.nether_wart
// hit.netherite
// hit.netherrack
// hit.nylium
// hit.pointed_dripstone
// hit.powder_snow
// hit.roots
// hit.sand
// hit.sculk
// hit.sculk_catalyst
// hit.sculk_sensor
// hit.sculk_shrieker
// hit.shroomlight
// hit.slime
// hit.snow
// hit.soul_sand
// hit.soul_soil
// hit.spore_blossom
// hit.stem
// hit.stone
// hit.tuff
// hit.vines
// hit.wood
// item.bone_meal.use
// item.book.page_turn
// item.book.put
// item.shield.block
// item.spyglass.stop_using
// item.spyglass.use
// item.trident.hit
// item.trident.hit_ground
// item.trident.return
// item.trident.riptide_1
// item.trident.riptide_2
// item.trident.riptide_3
// item.trident.throw
// item.trident.thunder
// jump.ancient_debris
// jump.azalea
// jump.basalt
// jump.big_dripleaf
// jump.bone_block
// jump.cave_vines
// jump.chain
// jump.cloth
// jump.coral
// jump.deepslate
// jump.deepslate_bricks
// jump.dirt_with_roots
// jump.dripstone_block
// jump.grass
// jump.gravel
// jump.hanging_roots
// jump.honey_block
// jump.moss
// jump.nether_brick
// jump.nether_gold_ore
// jump.nether_sprouts
// jump.nether_wart
// jump.netherite
// jump.netherrack
// jump.nylium
// jump.pointed_dripstone
// jump.roots
// jump.sand
// jump.sculk_sensor
// jump.shroomlight
// jump.slime
// jump.snow
// jump.soul_sand
// jump.soul_soil
// jump.spore_blossom
// jump.stem
// jump.stone
// jump.vines
// jump.wood
// land.ancient_debris
// land.azalea
// land.basalt
// land.big_dripleaf
// land.bone_block
// land.cave_vines
// land.chain
// land.cloth
// land.coral
// land.deepslate
// land.deepslate_bricks
// land.dirt_with_roots
// land.dripstone_block
// land.grass
// land.gravel
// land.hanging_roots
// land.honey_block
// land.moss
// land.nether_brick
// land.nether_gold_ore
// land.nether_sprouts
// land.nether_wart
// land.netherite
// land.netherrack
// land.nylium
// land.pointed_dripstone
// land.roots
// land.sand
// land.sculk_sensor
// land.shroomlight
// land.slime
// land.snow
// land.soul_sand
// land.soul_soil
// land.spore_blossom
// land.stem
// land.stone
// land.vines
// land.wood
// leashknot.break
// leashknot.place
// liquid.lava
// liquid.lavapop
// liquid.water
// lodestone_compass.link_compass_to_lodestone
// lt.reaction.fire
// minecart.base
// minecart.inside
// mob.agent.spawn
// mob.armor_stand.break
// mob.armor_stand.hit
// mob.armor_stand.land
// mob.armor_stand.place
// mob.axolotl.attack
// mob.axolotl.death
// mob.axolotl.hurt
// mob.axolotl.idle
// mob.axolotl.idle_water
// mob.axolotl.splash
// mob.axolotl.swim
// mob.bat.death
// mob.bat.hurt
// mob.bat.idle
// mob.bat.takeoff
// mob.bee.aggressive
// mob.bee.death
// mob.bee.hurt
// mob.bee.loop
// mob.bee.pollinate
// mob.bee.sting
// mob.blaze.breathe
// mob.blaze.death
// mob.blaze.hit
// mob.blaze.shoot
// mob.cat.beg
// mob.cat.eat
// mob.cat.hiss
// mob.cat.hit
// mob.cat.meow
// mob.cat.purr
// mob.cat.purreow
// mob.cat.straymeow
// mob.chicken.hurt
// mob.chicken.plop
// mob.chicken.say
// mob.chicken.step
// mob.cow.hurt
// mob.cow.milk
// mob.cow.say
// mob.cow.step
// mob.creeper.death
// mob.creeper.say
// mob.dolphin.attack
// mob.dolphin.blowhole
// mob.dolphin.death
// mob.dolphin.eat
// mob.dolphin.hurt
// mob.dolphin.idle
// mob.dolphin.idle_water
// mob.dolphin.jump
// mob.dolphin.play
// mob.dolphin.splash
// mob.dolphin.swim
// mob.drowned.death
// mob.drowned.death_water
// mob.drowned.hurt
// mob.drowned.hurt_water
// mob.drowned.say
// mob.drowned.say_water
// mob.drowned.shoot
// mob.drowned.step
// mob.drowned.swim
// mob.elderguardian.curse
// mob.elderguardian.death
// mob.elderguardian.hit
// mob.elderguardian.idle
// mob.enderdragon.death
// mob.enderdragon.flap
// mob.enderdragon.growl
// mob.enderdragon.hit
// mob.endermen.death
// mob.endermen.hit
// mob.endermen.idle
// mob.endermen.portal
// mob.endermen.scream
// mob.endermen.stare
// mob.endermite.hit
// mob.endermite.kill
// mob.endermite.say
// mob.endermite.step
// mob.evocation_fangs.attack
// mob.evocation_illager.ambient
// mob.evocation_illager.cast_spell
// mob.evocation_illager.celebrate
// mob.evocation_illager.death
// mob.evocation_illager.hurt
// mob.evocation_illager.prepare_attack
// mob.evocation_illager.prepare_summon
// mob.evocation_illager.prepare_wololo
// mob.fish.flop
// mob.fish.hurt
// mob.fish.step
// mob.fox.aggro
// mob.fox.ambient
// mob.fox.bite
// mob.fox.death
// mob.fox.eat
// mob.fox.hurt
// mob.fox.screech
// mob.fox.sleep
// mob.fox.sniff
// mob.fox.spit
// mob.frog.ambient
// mob.frog.death
// mob.frog.eat
// mob.frog.hurt
// mob.frog.jump_to_block
// mob.frog.step
// mob.frog.tongue
// mob.ghast.affectionate_scream
// mob.ghast.charge
// mob.ghast.death
// mob.ghast.fireball
// mob.ghast.moan
// mob.ghast.scream
// mob.glow_squid.ambient
// mob.glow_squid.death
// mob.glow_squid.hurt
// mob.glow_squid.ink_squirt
// mob.goat.ambient
// mob.goat.ambient.screamer
// mob.goat.death
// mob.goat.death.screamer
// mob.goat.eat
// mob.goat.hurt
// mob.goat.hurt.screamer
// mob.goat.milk.screamer
// mob.goat.prepare_ram
// mob.goat.prepare_ram.screamer
// mob.goat.ram_impact
// mob.goat.ram_impact.screamer
// mob.goat.step
// mob.guardian.ambient
// mob.guardian.attack_loop
// mob.guardian.death
// mob.guardian.flop
// mob.guardian.hit
// mob.guardian.land_death
// mob.guardian.land_hit
// mob.guardian.land_idle
// mob.hoglin.ambient
// mob.hoglin.angry
// mob.hoglin.attack
// mob.hoglin.death
// mob.hoglin.howl
// mob.hoglin.hurt
// mob.hoglin.retreat
// mob.hoglin.step
// mob.horse.angry
// mob.horse.armor
// mob.horse.breathe
// mob.horse.death
// mob.horse.donkey.angry
// mob.horse.donkey.death
// mob.horse.donkey.hit
// mob.horse.donkey.idle
// mob.horse.eat
// mob.horse.gallop
// mob.horse.hit
// mob.horse.idle
// mob.horse.jump
// mob.horse.land
// mob.horse.leather
// mob.horse.skeleton.death
// mob.horse.skeleton.hit
// mob.horse.skeleton.idle
// mob.horse.soft
// mob.horse.wood
// mob.horse.zombie.death
// mob.horse.zombie.hit
// mob.horse.zombie.idle
// mob.husk.ambient
// mob.husk.death
// mob.husk.hurt
// mob.husk.step
// mob.irongolem.crack
// mob.irongolem.death
// mob.irongolem.hit
// mob.irongolem.repair
// mob.irongolem.throw
// mob.irongolem.walk
// mob.llama.angry
// mob.llama.death
// mob.llama.eat
// mob.llama.hurt
// mob.llama.idle
// mob.llama.spit
// mob.llama.step
// mob.llama.swag
// mob.magmacube.big
// mob.magmacube.jump
// mob.magmacube.small
// mob.mooshroom.convert
// mob.mooshroom.eat
// mob.mooshroom.suspicious_milk
// mob.ocelot.death
// mob.ocelot.idle
// mob.panda.bite
// mob.panda.cant_breed
// mob.panda.death
// mob.panda.eat
// mob.panda.hurt
// mob.panda.idle
// mob.panda.idle.aggressive
// mob.panda.idle.worried
// mob.panda.presneeze
// mob.panda.sneeze
// mob.panda.step
// mob.panda_baby.idle
// mob.parrot.death
// mob.parrot.eat
// mob.parrot.fly
// mob.parrot.hurt
// mob.parrot.idle
// mob.parrot.step
// mob.phantom.bite
// mob.phantom.death
// mob.phantom.flap
// mob.phantom.hurt
// mob.phantom.idle
// mob.phantom.swoop
// mob.pig.boost
// mob.pig.death
// mob.pig.say
// mob.pig.step
// mob.piglin.admiring_item
// mob.piglin.ambient
// mob.piglin.angry
// mob.piglin.celebrate
// mob.piglin.converted_to_zombified
// mob.piglin.death
// mob.piglin.hurt
// mob.piglin.jealous
// mob.piglin.retreat
// mob.piglin.step
// mob.piglin_brute.ambient
// mob.piglin_brute.angry
// mob.piglin_brute.converted_to_zombified
// mob.piglin_brute.death
// mob.piglin_brute.hurt
// mob.piglin_brute.step
// mob.pillager.celebrate
// mob.pillager.death
// mob.pillager.hurt
// mob.pillager.idle
// mob.player.hurt_drown
// mob.player.hurt_freeze
// mob.player.hurt_on_fire
// mob.polarbear.death
// mob.polarbear.hurt
// mob.polarbear.idle
// mob.polarbear.step
// mob.polarbear.warning
// mob.polarbear_baby.idle
// mob.rabbit.death
// mob.rabbit.hop
// mob.rabbit.hurt
// mob.rabbit.idle
// mob.ravager.ambient
// mob.ravager.bite
// mob.ravager.celebrate
// mob.ravager.death
// mob.ravager.hurt
// mob.ravager.roar
// mob.ravager.step
// mob.ravager.stun
// mob.sheep.say
// mob.sheep.shear
// mob.sheep.step
// mob.shulker.ambient
// mob.shulker.bullet.hit
// mob.shulker.close
// mob.shulker.close.hurt
// mob.shulker.death
// mob.shulker.hurt
// mob.shulker.open
// mob.shulker.shoot
// mob.shulker.teleport
// mob.silverfish.hit
// mob.silverfish.kill
// mob.silverfish.say
// mob.silverfish.step
// mob.skeleton.convert_to_stray
// mob.skeleton.death
// mob.skeleton.hurt
// mob.skeleton.say
// mob.skeleton.step
// mob.slime.attack
// mob.slime.big
// mob.slime.death
// mob.slime.hurt
// mob.slime.jump
// mob.slime.small
// mob.slime.squish
// mob.snowgolem.death
// mob.snowgolem.hurt
// mob.snowgolem.shoot
// mob.spider.death
// mob.spider.say
// mob.spider.step
// mob.squid.ambient
// mob.squid.death
// mob.squid.hurt
// mob.squid.ink_squirt
// mob.stray.ambient
// mob.stray.death
// mob.stray.hurt
// mob.stray.step
// mob.strider.death
// mob.strider.eat
// mob.strider.hurt
// mob.strider.idle
// mob.strider.panic
// mob.strider.step
// mob.strider.step_lava
// mob.strider.tempt
// mob.tadpole.death
// mob.tadpole.hurt
// mob.turtle.ambient
// mob.turtle.death
// mob.turtle.hurt
// mob.turtle.step
// mob.turtle.swim
// mob.turtle_baby.born
// mob.turtle_baby.death
// mob.turtle_baby.hurt
// mob.turtle_baby.step
// mob.vex.ambient
// mob.vex.charge
// mob.vex.death
// mob.vex.hurt
// mob.villager.death
// mob.villager.haggle
// mob.villager.hit
// mob.villager.idle
// mob.villager.no
// mob.villager.yes
// mob.vindicator.celebrate
// mob.vindicator.death
// mob.vindicator.hurt
// mob.vindicator.idle
// mob.wanderingtrader.death
// mob.wanderingtrader.disappeared
// mob.wanderingtrader.drink_milk
// mob.wanderingtrader.drink_potion
// mob.wanderingtrader.haggle
// mob.wanderingtrader.hurt
// mob.wanderingtrader.idle
// mob.wanderingtrader.no
// mob.wanderingtrader.reappeared
// mob.wanderingtrader.yes
// mob.witch.ambient
// mob.witch.celebrate
// mob.witch.death
// mob.witch.drink
// mob.witch.hurt
// mob.witch.throw
// mob.wither.ambient
// mob.wither.break_block
// mob.wither.death
// mob.wither.hurt
// mob.wither.shoot
// mob.wither.spawn
// mob.wolf.bark
// mob.wolf.death
// mob.wolf.growl
// mob.wolf.hurt
// mob.wolf.panting
// mob.wolf.shake
// mob.wolf.step
// mob.wolf.whine
// mob.zoglin.angry
// mob.zoglin.attack
// mob.zoglin.death
// mob.zoglin.hurt
// mob.zoglin.idle
// mob.zoglin.step
// mob.zombie.death
// mob.zombie.hurt
// mob.zombie.remedy
// mob.zombie.say
// mob.zombie.step
// mob.zombie.unfect
// mob.zombie.wood
// mob.zombie.woodbreak
// mob.zombie_villager.death
// mob.zombie_villager.hurt
// mob.zombie_villager.say
// mob.zombiepig.zpig
// mob.zombiepig.zpigangry
// mob.zombiepig.zpigdeath
// mob.zombiepig.zpighurt
// music.game
// music.game.basalt_deltas
// music.game.creative
// music.game.credits
// music.game.crimson_forest
// music.game.dripstone_caves
// music.game.end
// music.game.endboss
// music.game.frozen_peaks
// music.game.grove
// music.game.jagged_peaks
// music.game.lush_caves
// music.game.meadow
// music.game.nether
// music.game.nether_wastes
// music.game.snowy_slopes
// music.game.soul_sand_valley
// music.game.soulsand_valley
// music.game.stony_peaks
// music.game.warped_forest
// music.game.water
// music.menu
// nearby_close.warden
// nearby_closer.warden
// nearby_closest.warden
// note.banjo
// note.bass
// note.bassattack
// note.bd
// note.bell
// note.bit
// note.chime
// note.cow_bell
// note.didgeridoo
// note.flute
// note.guitar
// note.harp
// note.hat
// note.iron_xylophone
// note.pling
// note.snare
// note.xylophone
// particle.soul_escape
// pick_berries.cave_vines
// place.amethyst_block
// place.amethyst_cluster
// place.azalea
// place.azalea_leaves
// place.big_dripleaf
// place.calcite
// place.copper
// place.deepslate
// place.deepslate_bricks
// place.dirt_with_roots
// place.dripstone_block
// place.hanging_roots
// place.large_amethyst_bud
// place.medium_amethyst_bud
// place.moss
// place.pointed_dripstone
// place.powder_snow
// place.sculk
// place.sculk_catalyst
// place.sculk_sensor
// place.sculk_shrieker
// place.small_amethyst_bud
// place.spore_blossom
// place.tuff
// portal.portal
// portal.travel
// portal.trigger
// power.off.sculk_sensor
// power.on.sculk_sensor
// raid.horn
// random.anvil_break
// random.anvil_land
// random.anvil_use
// random.bow
// random.bowhit
// random.break
// random.burp
// random.chestclosed
// random.chestopen
// random.click
// random.door_close
// random.door_open
// random.drink
// random.drink_honey
// random.eat
// random.enderchestclosed
// random.enderchestopen
// random.explode
// random.fizz
// random.fuse
// random.glass
// random.hurt
// random.levelup
// random.orb
// random.pop
// random.pop2
// random.potion.brewed
// random.screenshot
// random.shulkerboxclosed
// random.shulkerboxopen
// random.splash
// random.swim
// random.toast
// random.totem
// record.11
// record.13
// record.blocks
// record.cat
// record.chirp
// record.far
// record.mall
// record.mellohi
// record.otherside
// record.pigstep
// record.stal
// record.strad
// record.wait
// record.ward
// respawn_anchor.ambient
// respawn_anchor.charge
// respawn_anchor.deplete
// respawn_anchor.set_spawn
// scrape
// shriek.sculk_shrieker
// sign.dye.use
// sign.ink_sac.use
// slightly_angry.warden
// smithing_table.use
// sparkler.active
// spread.sculk
// step.amethyst_block
// step.amethyst_cluster
// step.ancient_debris
// step.azalea
// step.azalea_leaves
// step.basalt
// step.big_dripleaf
// step.bone_block
// step.calcite
// step.candle
// step.cave_vines
// step.chain
// step.cloth
// step.copper
// step.coral
// step.deepslate
// step.deepslate_bricks
// step.dirt_with_roots
// step.dripstone_block
// step.grass
// step.gravel
// step.hanging_roots
// step.honey_block
// step.ladder
// step.moss
// step.nether_brick
// step.nether_gold_ore
// step.nether_sprouts
// step.nether_wart
// step.netherite
// step.netherrack
// step.nylium
// step.pointed_dripstone
// step.powder_snow
// step.roots
// step.sand
// step.sculk
// step.sculk_catalyst
// step.sculk_sensor
// step.sculk_shrieker
// step.sculk_vein
// step.shroomlight
// step.slime
// step.snow
// step.soul_sand
// step.soul_soil
// step.spore_blossom
// step.stem
// step.stone
// step.tuff
// step.vines
// step.wood
// tile.piston.in
// tile.piston.out
// tilt_down.big_dripleaf
// tilt_up.big_dripleaf
// ui.cartography_table.take_result
// ui.loom.select_pattern
// ui.loom.take_result
// ui.stonecutter.take_result
// use.ancient_debris
// use.basalt
// use.bone_block
// use.candle
// use.cave_vines
// use.chain
// use.cloth
// use.copper
// use.coral
// use.deepslate
// use.deepslate_bricks
// use.dirt_with_roots
// use.dripstone_block
// use.grass
// use.gravel
// use.hanging_roots
// use.honey_block
// use.ladder
// use.moss
// use.nether_brick
// use.nether_gold_ore
// use.nether_sprouts
// use.nether_wart
// use.netherite
// use.netherrack
// use.nylium
// use.pointed_dripstone
// use.roots
// use.sand
// use.sculk_sensor
// use.shroomlight
// use.slime
// use.snow
// use.soul_sand
// use.soul_soil
// use.spore_blossom
// use.stem
// use.stone
// use.vines
// use.wood
// vr.stutterturn
