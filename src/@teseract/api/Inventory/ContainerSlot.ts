import * as MinecraftServer from "@minecraft/server";
import ItemStack from "./ItemStack";
import Teseract from "@teseract/api/Teseract";
import { Vector3 } from "@teseract/api/util/Vector";

export default class ContainerSlot {
    #minecraft_container: MinecraftServer.ContainerSlot;

    constructor(data: MinecraftServer.ContainerSlot) {
        this.#minecraft_container;
    }

    /**
     * @remarks
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    public getAmount(): number {
        try {
            return this.#minecraft_container.amount;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link MinecraftServer.InvalidContainerSlotError}
     */
    public isStackable(): boolean {
        try {
            return this.#minecraft_container.isStackable;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getKeepOnDeath(): boolean {
        try {
            return this.#minecraft_container.keepOnDeath;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public setKeepOnDeath(keepsOnDeath: boolean) {
        try {
            return (this.#minecraft_container.keepOnDeath = keepsOnDeath);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    getLockMode(): MinecraftServer.ItemLockMode {
        try {
            return this.#minecraft_container.lockMode;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    setLockMode(lockMode: MinecraftServer.ItemLockMode): void {
        try {
            this.#minecraft_container.lockMode = lockMode;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    getMaxAmount(): number {
        try {
            return this.#minecraft_container.maxAmount;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public setDisplayName(newName?: string): boolean {
        try {
            if (newName.length > 255) {
                return false;
            }
            this.#minecraft_container.nameTag = newName;
            return true;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getDisplayName(): string | undefined {
        try {
            return this.#minecraft_container.nameTag;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getType(): MinecraftServer.ItemType {
        try {
            return this.#minecraft_container.type;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getTypeId(): string {
        try {
            return this.#minecraft_container.typeId;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public clearDynamicProperties(): void {
        try {
            this.#minecraft_container.clearDynamicProperties();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getCanDestroy(): string[] {
        try {
            return this.#minecraft_container.getCanDestroy();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getCanPlaceOn(): string[] {
        try {
            return this.#minecraft_container.getCanPlaceOn();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getProperty(
        identifier: string
    ): boolean | number | string | Vector3 | undefined {
        try {
            const prop =
                this.#minecraft_container.getDynamicProperty(identifier);
            if (typeof prop === "object") {
                return new Vector3(prop);
            }
            return;
            prop;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getPropertyIds(): string[] {
        try {
            return this.#minecraft_container.getDynamicPropertyIds();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getDynamicPropertyTotalByteCount(): number {
        try {
            return this.#minecraft_container.getDynamicPropertyTotalByteCount();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getItem(): ItemStack | undefined {
        try {
            const item = this.#minecraft_container.getItem();
            return item ? new ItemStack(item) : undefined;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getLore(): string[] {
        try {
            return this.#minecraft_container.getLore();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getTags(): string[] {
        try {
            return this.#minecraft_container.getTags();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public hasItem(): boolean {
        try {
            return this.#minecraft_container.hasItem();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public hasTag(tag: string): boolean {
        try {
            return this.#minecraft_container.hasTag(tag);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public isStackableWith(itemStack: ItemStack): boolean {
        try {
            return this.#minecraft_container.isStackableWith(
                itemStack.getNativeHandle()
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Returns whether the ContainerSlot is valid. The container
     * slot is valid if the container exists and is loaded, and the
     * slot index is valid.
     *
     */
    public isValid(): boolean {
        return this.#minecraft_container.isValid();
    }

    public setCanDestroy(blockIdentifiers?: string[]): void {
        try {
            this.#minecraft_container.setCanDestroy(blockIdentifiers);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public setCanPlaceOn(blockIdentifiers?: string[]): void {
        try {
            this.#minecraft_container.setCanPlaceOn(blockIdentifiers);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public setProperty(
        identifier: string,
        value?: boolean | number | string | Vector3
    ): void {
        try {
            this.#minecraft_container.setDynamicProperty(identifier, value);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public setItem(itemStack?: ItemStack): void {
        try {
            this.#minecraft_container.setItem(
                itemStack?.getNativeHandle()
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public setLore(loreList?: string[]): void {
        try {
            this.#minecraft_container.setLore(loreList);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
