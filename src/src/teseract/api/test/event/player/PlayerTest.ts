import Teseract from "@teseract/api/Teseract";
import ChatSendEvent from "@teseract/api/event/ChatSend";
import eventListener from "@teseract/api/event/EventListener";
import PlayerPostmortalEvent from "@teseract/api/event/player/PlayerPostmortalEvent";

export default class PlayerEventsTest {
    @eventListener("PlayerPostmortalEvent")
    onTotem(event: PlayerPostmortalEvent) {
        const player = event.getPlayer();
        const damager = event.getDamager();
        event.setCanceled(true);
        if (damager.isCachedEntity()) {
            return player.sendMessage(
                "The damager was a cached entity: " + damager.getDisplayName(),
            );
        }
        player.sendMessage(
            "The damager was not a cached entity: " + damager.getDisplayName(),
        );
    }

    @eventListener("ChatSendEvent")
    onChat(event: ChatSendEvent) {
        Teseract.broadcastMessage(
            `<[USER] ${event.getPlayer().getName()}> ${event.getMessage()}`,
        );

        event.setCanceled(true);
    }
}
