import eventListener from "TeseractAPI/event/EventListener";
import PlayerPostmortalEvent from "TeseractAPI/event/player/PlayerPostmortalEvent";

export default class PlayerEventsTest {
    @eventListener("PlayerPostmortalEvent")
    onTotem(event: PlayerPostmortalEvent) {
        const player = event.getPlayer();
        const damager = event.getDamager();
        event.setCanceled(true)
        if (damager.isCachedEntity()) {
            return player.sendMessage(
                "The damager was a cached entity: " + damager.getDisplayName(),
            );
        }
        player.sendMessage(
            "The damager was not a cached entity: " + damager.getDisplayName(),
        );
    }
}
