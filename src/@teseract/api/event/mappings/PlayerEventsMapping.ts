import ChatSendEvent from "../ChatSend";
import PlayerDieEvent from "../player/PlayerDieEvent";
import PlayerPostmortalEvent from "../player/PlayerPostmortalEvent";

const PlayerEventsMapping = {
    PlayerDieEvent: PlayerDieEvent,
    PlayerPostmortalEvent: PlayerPostmortalEvent,
    ChatSendEvent: ChatSendEvent
};

export default PlayerEventsMapping;
