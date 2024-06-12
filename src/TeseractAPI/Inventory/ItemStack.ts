import * as MC from "@minecraft/server";
import { ItemMaterial } from "./enum/material/ItemMaterial";
import { ItemStackLockMode } from "./enum/ItemStackLockMode";
import Teseract from "TeseractAPI/Teseract";
export default class ItemStack {
  #MCItemStack: MC.ItemStack;
  constructor(itemType: ItemMaterial | MC.ItemStack, amount?: number) {
    if (itemType instanceof MC.ItemStack) {
      this.#MCItemStack = itemType;
    } else {
      this.#MCItemStack = new MC.ItemStack(itemType, amount ?? 1);
    }
  }
  public getAmount(): number {
    try {
      return this.#MCItemStack.amount;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public setAmount(newAmount: number): void {
    try {
      this.#MCItemStack.amount = newAmount;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public isStackable(): boolean {
    try {
      return this.#MCItemStack.isStackable;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public keepsOnDeath(): boolean {
    try {
      return this.#MCItemStack.keepOnDeath;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public setKeepOnDeath(keepsOnDeath: boolean): boolean {
    try {
      return (this.#MCItemStack.keepOnDeath = keepsOnDeath);
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public getLockMode(): ItemStackLockMode {
    try {
      const mcLockMode: ItemStackLockMode = this.#MCItemStack.lockMode.toUpperCase() as unknown as ItemStackLockMode;
      return mcLockMode;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public setLockMode(newLockMode: ItemStackLockMode): MC.ItemLockMode {
    try {
      return (this.#MCItemStack.lockMode = newLockMode as unknown as MC.ItemLockMode);
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public getMaxAmount(): number {
    try {
      return this.#MCItemStack.maxAmount;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public getDisplayName(): string | undefined {
    try {
      return this.#MCItemStack.nameTag;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public setDisplayName(newDisplayName: string): string {
    try {
      return (this.#MCItemStack.nameTag = newDisplayName);
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public getTypeId(): ItemMaterial {
    try {
      return this.#MCItemStack.typeId as ItemMaterial;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public cloneItemStack(): ItemStack {
    try {
      const clonedItemStack = new ItemStack(this.#MCItemStack);
      return clonedItemStack;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public cloneNativeItemStack(): MC.ItemStack {
    try {
      return this.#MCItemStack.clone();
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public getDestructibleBlocks(): string[] {
    try {
      return this.#MCItemStack.getCanDestroy();
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public getPlaceableBlocks(): string[] {
    try {
      return this.#MCItemStack.getCanPlaceOn();
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public setDestructibleBlocks(destructibleBlocks?: string[] | undefined): void {
    try {
      return this.#MCItemStack.setCanDestroy(destructibleBlocks);
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public setPlaceableBlocks(placeableBlocks?: string[] | undefined): void {
    try {
      return this.#MCItemStack.setCanDestroy(placeableBlocks);
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }

  public getComponent<T extends keyof MC.ItemComponentTypeMap>(componentId: T): MC.ItemComponentTypeMap[T] | undefined {
    try {
      return this.#MCItemStack.getComponent(componentId);
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public getComponents(): MC.ItemComponent[] {
    try {
      return this.#MCItemStack.getComponents();
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public getLore(): string[] {
    try {
      return this.#MCItemStack.getLore();
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public setLore(loreList?: string[] | undefined): void {
    try {
      return this.#MCItemStack.setLore(loreList);
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public getTags(): string[] {
    try {
      return this.#MCItemStack.getTags();
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public hasTag(tag: string): boolean {
    try {
      return this.#MCItemStack.hasTag(tag);
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public hasComponent(componentId: string): boolean {
    try {
      return this.#MCItemStack.hasComponent(componentId);
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }

  public isStackableWith(itemStack: ItemStack): boolean {
    try {
      return this.#MCItemStack.isStackableWith(itemStack.#MCItemStack);
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }

  /**
   * @deprecated Custom events are no longer supported in JSON Items.
   */
  public triggerEvent(eventName: string): void {
    try {
      // return this.#MCItemStack.triggerEvent(eventName);
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
}
