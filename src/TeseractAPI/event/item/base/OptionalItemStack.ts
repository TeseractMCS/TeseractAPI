import { ItemStack } from "@minecraft/server";

export default interface OptionalItemStack {
    getItemStack(): ItemStack | undefined;
}
