import Player from "@teseract/api/entity/Player";
import UHCPlayer from "./Player";
import UHC from "../UHC";
import PlayerSetupForm from "./form/PlayerSetupForm";
import PlayerRole from "./PlayerRole";
import GameMode from "@teseract/api/GameMode";
import { ButtonForm } from "src/teseract/api/test/form/FormTest";
import { ActionForm, FormBody, FormButton, FormTitle, OnCanceled } from "@teseract/api/ui/Form";
function color(): any {
    // this is the decorator factory, it sets up
    // the returned decorator function
    return function (target: any) {
      // this is the decorator
      // do something with 'target' and 'value'...
    };
  }
import "reflect-metadata"

@ActionForm
@FormTitle("Teseract UHC")
@FormBody("Selecciona tu rol en esta partida de UHC")
export default class PlayerSetupListener {
    constructor(public pepe: string) {}
    @OnCanceled
    onCanceled(player: Player) {
        player.showForm(PlayerSetupListener);
    }

    @FormButton("Jugador")
    playerRole(player: Player) {
        const data = UHC.playerManager.getPlayer(player);
        data.role = PlayerRole.Player;
        player.setGameMode(GameMode.survival);
    }

    @FormButton("Espectador")
    spectatorRole(player: Player) {
        const data = UHC.playerManager.getPlayer(player);
        data.role = PlayerRole.Spectator;
        player.setGameMode(GameMode.spectator);
    }

    public static onReloaded(players: UHCPlayer[]) {
        for (const player of players) {
            if (UHC.playerManager.has(player.getUUID())) {
                continue;
            }

            player.showForm(this);
            player.setGameMode(GameMode.spectator);
            UHC.playerManager.setupPlayer(player);
        }
    }
}
