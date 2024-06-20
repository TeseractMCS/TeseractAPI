import * as MinecraftServer from "@minecraft/server";
import Block from "@teseract/api/block/Block";
import Teseract from "@teseract/api/Teseract";
import CancellableEvent from "@teseract/api/event/CancellableEvent";

export default class BlockEventBase {
    #block: Block;

    constructor(data: { block: MinecraftServer.Block }) {
        this.#block = new Block(data.block);
    }

    public getBlock(): Block {
        try {
            return this.#block;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
