import ItemStack from "TeseractAPI/Inventory/ItemStack";
import ItemCompleteUseEvent from "./ItemCompleteUseEvent";
import OptionalItemStack from "./base/OptionalItemStack";

/**
 * @remarks
 * This event fires when a player releases the Use Item / Place
 * Block button after successfully using an item. Note: This
 * event cannot be used with Hoe or Axe items.
 *
 */
//@ts-ignore
export default class ItemStopUseOnEvent
    extends ItemCompleteUseEvent
    implements OptionalItemStack {}
