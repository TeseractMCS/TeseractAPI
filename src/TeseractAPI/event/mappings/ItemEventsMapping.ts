import ItemCompleteUseEvent from "../item/ItemCompleteUseEvent";
import ItemReleaseUseEvent from "../item/ItemReleaseUseEvent";
import ItemStartUseEvent from "../item/ItemStartUseEvent";
import ItemStartUseOnEvent from "../item/ItemStartUseOnEvent";
import ItemStopUseEvent from "../item/ItemStopUseEvent";
import ItemStopUseOnEvent from "../item/ItemStopUseOnEvent";
import ItemUseEvent from "../item/ItemUseEvent";
import ItemUseOnEvent from "../item/ItemUseOnEvent";

const ItemEventsMapping = {
    ItemCompleteUseEvent: ItemCompleteUseEvent,
    ItemReleaseUseEvent: ItemReleaseUseEvent,
    ItemStartUseEvent: ItemStartUseEvent,
    ItemStartUseOnEvent: ItemStartUseOnEvent,
    ItemStopUseEvent: ItemStopUseEvent,
    ItemStopUseOnEvent: ItemStopUseOnEvent,
    ItemUseEvent: ItemUseEvent,
    ItemUseOnEvent: ItemUseOnEvent,
};

export default ItemEventsMapping;
