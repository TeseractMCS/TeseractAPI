import { ItemCustomComponent } from "TeseractAPI/custom_component/ItemCustomComponent";
import ItemComponentUseEvent from "TeseractAPI/custom_component/event/ItemComponentEvents";
import { MinecraftSounds } from "TeseractAPI/sounds/MinecraftSound";

export default class OnUse extends ItemCustomComponent {
    override onUse = function (arg: ItemComponentUseEvent) {
        const player = arg.getPlayer();

        if (arg.getItemStack().getTypeId() != "cib:golden_head") {
            return;
        }
        
        player.playSound(MinecraftSounds.MOB_WITHER_DEATH);
        player.sendMessage("Si, valió la pena.");
    };
}
