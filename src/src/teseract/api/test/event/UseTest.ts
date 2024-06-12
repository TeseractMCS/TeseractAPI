import eventListener from "TeseractAPI/event/EventListener";
import Events from "TeseractAPI/event/Events";
import ItemUseEvent from "TeseractAPI/event/item/ItemUse";
import ItemUseOnEvent from "TeseractAPI/event/item/ItemUseOnEvent";

export default class UseTest {
    @eventListener(Events.ItemUseEvent)
    onUsed(event: ItemUseEvent) {
        const player = event.getPlayer();
        if (event.getItemStack().getTypeId() != "minecraft:stick") {
            return;
        }
        player.sendMessage("Wadejeeel usaste un palo xdxd ahora metetelo por-");
    }

    @eventListener("ItemUseOnEvent")
    async onUsedOn(event: ItemUseOnEvent) {
        const player = event.getPlayer();
        if (event.getItemStack().getTypeId() != "minecraft:iron_hoe") {
            return;
        }
        player.sendMessage("Has usado una azada!! Te voy a quemar.");
        event.setCanceled(true)
        await event.privileges();
        player.setOnFire(20)
    }
}
