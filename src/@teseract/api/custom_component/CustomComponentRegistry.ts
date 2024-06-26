import Teseract from "@teseract/api/Teseract";
import { ItemCustomComponent } from "./ItemCustomComponent";
import * as MinecraftServer from "@minecraft/server";
import {
    ItemComponentUseEvent,
    ItemComponentConsumeEvent,
    ItemComponentBeforeDurabilityDamageEvent,
    ItemComponentCompleteUseEvent,
    ItemComponentHitEntityEvent,
} from "./event/ItemComponentEvents";
import { BlockCustomComponent } from "./BlockCustomComponent";
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
import EventManager from "@teseract/api/event/EventManager";

export default class CustomComponentRegistry {
    #registry = {
        Item: new Map<string, ItemCustomComponent>(),
        Block: new Map<string, BlockCustomComponent>(),
    };

    #itemComponentRegistry;
    #blockComponentRegistry;

    constructor(
        itemRegistry: MinecraftServer.ItemComponentRegistry,
        blockRegistry: MinecraftServer.BlockComponentRegistry,
    ) {
        this.#itemComponentRegistry = itemRegistry;
        this.#blockComponentRegistry = blockRegistry;
    }

    public getRegistry() {
        return this.#registry;
    }

    public registerItemComponent(
        identifier: string,
        customComponent: ItemCustomComponent,
    ) {
        try {
            this.#registry.Item.set(identifier, customComponent);
            this.#itemComponentRegistry.registerCustomComponent(identifier, {
                onUse(arg) {
                    console.warn("Custom Component Called");
                    if (customComponent.onUse) {
                        customComponent.onUse(new ItemComponentUseEvent(arg));
                    }
                },
                onConsume(arg) {
                    if (customComponent.onConsume) {
                        console.warn("Custom Component Called");
                        customComponent.onConsume(
                            new ItemComponentConsumeEvent(arg),
                        );
                    }
                },
                onBeforeDurabilityDamage(arg) {
                    if (customComponent.onDurabilityDamage) {
                        customComponent.onDurabilityDamage(
                            new ItemComponentBeforeDurabilityDamageEvent(arg),
                        );
                    }
                },
                onCompleteUse(arg) {
                    console.warn("Custom Component Called");
                    if (customComponent.onCompleteUse) {
                        customComponent.onCompleteUse(
                            new ItemComponentCompleteUseEvent(arg),
                        );
                    }
                },
                onHitEntity(arg) {
                    console.warn("Custom Component Called");
                    if (customComponent.onHitEntity) {
                        customComponent.onHitEntity(
                            new ItemComponentHitEntityEvent(arg),
                        );
                    }
                },
            });
            console.warn("Component registered");
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public registerBlockComponent(
        identifier: string,
        customComponent: BlockCustomComponent,
    ) {
        try {
            this.#registry.Block.set(identifier, customComponent);
            this.#blockComponentRegistry.registerCustomComponent(identifier, {
                beforeOnPlayerPlace(arg) {
                    if (customComponent.beforeOnPlayerPlace) {
                        customComponent.beforeOnPlayerPlace(
                            new BlockComponentPlayerPlaceBeforeEvent(arg),
                        );
                    }
                },
                onEntityFallOn(arg) {
                    if (customComponent.onEntityFallOn) {
                        customComponent.onEntityFallOn(
                            new BlockComponentEntityFallOnEvent(arg),
                        );
                    }
                },
                onPlace(arg) {
                    if (customComponent.onPlace) {
                        customComponent.onPlace(
                            new BlockComponentOnPlaceEvent(arg),
                        );
                    }
                },
                onPlayerDestroy(arg) {
                    if (customComponent.onPlayerDestroy) {
                        customComponent.onPlayerDestroy(
                            new BlockComponentPlayerDestroyEvent(arg),
                        );
                    }
                },
                onPlayerInteract(arg) {
                    if (customComponent.onPlayerInteract) {
                        customComponent.onPlayerInteract(
                            new BlockComponentPlayerInteractEvent(arg),
                        );
                    }
                },
                onRandomTick(arg) {
                    if (customComponent.onRandomTick) {
                        customComponent.onRandomTick(
                            new BlockComponentRandomTickEvent(arg),
                        );
                    }
                },
                onStepOff(arg) {
                    if (customComponent.onStepOff) {
                        customComponent.onStepOff(
                            new BlockComponentStepOffEvent(arg),
                        );
                    }
                },
                onStepOn(arg) {
                    if (customComponent.onStepOn) {
                        customComponent.onStepOn(
                            new BlockComponentStepOnEvent(arg),
                        );
                    }
                },
                onTick(arg) {
                    if (customComponent.onTick) {
                        customComponent.onTick(
                            new BlockComponentTickEvent(arg),
                        );
                    }
                },
            });
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
