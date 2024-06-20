import Player from "@teseract/api/entity/Player";
import PlayerManager from "./PlayerManager";
import UHC from "../UHC";

export default class UHCPlayer extends Player {
    #player: Player

    constructor(player: Player) {
        super(player.getNativeHandle())
        this.#player = player;
    }

    public getRole() {
        return UHC.playerManager.get(this.#player.getUUID()).role
    }
}