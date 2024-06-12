import CustomComponentBase from "./CustomComponentBase";
import { CustomComponentType } from "./CustomComponentType";
import {
    BlockComponentEntityFallOnEvent,
    BlockComponentOnPlaceEvent,
    BlockComponentPlayerDestroyEvent,
    BlockComponentPlayerInteractEvent,
    BlockComponentPlayerPlaceBeforeEvent,
    BlockComponentRandomTickEvent,
    BlockComponentStepOffEvent,
    BlockComponentStepOnEvent,
    BlockComponentTickEvent,
} from "./event/BlockComponentEvents";

/**
 * Class representing a custom item component, which can be specified in custom items via JSON using ``minecraft:custom_components``
 */
export class BlockCustomComponent extends CustomComponentBase {
    /**
     * Custom Component type, this property is read-only and should always be {@link CustomComponentType.Item}
     */
    override readonly type: CustomComponentType.Block;
    /**
     * @remarks
     * This function will be called before a player places the
     * block.
     *
     */
    beforeOnPlayerPlace?: (arg: BlockComponentPlayerPlaceBeforeEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity falls onto the
     * block that this custom component is bound to.
     *
     */
    onEntityFallOn?: (arg: BlockComponentEntityFallOnEvent) => void;
    /**
     * @remarks
     * This function will be called when the block that this custom
     * component is bound to is placed.
     *
     */
    onPlace?: (arg: BlockComponentOnPlaceEvent) => void;
    /**
     * @remarks
     * This function will be called when a player destroys a
     * specific block.
     *
     */
    onPlayerDestroy?: (arg: BlockComponentPlayerDestroyEvent) => void;
    /**
     * @remarks
     * This function will be called when a player sucessfully
     * interacts with the block that this custom component is bound
     * to.
     *
     */
    onPlayerInteract?: (arg: BlockComponentPlayerInteractEvent) => void;
    /**
     * @remarks
     * This function will be called when a block randomly ticks.
     *
     */
    onRandomTick?: (arg: BlockComponentRandomTickEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity steps off the
     * block that this custom component is bound to.
     *
     */
    onStepOff?: (arg: BlockComponentStepOffEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity steps onto the
     * block that this custom component is bound to.
     *
     */
    onStepOn?: (arg: BlockComponentStepOnEvent) => void;
    /**
     * @remarks
     * This function will be called when a block ticks.
     *
     */
    onTick?: (arg: BlockComponentTickEvent) => void;
}
