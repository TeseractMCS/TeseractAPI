import Teseract from "@teseract/api/Teseract";
import eventListener from "@teseract/api/event/EventListener";
import ItemCompleteUseEvent from "@teseract/api/event/item/ItemCompleteUseEvent";
import ItemReleaseUseEvent from "@teseract/api/event/item/ItemReleaseUseEvent";
import ItemStartUseEvent from "@teseract/api/event/item/ItemStartUseEvent";
import ItemStartUseOnEvent from "@teseract/api/event/item/ItemStartUseOnEvent";
import ItemStopUseEvent from "@teseract/api/event/item/ItemStopUseEvent";
import ItemStopUseOnEvent from "@teseract/api/event/item/ItemStopUseOnEvent";
import ItemUseEvent from "@teseract/api/event/item/ItemUseEvent";
import ItemUseOnEvent from "@teseract/api/event/item/ItemUseOnEvent";

export default class ItemEventsTest {
    @eventListener("ItemCompleteUseEvent")
    completeUse(event: ItemCompleteUseEvent) {
        try {
            Teseract.broadcastMessage("ItemCompleteUseEvent:")
            Teseract.broadcastMessage(
                `Use duration: ${event.getUseDuration()}\nPlayer: ${event
                    .getPlayer()
                    .getName()}\nItem: ${event.getItemStack().getTypeId()}\n`
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    @eventListener("ItemReleaseUseEvent")
    releaseUse(event: ItemReleaseUseEvent) {
        try {
            Teseract.broadcastMessage("ItemReleaseUseEvent:")
            Teseract.broadcastMessage(
                `Use duration: ${event.getUseDuration()}\nPlayer: ${event
                    .getPlayer()
                    .getName()}\nItem: ${event.getItemStack().getTypeId()}\n`
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    @eventListener("ItemStartUseEvent")
    startUse(event: ItemStartUseEvent) {
        try {
            Teseract.broadcastMessage("ItemStartUseEvent:")
            Teseract.broadcastMessage(
                `Use duration: ${event.getUseDuration()}\nPlayer: ${event
                    .getPlayer()
                    .getName()}\nItem: ${event.getItemStack().getTypeId()}\n`
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    @eventListener("ItemStartUseOnEvent")
    startUseOn(event: ItemStartUseOnEvent) {
        try {
            Teseract.broadcastMessage("ItemStartUseOnEvent:")
            Teseract.broadcastMessage(
                `Player: ${event.getPlayer().getName()}\nItem: ${event
                    .getItemStack()
                    .getTypeId()}\nBlockface: ${event.getBlockFace()}\nBlock: ${
                    event.getBlock().getTypeId()
                }\n`
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    @eventListener("ItemStopUseEvent")
    stopUse(event: ItemStopUseEvent) {
        try {
            Teseract.broadcastMessage("ItemStopUseEvent:");
            Teseract.broadcastMessage(
                `Use duration: ${event.getUseDuration()}\nPlayer: ${event
                    .getPlayer()
                    .getName()}\nItem: ${event.getItemStack().getTypeId()}\n`
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    @eventListener("ItemStopUseOnEvent")
    stopUseOn(event: ItemStopUseOnEvent) {
        try {
            Teseract.broadcastMessage("ItemStopUseOnEvent:")
            Teseract.broadcastMessage(
                `Use duration: ${event.getUseDuration()}\nPlayer: ${event
                    .getPlayer()
                    .getName()}\nItem: ${event.getItemStack().getTypeId()}\n`
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    @eventListener("ItemUseEvent")
    use(event: ItemUseEvent) {
        try {
            Teseract.broadcastMessage("ItemUseEvent:")
            Teseract.broadcastMessage(
                `Player: ${event.getPlayer().getName()}\nItem: ${event
                    .getItemStack()
                    .getTypeId()}\n`
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    @eventListener("ItemUseOnEvent")
    useOn(event: ItemUseOnEvent) {
        try {
            Teseract.broadcastMessage("ItemUseOnEvent:")
            Teseract.broadcastMessage(
                `Player: ${event.getPlayer().getName()}\nItem: ${event
                    .getItemStack()
                    .getTypeId()}\nBlockface: ${event.getBlockFace()}\nBlock: ${
                    event.getBlock().getTypeId()
                }\n`
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
