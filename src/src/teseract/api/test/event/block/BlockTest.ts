import eventListener from "@teseract/api/event/EventListener";
import PlayerBreakBlockEvent from "@teseract/api/event/block/PlayerBreakBlockEvent";
import PlayerPlaceBlockEvent from "@teseract/api/event/block/PlayerPlaceBlockEvent";
import { BlockMaterial } from "@teseract/api/material/BlockMaterial";

export default class BlockEventsTest {
    
    /**
     * PlayerBreakBlock event test!
     */
    @eventListener("PlayerBreakBlockEvent")
    async onBreak(event: PlayerBreakBlockEvent) {
        const block = event.getBlock();
        const player = event.getPlayer();

        if (block?.getTypeId() != BlockMaterial.DIAMOND_BLOCK) {
            return;
        }

        event.setCanceled(true);

        await event.privileges();

        player.sendMessage("You can't mine this block!");
    }

    /**
     * PlayerPlaceBlock event test!
     */
    @eventListener("PlayerPlaceBlockEvent")
    async onPlace(event: PlayerPlaceBlockEvent) {
        const block = event.getBlock();
        const player = event.getPlayer();
        
        if (event.getPermutationBeingPlaced().getType().id != BlockMaterial.CRAFTING_TABLE) {
            return;
        }

        event.setCanceled(true);

        await event.privileges();

        player.sendMessage("You can't place this block!");
    }
}
