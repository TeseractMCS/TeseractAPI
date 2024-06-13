import Teseract from "TeseractAPI/Teseract";
import { ItemCustomComponent } from "TeseractAPI/custom_component/ItemCustomComponent";
import { ItemComponentConsumeEvent, ItemComponentUseEvent } from "TeseractAPI/custom_component/event/ItemComponentEvents";
import PotionEffect from "TeseractAPI/potion/PotionEffect";
import PotionEffects from "TeseractAPI/potion/PotionEffects";
export default class GoldenHeadComponent extends ItemCustomComponent {
    override onConsume = (arg: ItemComponentConsumeEvent) => {
        const player = arg.getPlayer();

        const headEffects = [
            new PotionEffect(PotionEffects.ABSORPTION, 20 * 120, 1),
            new PotionEffect(PotionEffects.REGENERATION, 20 * 10, 1),
        ];

        player.addPotionEffects(headEffects);
    };
    override onUse = (arg: ItemComponentUseEvent) => {
        const player = arg.getPlayer();
        const itemStack = arg.getItemStack();

        player.sendMessage("Used: " + itemStack.getTypeId());
    };
}
