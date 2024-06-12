import * as MinecraftServer from "@minecraft/server";
import Entity from "TeseractAPI/entity/Entity";
import Teseract from "TeseractAPI/Teseract";
import ItemStack from "TeseractAPI/Inventory/ItemStack";
import Location, { LocationParseFormat } from "TeseractAPI/Location";
// import { PlayerInventory } from "../../inventory/PlayerInventory";
import DimensionLocation from "TeseractAPI/DimensionLocation";

export default class Player extends Entity {
    #minecraft_player: MinecraftServer.Player;
    constructor(player: MinecraftServer.Player) {
        super(player);
        this.#minecraft_player = player;
    }
    #CheckValid() {
        if (!this.#minecraft_player.isValid)
            throw new Error(
                `This Entity (${
                    this.#minecraft_player.id
                }) is not valid. Make sure that the Entity is valid before invoking any methods.`
            );
    }

    public eatItem(foodItem: ItemStack) {
        try {
            this.#CheckValid();
            this.#minecraft_player.eatItem(foodItem.cloneNativeItemStack());
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public override getHealth(): number | undefined {
        try {
            this.#CheckValid();
            return this.#minecraft_player.getComponent("minecraft:health")
                ?.currentValue as number;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public override setHealth(newHealth: number) {
        try {
            this.#CheckValid();
            return this.#minecraft_player
                .getComponent("minecraft:health")
                ?.setCurrentValue(newHealth) as boolean;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getBelowBlock(distance?: number): MinecraftServer.Block | undefined {
        try {
            this.#CheckValid();
            const loc = this.#minecraft_player.location;
            return this.#minecraft_player.dimension.getBlockFromRay(
                loc,
                { x: 0, y: -1, z: 0 },
                {
                    maxDistance: distance,
                }
            )?.block;
        } catch (error: any) {
            if (
                error instanceof
                MinecraftServer.LocationOutOfWorldBoundariesError
            ) {
                return undefined;
            }
            if (
                error instanceof
                MinecraftServer.LocationOutOfWorldBoundariesError
            ) {
                return undefined;
            }
            Teseract.log(error, error.stack);
        }
    }
    public setGameMode(newGamemode: MinecraftServer.GameMode) {
        try {
            this.#CheckValid();
            this.#minecraft_player.setGameMode(newGamemode);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setPermission(newPermissionLevel: number) {
        try {
            this.#CheckValid();
            return this.#minecraft_player.setDynamicProperty(
                "teseract:permission",
                newPermissionLevel
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getPermission(): number | undefined {
        try {
            this.#CheckValid();
            return this.#minecraft_player.getDynamicProperty(
                "teseract:permission"
            ) as number | undefined;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // public override getInventory(): PlayerInventory | undefined {
    //     try {
    //         this.#CheckValid();
    //         const inventory = this.#minecraft_player?.getComponent(
    //             "minecraft:inventory"
    //         );
    //         if (!inventory) {
    //             return;
    //         }
    //         return new PlayerInventory(inventory);
    //     } catch (error: any) {
    //         Teseract.log(error, error.stack);
    //     }
    // }
    public addExperience(experienceAmount: number): number {
        try {
            this.#CheckValid();
            return this.#minecraft_player.addExperience(experienceAmount);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public addLevels(levelsAmount: number): number {
        try {
            this.#CheckValid();
            return this.#minecraft_player.addLevels(levelsAmount);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getCamera(): MinecraftServer.Camera {
        try {
            this.#CheckValid();
            return this.#minecraft_player.camera;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getItemCooldown(categoryName: string): number {
        try {
            this.#CheckValid();
            return this.#minecraft_player.getItemCooldown(categoryName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getSpawnPoint(): DimensionLocation | undefined {
        try {
            this.#CheckValid();
            const dloc = this.#minecraft_player.getSpawnPoint();
            if (!dloc) {
                return undefined;
            }
            return new DimensionLocation(
                dloc?.x,
                dloc?.y,
                dloc?.z,
                Teseract.getDimension(dloc.dimension.id)
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getTotalXp(): number {
        try {
            this.#CheckValid();
            return this.#minecraft_player.getTotalXp();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isEmoting(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraft_player.isEmoting;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isFlying(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraft_player.isFlying;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isGliding(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraft_player.isGliding;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isJumping(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraft_player.isJumping;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isOp(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraft_player.isOp();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getLevel(): number {
        try {
            this.#CheckValid();
            return this.#minecraft_player.level;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getName() {
        try {
            this.#CheckValid();
            return this.#minecraft_player.name;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getScreenDisplay(): MinecraftServer.ScreenDisplay {
        try {
            this.#CheckValid();
            return this.#minecraft_player.onScreenDisplay;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public playMusic(
        musicName: string,
        volume?: number,
        fade?: number,
        loop?: boolean
    ): void {
        try {
            this.#CheckValid();
            this.#minecraft_player.playMusic(musicName, {
                fade: fade,
                loop: loop,
                volume: volume,
            });
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public playSound(
        soundName: string,
        location?: Location,
        volume?: number,
        pitch?: number
    ): void {
        try {
            this.#CheckValid();
            return this.#minecraft_player.playSound(soundName, {
                location: location?.getVector(),
                pitch: pitch,
                volume: volume,
            });
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public postClientMessage(id: string, value: string): void {
        try {
            this.#CheckValid();
            this.#minecraft_player.postClientMessage(id, value);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public queueMusic(
        musicName: string,
        volume?: number,
        fade?: number,
        loop?: boolean
    ): void {
        try {
            this.#CheckValid();
            this.#minecraft_player.queueMusic(musicName, {
                fade: fade,
                loop: loop,
                volume: volume,
            });
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public resetLevel(): void {
        try {
            this.#CheckValid();
            this.#minecraft_player.resetLevel();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getSelectedSlot(): number {
        try {
            this.#CheckValid();
            return this.#minecraft_player.selectedSlot;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public sendMessage(
        message:
            | string
            | MinecraftServer.RawMessage
            | (string | MinecraftServer.RawMessage)[]
    ): void {
        try {
            this.#CheckValid();
            this.#minecraft_player.sendMessage(message);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setOp(op: boolean): void {
        try {
            this.#CheckValid();
            this.#minecraft_player.setOp(op);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setSpawnPoint(newSpawnPoint: DimensionLocation): void {
        try {
            this.#CheckValid();
            this.#minecraft_player.setSpawnPoint(
                newSpawnPoint.getMinecraftDimensionLocation()
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public startItemCooldown(itemCategory: string, ticksDelay: number): void {
        try {
            this.#CheckValid();
            this.#minecraft_player.startItemCooldown(itemCategory, ticksDelay);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public stopMusic(): void {
        try {
            this.#CheckValid();
            this.#minecraft_player.stopMusic();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getotalXpNeededForNextLevel(): number {
        try {
            this.#CheckValid();
            return this.#minecraft_player.totalXpNeededForNextLevel;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getXpEarnedAtCurrentLevel(): number {
        try {
            this.#CheckValid();
            return this.#minecraft_player.xpEarnedAtCurrentLevel;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
