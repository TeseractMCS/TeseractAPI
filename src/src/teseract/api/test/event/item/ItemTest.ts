import Teseract from "TeseractAPI/Teseract";
import eventListener from "TeseractAPI/event/EventListener";
import ItemCompleteUseEvent from "TeseractAPI/event/item/ItemCompleteUseEvent";
import ItemReleaseUseEvent from "TeseractAPI/event/item/ItemReleaseUseEvent";
import ItemStartUseEvent from "TeseractAPI/event/item/ItemStartUseEvent";
import ItemStartUseOnEvent from "TeseractAPI/event/item/ItemStartUseOnEvent";
import ItemStopUseEvent from "TeseractAPI/event/item/ItemStopUseEvent";
import ItemStopUseOnEvent from "TeseractAPI/event/item/ItemStopUseOnEvent";
import ItemUseEvent from "TeseractAPI/event/item/ItemUseEvent";
import ItemUseOnEvent from "TeseractAPI/event/item/ItemUseOnEvent";

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
