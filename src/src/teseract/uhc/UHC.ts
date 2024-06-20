import CustomComponentRegistry from "@teseract/api/custom_component/CustomComponentRegistry";
import TeseractPlugin from "@teseract/api/plugin/TeseractPlugin";
import GoldenHead from "./item/component/GoldenHead";
import UHCPlayer from "./player/Player";
import Teseract from "@teseract/api/Teseract";
import PlayerManager from "./player/PlayerManager";
import PlayerData from "./player/PlayerData";
import PlayerSetupListener from "./player/PlayerSetupListener";

export default class UHC extends TeseractPlugin {
    public static identifier = "Teseract UHC";
    public static displayName = "§c§lTeseract UHC§r";
    public static playerManager = new PlayerManager("uhc:players");

    public override onEnabled(
        componentRegistry: CustomComponentRegistry,
    ): void {
        try {
            componentRegistry.registerItemComponent(
                "uhc:golden_head",
                new GoldenHead(),
            );

            // const PlayerSetup = new PlayerSetupListener();
            PlayerSetupListener.onReloaded(this.getPlayers());

            console.log(`${UHC.identifier} loaded in `);
        } catch (error) {
            console.log(`Error while enabling ${UHC.identifier}:`);
            console.log(error, error.stack);
        }
    }

    public override onLoaded(): void {
        console.log(`${UHC.identifier} loaded`);
    }

    public getPlayers(): UHCPlayer[] {
        return Teseract.getPlayers().map((player) => new UHCPlayer(player));
    }
}
