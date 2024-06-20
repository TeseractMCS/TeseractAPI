/**
 * @experimental
 */
import { FormCancelationReason } from "@minecraft/server-ui";
import Player from "@teseract/api/entity/Player";

export default class Response {
    #player: Player;
    #canceled: boolean;
    #cancelationReason: FormCancelationReason;

    constructor(data: {
        player: Player;
        canceled: boolean;
        cancelationReason: FormCancelationReason;
    }) {}

    getPlayer() {
        return this.#player;
    }
    isCanceled() {
        return this.#canceled;
    }
    getCancelatinReason() {
        return this.#cancelationReason;
    }
}
