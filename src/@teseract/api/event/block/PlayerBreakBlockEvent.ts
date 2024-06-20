import * as MinecraftServer from "@minecraft/server";
import CancellableBlockEventBase from "./base/CancellableBlockEventBase";
import Teseract from "@teseract/api/Teseract";
import Player from "@teseract/api/entity/Player";
import Dimension from "@teseract/api/Dimension";
import ItemStack from "@teseract/api/Inventory/ItemStack";

export default class PlayerBreakBlockEvent extends CancellableBlockEventBase {
    #minecraft_data: {
        dimension: Dimension;
        player: Player;
        itemStack: ItemStack;
    };

    constructor(data: MinecraftServer.PlayerBreakBlockBeforeEvent) {
        super(data);
        this.#minecraft_data = {
            dimension: Teseract.getDimension(data.dimension.id),
            player: new Player(data.player),
            itemStack: data.itemStack
                ? new ItemStack(data.itemStack)
                : undefined,
        };
    }

    /**
     * @remarks
     * Retrieves the item stack associated with this event.
     *
     * @returns {ItemStack} The item stack involved in the event.
     * @throws Will log an error if there is an issue retrieving the item stack.
     */
    public getItemStack(): ItemStack | undefined {
        try {
            return this.#minecraft_data.itemStack;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Gets the dimension where the block is being broken.
     * @returns The dimension of the block placement.
     */
    public getDimension(): Dimension {
        try {
            return this.#minecraft_data.dimension;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Gets the player who is breaking the block.
     * @returns The player breaking the block.
     */
    public getPlayer(): Player {
        try {
            return this.#minecraft_data.player;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
