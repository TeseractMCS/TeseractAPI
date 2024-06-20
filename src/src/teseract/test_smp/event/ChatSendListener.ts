import Teseract from "@teseract/api/Teseract";
import ChatSendEvent from "@teseract/api/event/ChatSend";
import eventListener from "@teseract/api/event/EventListener";
import Events from "@teseract/api/event/Events";

export default class ChatSendListener {
    @eventListener(Events.ChatSendEvent)
    public onChatSend(event: ChatSendEvent) {
        const player = event.getPlayer();

        const rank = player.hasTag("Admin")
            ? "§b§l[Usuario]§r"
            : "§bc§l[Admin]§r";

        const message = `<${rank} ${player.getName()}> ${event.getMessage()}`;

        for (const pingPlayer of Teseract.getPlayers()) {
            const name = pingPlayer.getName().includes(" ")
                ? `"${pingPlayer.getName()}"`
                : pingPlayer.getName();

            const match = event.getMessage().match(new RegExp(`@${name}`));

            if (match == null) {
                continue;
            }

            pingPlayer.playSound("random.orb");
        }

        Teseract.broadcastMessage(message);

        event.setCanceled(true);
    }
}
