import * as MinecraftServer from "@minecraft/server";
import Block from "TeseractAPI/block/Block";
import Teseract from "TeseractAPI/Teseract";
import CancellableEvent from "TeseractAPI/event/CancellableEvent";

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
