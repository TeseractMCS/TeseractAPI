import { ItemCustomComponent } from "@teseract/api/custom_component/ItemCustomComponent";
import { ItemComponentConsumeEvent } from "@teseract/api/custom_component/event/ItemComponentEvents";
import PotionEffect from "@teseract/api/potion/PotionEffect";
import PotionEffects from "@teseract/api/potion/PotionEffects";

export default class GoldenHead extends ItemCustomComponent {
    override onConsume?: (arg: ItemComponentConsumeEvent) => void = function (
        arg,
    ) {
        if (arg.getItemStack()?.getTypeId() != "uhc:golden_head") {
            return;
        }

        const player = arg.getEntity();
        const headEffects = [
            new PotionEffect(PotionEffects.ABSORPTION, 20 * 120, 1),
            new PotionEffect(PotionEffects.REGENERATION, 20 * 10, 1),
        ];
        
        player.addPotionEffects(headEffects);
    };
}
