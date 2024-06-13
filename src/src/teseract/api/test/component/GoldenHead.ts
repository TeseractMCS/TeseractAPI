import Teseract from "TeseractAPI/Teseract";
import { ItemCustomComponent } from "TeseractAPI/custom_component/ItemCustomComponent";
import { ItemComponentConsumeEvent } from "TeseractAPI/custom_component/event/ItemComponentEvents";
import eventListener from "TeseractAPI/event/EventListener";
import PlayerBreakBlockEvent from "TeseractAPI/event/block/PlayerBreakBlockEvent";
import PlayerPlaceBlockEvent from "TeseractAPI/event/block/PlayerPlaceBlockEvent";
import EntityDieEvent from "TeseractAPI/event/entity/EntityDieEvent";
import ItemUseEvent from "TeseractAPI/event/item/ItemUseEvent";
import PlayerDieEvent from "TeseractAPI/event/player/PlayerDieEvent";
import FormManager from "TeseractAPI/form/FormManager";
import PotionEffect from "TeseractAPI/potion/PotionEffect";
import PotionEffects from "TeseractAPI/potion/PotionEffects";
import { ButtonForm, ChoiceForm } from "../form/FormTest";

export default class GoldenHeadComponent extends ItemCustomComponent {
    override onConsume = (arg: ItemComponentConsumeEvent) => {
        const player = arg.getPlayer();

        const headEffects = [
            new PotionEffect(PotionEffects.ABSORPTION, 20 * 120, 1),
            new PotionEffect(PotionEffects.REGENERATION, 20 * 10, 1),
        ];

        player.addPotionEffects(headEffects);
    };
    @eventListener("EntityDieEvent")
    public onDeath(event: EntityDieEvent) {
        Teseract.broadcastMessage(event.getCause())
    }
    @eventListener("PlayerDieEvent")
    public onPlayerDeath(event: PlayerDieEvent) {
        event.getPlayer().sendMessage(event.getCause() + " tatakaiii")
    }
    @eventListener("PlayerBreakBlockEvent")
    public onBreak(event: PlayerBreakBlockEvent) {
        event.getPlayer().sendMessage("Rompiste: " +event.getBlock().getTypeId() + " que estaba en el chunk " + event.getBlock().getChunk().getBaseX())
        event.setCanceled(true)
    }
    @eventListener("PlayerPlaceBlockEvent")
    public onPlace(event: PlayerPlaceBlockEvent) {
        event.getPlayer().sendMessage("Pusiste: " +event.getBlock().getTypeId() + " que estaba en el chunk " + event.getBlock().getChunk().getBaseX())
        event.setCanceled(true)
    }
    @eventListener("ItemUseEvent")
    public onUsed(event: ItemUseEvent) {
        event.getPlayer().showForm(ChoiceForm)
        if (event.getItemStack().getTypeId() != "minecraft:totem_of_undying" ) {
            return;
        }
    }
}
