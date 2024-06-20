import {
    BlockComponentEntityFallOnEvent as MinecraftBlockComponentEntityFallOnEvent,
    BlockComponentOnPlaceEvent as MinecraftBlockComponentOnPlaceEvent,
    BlockComponentPlayerDestroyEvent as MinecraftBlockComponentPlayerDestroyEvent,
    BlockComponentPlayerInteractEvent as MinecraftBlockComponentPlayerInteractEvent,
    BlockComponentPlayerPlaceBeforeEvent as MinecraftBlockComponentPlayerPlaceBeforeEvent,
    BlockComponentRandomTickEvent as MinecraftBlockComponentRandomTickEvent,
    BlockComponentStepOffEvent as MinecraftBlockComponentStepOffEvent,
    BlockComponentStepOnEvent as MinecraftBlockComponentStepOnEvent,
    BlockComponentTickEvent as MinecraftBlockComponentTickEvent,
    ItemComponentUseEvent as MinecraftItemComponentUseEvent,
    BlockCustomComponent as MinecraftBlockCustomComponent,
    ItemCustomComponent as MinecraftItemCustomComponent,
    system,
} from "@minecraft/server";

export enum CustomComponentType {
    Block = "block",
    Item = "item",
}
export type CustomComponentTypeMap = keyof typeof CustomComponentType;

export type CustomComponents = {
    block: MinecraftBlockCustomComponent;
    item: MinecraftItemCustomComponent;
};

export interface RegisteredComponent {
    componentId: string;
    componentType: CustomComponentType;
    callback: CustomComponents[RegisteredComponent["componentType"]];
}

class CustomComponent {
    /**
     * Custom Component type
     */
    readonly type: CustomComponentType;
}
