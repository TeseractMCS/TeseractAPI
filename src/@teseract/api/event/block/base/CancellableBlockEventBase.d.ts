import * as MinecraftServer from "@minecraft/server";
import CancellableEvent from "TeseractAPI/event/CancellableEvent";
import BlockEventBase from "./BlockEventBase";
export default class CancellableBlockEventBase extends BlockEventBase implements CancellableEvent {
    #private;
    constructor(data: {
        block: MinecraftServer.Block;
    });
    privileges(): Promise<void>;
    setCanceled(canceled: boolean): void;
    isCanceled(): boolean;
}
