import * as MinecraftServer from "@minecraft/server";
import Teseract from "@teseract/api/Teseract";
import Player from "@teseract/api/entity/Player";

/**
 * Base class for Player-related events.
 */
export default class PlayerEventBase {
    #player: Player;

    constructor(data: { player: MinecraftServer.Player }) {
        this.#player = new Player(data.player);
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
