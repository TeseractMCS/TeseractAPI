import ItemCompleteUseEvent from "./ItemCompleteUseEvent";
import OptionalItemStack from "./base/OptionalItemStack";

/**
 * @remarks
 * Contains information related to a chargeable item when the
 * player has finished using the item and released the build
 * action.
 */
//@ts-ignore
export default class ItemReleaseUseEvent
    extends ItemCompleteUseEvent
    implements OptionalItemStack {}
