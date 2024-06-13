import PlayerDieEvent from "../player/PlayerDieEvent";
import PlayerPostmortalEvent from "../player/PlayerPostmortalEvent";

const PlayerEventsMapping = {
    PlayerDieEvent: PlayerDieEvent,
    PlayerPostmortalEvent: PlayerPostmortalEvent
};

export default PlayerEventsMapping;
