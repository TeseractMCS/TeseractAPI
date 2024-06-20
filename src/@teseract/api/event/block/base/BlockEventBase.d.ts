import * as MinecraftServer from "@minecraft/server";
import Block from "TeseractAPI/block/Block";
export default class BlockEventBase {
    #private;
    constructor(data: {
        block: MinecraftServer.Block;
    });
    getBlock(): Block;
}
