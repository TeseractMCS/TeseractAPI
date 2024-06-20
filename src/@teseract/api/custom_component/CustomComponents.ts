import {
    BlockCustomComponent as MinecraftBlockCustomComponent,
    ItemCustomComponent as MinecraftItemCustomComponent,
} from "@minecraft/server";

export type CustomComponents = {
    block: MinecraftBlockCustomComponent;
    item: MinecraftItemCustomComponent;
};
