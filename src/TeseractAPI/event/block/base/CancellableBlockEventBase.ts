import * as MinecraftServer from "@minecraft/server";
import Block from "TeseractAPI/block/Block";
import Teseract from "TeseractAPI/Teseract";
import CancellableEvent from "TeseractAPI/event/CancellableEvent";
import BlockEventBase from "./BlockEventBase";

export default class CancellableBlockEventBase extends BlockEventBase implements CancellableEvent {
    #isCanceled = false;

    constructor(data: { block: MinecraftServer.Block }) {
        super(data)
    }

    public async privileges(): Promise<void> {
        try {
            return new Promise(async (resolve) => {
                await null;
                resolve();
            });
        } catch (error) {
            Teseract.log(error);
        }
    }

    public setCanceled(canceled: boolean) {
        try {
            this.#isCanceled = canceled;
        } catch (error) {
            Teseract.log(error);
        }
    }

    public isCanceled(): boolean {
        try {
            return this.#isCanceled;
        } catch (error) {
            Teseract.log(error);
        }
    }
}
