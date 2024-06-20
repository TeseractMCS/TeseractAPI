import { ItemCustomComponent } from "@teseract/api/custom_component/ItemCustomComponent";
import {
    ItemComponentConsumeEvent,
    ItemComponentHitEntityEvent,
    ItemComponentUseEvent,
} from "@teseract/api/custom_component/event/ItemComponentEvents";
import Player from "@teseract/api/entity/Player";
import eventListener from "@teseract/api/event/EventListener";
import Events from "@teseract/api/event/Events";
import ItemUseEvent from "@teseract/api/event/item/ItemUseEvent";
import ItemUseOnEvent from "@teseract/api/event/item/ItemUseOnEvent";

export default class UseTest extends ItemCustomComponent {
    override onConsume = (event: ItemComponentConsumeEvent) => {
        if (!event.getEntity().isPlayer()) {
            return;
        }
        const player = event.getEntity() as Player;

        player.sendMessage(`You consumed ${event.getItemStack().getTypeId()}`);
    };

    override onUse = (event: ItemComponentUseEvent) => {
        const player = event.getPlayer();

        if (event.getItemStack().getTypeId() != "minecraft:stick") {
            return;
        }

        player.sendMessage(`You consumed ${event.getItemStack().getTypeId()}`);
    };

    override onHitEntity = (event: ItemComponentHitEntityEvent) => {
        if (!event.getAttackingEntity().isPlayer()) {
            return;
        }

        const player = event.getAttackingEntity() as Player;

        player.sendMessage(`You hit ${event.getHitEntity().getTypeId()} with ${event.getItemStack().getTypeId()}`)
    };
}
