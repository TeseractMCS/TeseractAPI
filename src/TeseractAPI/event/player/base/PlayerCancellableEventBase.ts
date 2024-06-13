import * as MinecraftServer from "@minecraft/server";
import Teseract from "TeseractAPI/Teseract";
import Player from "TeseractAPI/entity/Player";

/**
 * Base class for Player-related events.
 */
export default class PlayerCancellableEventBase {
    #player: Player;
    #isCanceled: boolean;

    constructor(data: { player: MinecraftServer.Player }) {
        this.#player = new Player(data.player);
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
    
    /**
     * @remarks
     * Retrieves the Player associated with this event.
     * @returns The Player involved in the event, or undefined if an error occurs.
     */
    public getPlayer(): Player {
        try {
            return this.#player;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
