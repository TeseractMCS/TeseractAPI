import { ItemComponentUseEvent as MinecraftItemComponentUseEvent, ItemCompleteUseAfterEvent } from "@minecraft/server";
import ItemStack from "TeseractAPI/Inventory/ItemStack";
import Teseract from "TeseractAPI/Teseract";
import Player from "TeseractAPI/entity/Player";
import ItemCompleteUseEvent from "TeseractAPI/event/item/ItemCompleteUseEvent";

export class ItemComponentUseEvent {
    #minecraft_data: { player: Player; itemStack: ItemStack; };

    /**
     * @param {MinecraftItemComponentUseEvent} data - The original event data from the Minecraft server.
     */
    constructor(data: MinecraftItemComponentUseEvent) {
        this.#minecraft_data = {
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
            return this.#minecraft_data.player;
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
            return this.#minecraft_data.itemStack;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}


export class ItemComponentConsumeEvent {
    #minecraft_data: { player: Player; itemStack: ItemStack; };

    /**
     * @param {MinecraftItemComponentUseEvent} data - The original event data from the Minecraft server.
     */
    constructor(data: ItemCompleteUseAfterEvent) {
        this.#minecraft_data = {
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
            return this.#minecraft_data.player;
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
            return this.#minecraft_data.itemStack;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

