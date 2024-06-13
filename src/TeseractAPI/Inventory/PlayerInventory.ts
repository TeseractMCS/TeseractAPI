import * as MinecraftServer from "@minecraft/server";
import ItemStack from "./ItemStack";
import Inventory from "./Inventory";
import Teseract from "TeseractAPI/Teseract";
import ArmorSlot from "./ArmorSlot";

export class PlayerInventory extends Inventory {
    #minecraft_inventory: MinecraftServer.EntityInventoryComponent;

    constructor(a: MinecraftServer.EntityInventoryComponent) {
        super(a);
        this.#minecraft_inventory = a;
    }

    public getMainHandItemStack() {
        try {
            const slot = this.#minecraft_inventory.entity
                ?.getComponent("minecraft:equippable")
                ?.getEquipment(MinecraftServer.EquipmentSlot.Mainhand);
            if (!slot) {
                return undefined;
            }
            return new ItemStack(slot);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getOffHandItemStack() {
        try {
            const slot = this.#minecraft_inventory.entity
                ?.getComponent("minecraft:equippable")
                ?.getEquipment(MinecraftServer.EquipmentSlot.Offhand);
            if (!slot) {
                return undefined;
            }
            return new ItemStack(slot);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getArmorItemStack(armorSlot: ArmorSlot) {
        try {
            const slot = this.#minecraft_inventory.entity
                ?.getComponent("minecraft:equippable")
                ?.getEquipment(MinecraftServer.EquipmentSlot[armorSlot]);
            if (!slot) {
                return undefined;
            }
            return new ItemStack(slot);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public setMainHandItemStack(itemStack?: ItemStack) {
        try {
            return this.#minecraft_inventory.entity
                ?.getComponent("minecraft:equippable")
                ?.setEquipment(
                    MinecraftServer.EquipmentSlot.Mainhand,
                    itemStack?.getNativeHandle()
                );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public setOffHandItemStack(itemStack?: ItemStack) {
        try {
            return this.#minecraft_inventory.entity
                ?.getComponent("minecraft:equippable")
                ?.setEquipment(
                    MinecraftServer.EquipmentSlot.Offhand,
                    itemStack?.getNativeHandle()
                );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public setArmorItemStack(armorSlot: ArmorSlot, itemStack?: ItemStack) {
        try {
            return this.#minecraft_inventory.entity
                ?.getComponent("minecraft:equippable")
                ?.setEquipment(
                    MinecraftServer.EquipmentSlot[armorSlot],
                    itemStack?.getNativeHandle()
                );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public dropItemStack(slot: number) {
        try {
            const item = this.getItem(slot);

            if (!item) {
                return false;
            }

            this.setItem(slot);

            const itemEntity = this.getEntity()
                .getDimension()
                .spawnItem(item, this.getEntity()?.getLocation());

            return itemEntity;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public dropArmorItemStack(armorSlot: ArmorSlot) {
        try {
            const item = this.getArmorItemStack(armorSlot);

            if (!item) {
                return false;
            }

            this.setArmorItemStack(armorSlot, undefined);

            const itemEntity = this.getEntity()
                .getDimension()
                .spawnItem(item, this.getEntity()?.getLocation());

            return itemEntity;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
