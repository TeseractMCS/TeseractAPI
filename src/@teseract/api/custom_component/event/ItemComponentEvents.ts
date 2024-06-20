import {
    ItemComponentUseEvent as MinecraftItemComponentUseEvent,
    ItemComponentConsumeEvent as MinecraftItemComponentConsumeEvent,
    ItemComponentBeforeDurabilityDamageEvent as MinecraftItemComponentBeforeDurabilityDamageEvent,
    ItemComponentCompleteUseEvent as MinecraftItemComponentCompleteUseEvent,
    ItemComponentHitEntityEvent as MinecraftItemComponentHitEntityEvent,
} from "@minecraft/server";
import ItemStack from "@teseract/api/Inventory/ItemStack";
import Teseract from "@teseract/api/Teseract";
import Entity from "@teseract/api/entity/Entity";
import Player from "@teseract/api/entity/Player";
import ItemCompleteUseEvent from "@teseract/api/event/item/ItemCompleteUseEvent";
import NativeParserUtil from "@teseract/api/util/NativeLocationParser";

export class ItemComponentUseEvent {
    #minecraftData: { player: Player; itemStack: ItemStack };

    /**
     * @param {MinecraftItemComponentUseEvent} data - The original event data from the Minecraft server.
     */
    constructor(data: MinecraftItemComponentUseEvent) {
        this.#minecraftData = {
            player: new Player(data.source),
            itemStack: new ItemStack(data.itemStack),
        };
    }

    /**
     * @remarks
     * Retrieves the player who used the item.
     * @returns {Player} The player who used the item.
     */
    public getPlayer(): Player {
        try {
            return this.#minecraftData.player;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Retrieves the item stack that was used.
     * @returns {ItemStack} The item stack that was used.
     */
    public getItemStack(): ItemStack {
        try {
            return this.#minecraftData.itemStack;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class ItemComponentConsumeEvent {
    #minecraftData: { player: Entity; itemStack: ItemStack };

    /**
     * @param {MinecraftItemComponentUseEvent} data - The original event data from the Minecraft server.
     */
    constructor(data: MinecraftItemComponentConsumeEvent) {
        this.#minecraftData = {
            player: NativeParserUtil.NativeOptionalEntity(data.source),
            itemStack: new ItemStack(data.itemStack),
        };
    }

    /**
     * @remarks
     * Retrieves the player who used the item.
     * @returns {Entity} The player who used the item.
     */
    public getEntity(): Entity {
        try {
            return this.#minecraftData.player;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Retrieves the item stack that was used.
     * @returns {ItemStack} The item stack that was used.
     */
    public getItemStack(): ItemStack {
        try {
            return this.#minecraftData.itemStack;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class ItemComponentBeforeDurabilityDamageEvent {
    #minecraftData: {
        attackingEntity: Entity;
        hitEntity: Entity;
        durabilityDamage: number;
        itemStack: ItemStack;
    };

    constructor(data: MinecraftItemComponentBeforeDurabilityDamageEvent) {
        this.#minecraftData = {
            attackingEntity: NativeParserUtil.NativeOptionalEntity(
                data.attackingEntity,
            ),
            hitEntity: NativeParserUtil.NativeOptionalEntity(data.hitEntity),
            durabilityDamage: data.durabilityDamage,
            itemStack: NativeParserUtil.NativeOptionalItemStack(data.itemStack),
        };
    }

    /**
     * @remarks
     * The attacking entity.
     *
     */
    public getAttackingEntity(): Entity {
        try {
            return this.#minecraftData.attackingEntity;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
    /**
     * @remarks
     * The damage applied to the item's durability when the event
     * occurs.
     *
     */
    public getDurabilityDamage(): number {
        try {
            return this.#minecraftData.durabilityDamage;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
    /**
     * @remarks
     * The entity being hit.
     *
     */
    public getHitEntity(): Entity {
        try {
            return this.#minecraftData.hitEntity;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
    /**
     * @remarks
     * The item stack used to hit the entity.
     *
     */
    public getItemStack(): ItemStack {
        try {
            return this.#minecraftData.itemStack;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class ItemComponentCompleteUseEvent {
    #minecraftData: { source: Entity; itemStack: ItemStack };
    constructor(data: MinecraftItemComponentCompleteUseEvent) {
        this.#minecraftData = {
            source: NativeParserUtil.NativeOptionalEntity(data.source),
            itemStack: NativeParserUtil.NativeOptionalItemStack(data.itemStack),
        };
    }

    public getEntity(): Entity {
        try {
            return this.#minecraftData.source;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Retrieves the item stack that was used.
     * @returns {ItemStack} The item stack that was used.
     */
    public getItemStack(): ItemStack {
        try {
            return this.#minecraftData.itemStack;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class ItemComponentHitEntityEvent {
    #minecraftData: {
        attackingEntity: Entity;
        hitEntity: Entity;
        itemStack: ItemStack;
        hadEffect: boolean;
    };

    constructor(data: MinecraftItemComponentHitEntityEvent) {
        this.#minecraftData = {
            attackingEntity: NativeParserUtil.NativeOptionalEntity(
                data.attackingEntity,
            ),
            hitEntity: NativeParserUtil.NativeOptionalEntity(data.hitEntity),
            itemStack: NativeParserUtil.NativeOptionalItemStack(data.itemStack),
            hadEffect: data.hadEffect,
        };
    }

    /**
     * @remarks
     * The attacking entity.
     *
     */
    public getAttackingEntity(): Entity {
        try {
            return this.#minecraftData.attackingEntity;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * The entity being hit.
     *
     */
    public getHitEntity(): Entity {
        try {
            return this.#minecraftData.hitEntity;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
    
    /**
     * @remarks
     * The item stack used to hit the entity.
     *
     */
    public getItemStack(): ItemStack {
        try {
            return this.#minecraftData.itemStack;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public hadEffect(): boolean {
        try {
            return this.#minecraftData.hadEffect;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
