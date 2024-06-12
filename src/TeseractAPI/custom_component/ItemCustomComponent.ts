import { ItemCustomComponent as MinecraftItemCustomComponent } from "@minecraft/server";
import { CustomComponentType } from "./CustomComponentType";
import CustomComponentBase from "./CustomComponentBase";
import ItemComponentUseEvent from "./event/ItemComponentEvents";

/**
 * Class representing a custom item component, which can be specified in custom items via JSON using ``minecraft:custom_components``
 */
export class ItemCustomComponent extends CustomComponentBase {
    /**
     * Custom Component type, this property is read-only and should always be {@link CustomComponentType.Item}
     */
    override readonly type: CustomComponentType.Item;
    onUse?: (arg: ItemComponentUseEvent) => void;
}
