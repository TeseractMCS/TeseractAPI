import * as MinecraftServer from "@minecraft/server";
import ItemStack from "@teseract/api/Inventory/ItemStack";
import Teseract from "@teseract/api/Teseract";
import Player from "@teseract/api/entity/Player";

export default class ItemEventBase {
    #minecraft_data: { item: ItemStack; source: Player };

    constructor(eventData: {
        itemStack?: MinecraftServer.ItemStack;
        source: MinecraftServer.Player;
    }) {
        this.#minecraft_data = {
            item: eventData.itemStack ? new ItemStack(eventData.itemStack) : undefined,
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
    public getItemStack(): ItemStack | undefined {
        try {
            return this.#minecraft_data.item;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
