import * as MinecraftServer from "@minecraft/server";
import CancellableItemEvent from "./CancellableItemEvent";
import Block from "TeseractAPI/block/Block";
import Location from "TeseractAPI/Location";
import Teseract from "TeseractAPI/Teseract";
import ItemEventBase from "./ItemEventBase";

/**
 * @remarks
 * Contains information related to an item being used on a block.
 */
export default class ItemUseOnCancellableBase extends CancellableItemEvent {
    #block: Block;
    #blockFace: MinecraftServer.Direction;

    constructor(data: MinecraftServer.ItemUseOnBeforeEvent) {
        super(data);
        this.#block = new Block(data.block);
        this.#blockFace = data.blockFace;
    }

    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    public getBlock(): Block {
        try {
            return this.#block;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * The face of the block that an item is being used on.
     *
     */
    public getBlockFace(): MinecraftServer.Direction {
        try {
            return this.#blockFace;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
