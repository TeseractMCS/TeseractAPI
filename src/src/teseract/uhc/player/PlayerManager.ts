import { JsonDatabase } from "@teseract/api/database/ConDatabase";
import Player from "@teseract/api/entity/Player";
import PlayerRole from "./PlayerRole";
import PlayerData from "./PlayerData";

export default class PlayerManager extends JsonDatabase {
    getPlayer(player: string): PlayerData;
    getPlayer(player: Player): PlayerData;

    public getPlayer(player: string | Player) {
        if (typeof player === "string") {
            return this.get(player);
        }
        return this.get(player.getUUID());
    }

    public deletePlayer() {}

    public setupPlayer(player: Player) {
        this.set(player.getUUID(), {
            role: PlayerRole.Spectator,
        });
    }

    public setPlayerProperty() {}
}
