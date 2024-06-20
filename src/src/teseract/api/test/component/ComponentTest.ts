import Teseract from "@teseract/api/Teseract";
import Player from "@teseract/api/entity/Player";
import { ItemCustomComponent } from "@teseract/api/custom_component/ItemCustomComponent";
import {
    ItemComponentConsumeEvent,
    ItemComponentHitEntityEvent,
    ItemComponentUseEvent,
} from "@teseract/api/custom_component/event/ItemComponentEvents";

export default class MyItemComponent extends ItemCustomComponent {
    override onConsume = (event: ItemComponentConsumeEvent) => {
        console.warn("consume")
        if (!event.getEntity().isPlayer()) {
            return;
        }
        const player = event.getEntity() as Player;
        console.warn(player.getTypeId())
        player.sendMessage(`You consumed ${event.getItemStack().getTypeId()}`);
    };

    override onUse = (event: ItemComponentUseEvent) => {
        console.warn("use")
        const player = event.getPlayer();

        player.sendMessage(`You used ${event.getItemStack().getTypeId()}`);
    };

    override onHitEntity = (event: ItemComponentHitEntityEvent) => {
        console.warn("hit")
        if (!event.getAttackingEntity().isPlayer()) {
            return;
        }

        const player = event.getAttackingEntity() as Player;

        player.sendMessage(
            `You hit ${event.getHitEntity().getTypeId()} with ${event
                .getItemStack()
                .getTypeId()}`,
        );
    };
}
