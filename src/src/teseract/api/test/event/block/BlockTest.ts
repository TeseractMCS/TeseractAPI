import eventListener from "TeseractAPI/event/EventListener";
import PlayerBreakBlockEvent from "TeseractAPI/event/block/PlayerBreakBlockEvent";
import PlayerPlaceBlockEvent from "TeseractAPI/event/block/PlayerPlaceBlockEvent";
import { BlockMaterial } from "TeseractAPI/material/BlockMaterial";

export default class BlockEventsTest {
    
    /**
     * PlayerBreakBlock event test!
     */
    @eventListener("PlayerBreakBlockEvent")
    async onBreak(event: PlayerBreakBlockEvent) {
        const block = event.getBlock();
        const player = event.getPlayer();

        if (block.getTypeId() != BlockMaterial.DIAMOND_BLOCK) {
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

        if (block.getTypeId() != BlockMaterial.CRAFTING_TABLE) {
            return;
        }

        event.setCanceled(true);

        await event.privileges();

        player.sendMessage("You can't place this block!");
    }
}
