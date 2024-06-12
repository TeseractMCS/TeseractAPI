import * as MinecraftServer from "@minecraft/server";
import ItemStack from "TeseractAPI/Inventory/ItemStack";
import Teseract from "TeseractAPI/Teseract";
import Player from "TeseractAPI/entity/Player";

export default class ItemEventBase {
    #minecraft_data: { item: ItemStack; source: Player };

    constructor(eventData: {
        itemStack?: MinecraftServer.ItemStack;
        source: MinecraftServer.Player;
    }) {
        this.#minecraft_data = {
            item: new ItemStack(eventData.itemStack),
            source: new Player(eventData.source),
        };
    }

    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     */
    public getPlayer() {
        try {
            return this.#minecraft_data.source;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * ItemStack involved in this event.
     */
    public getItemStack() {
        try {
            return this.#minecraft_data.item;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
