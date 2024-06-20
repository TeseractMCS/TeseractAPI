import * as MinecraftServer from "@minecraft/server";
import ItemEventBase from "./base/ItemEventBase";
import Teseract from "@teseract/api/Teseract";

/**
 * @remarks
 * Contains information related to a chargeable item completing being charged.
 */
export default class ItemCompleteUseEvent extends ItemEventBase {
    #useDuration: number;

    constructor(data: MinecraftServer.ItemCompleteUseAfterEvent) {
        super(data);
        this.#useDuration = data.useDuration;
    }

    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    public getUseDuration(): number {
        try {
            return this.#useDuration;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
