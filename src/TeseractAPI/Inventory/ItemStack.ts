import * as MinecraftServer from "@minecraft/server";

import Teseract from "TeseractAPI/Teseract";
import ItemMaterial from "TeseractAPI/material/ItemMaterial";
export default class ItemStack {
    #minecraft_itemstack: MinecraftServer.ItemStack;
    constructor(
        itemType: ItemMaterial | MinecraftServer.ItemStack,
        amount?: number
    ) {
        if (itemType instanceof MinecraftServer.ItemStack) {
            this.#minecraft_itemstack = itemType;
        } else {
            this.#minecraft_itemstack = new MinecraftServer.ItemStack(
                itemType,
                amount ?? 1
            );
        }
    }
    public getAmount(): number {
        try {
            return this.#minecraft_itemstack.amount;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setAmount(newAmount: number): void {
        try {
            this.#minecraft_itemstack.amount = newAmount;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isStackable(): boolean {
        try {
            return this.#minecraft_itemstack.isStackable;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public keepsOnDeath(): boolean {
        try {
            return this.#minecraft_itemstack.keepOnDeath;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setKeepOnDeath(keepsOnDeath: boolean): boolean {
        try {
            return (this.#minecraft_itemstack.keepOnDeath = keepsOnDeath);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getLockMode(): MinecraftServer.ItemLockMode {
        try {
            const mcLockMode: MinecraftServer.ItemLockMode =
                this.#minecraft_itemstack.lockMode.toUpperCase() as unknown as MinecraftServer.ItemLockMode;
            return mcLockMode;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setLockMode(
        newLockMode: MinecraftServer.ItemLockMode
    ): MinecraftServer.ItemLockMode {
        try {
            return (this.#minecraft_itemstack.lockMode =
                newLockMode as unknown as MinecraftServer.ItemLockMode);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getMaxAmount(): number {
        try {
            return this.#minecraft_itemstack.maxAmount;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getDisplayName(): string | undefined {
        try {
            return this.#minecraft_itemstack.nameTag;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setDisplayName(newDisplayName: string): string {
        try {
            return (this.#minecraft_itemstack.nameTag = newDisplayName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getTypeId(): ItemMaterial {
        try {
            return this.#minecraft_itemstack.typeId as ItemMaterial;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public cloneItemStack(): ItemStack {
        try {
            const clonedItemStack = new ItemStack(this.#minecraft_itemstack);
            return clonedItemStack;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public cloneNativeItemStack(): MinecraftServer.ItemStack {
        try {
            return this.#minecraft_itemstack.clone();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getDestructibleBlocks(): string[] {
        try {
            return this.#minecraft_itemstack.getCanDestroy();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getPlaceableBlocks(): string[] {
        try {
            return this.#minecraft_itemstack.getCanPlaceOn();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setDestructibleBlocks(
        destructibleBlocks?: string[] | undefined
    ): void {
        try {
            return this.#minecraft_itemstack.setCanDestroy(destructibleBlocks);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setPlaceableBlocks(placeableBlocks?: string[] | undefined): void {
        try {
            return this.#minecraft_itemstack.setCanDestroy(placeableBlocks);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getComponent<T extends keyof MinecraftServer.ItemComponentTypeMap>(
        componentId: T
    ): MinecraftServer.ItemComponentTypeMap[T] | undefined {
        try {
            return this.#minecraft_itemstack.getComponent(componentId);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getComponents(): MinecraftServer.ItemComponent[] {
        try {
            return this.#minecraft_itemstack.getComponents();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getLore(): string[] {
        try {
            return this.#minecraft_itemstack.getLore();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setLore(loreList?: string[] | undefined): void {
        try {
            return this.#minecraft_itemstack.setLore(loreList);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getTags(): string[] {
        try {
            return this.#minecraft_itemstack.getTags();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public hasTag(tag: string): boolean {
        try {
            return this.#minecraft_itemstack.hasTag(tag);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public hasComponent(componentId: string): boolean {
        try {
            return this.#minecraft_itemstack.hasComponent(componentId);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public isStackableWith(itemStack: ItemStack): boolean {
        try {
            return this.#minecraft_itemstack.isStackableWith(
                itemStack.#minecraft_itemstack
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @deprecated Custom events are no longer supported in JSON Items.
     */
    public triggerEvent(eventName: string): void {
        try {
            // return this.#minecraft_itemstack.triggerEvent(eventName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
