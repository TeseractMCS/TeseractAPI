import * as MinecraftServer from "@minecraft/server";
import Entity from "@teseract/api/entity/Entity";
import Teseract from "@teseract/api/Teseract";
import ItemStack from "@teseract/api/Inventory/ItemStack";
import Location, { LocationParseFormat } from "@teseract/api/Location";
// import { PlayerInventory } from "../../inventory/PlayerInventory";
import DimensionLocation from "@teseract/api/DimensionLocation";
import { PlayerInventory } from "@teseract/api/Inventory/PlayerInventory";
import FormManager from "@teseract/api/ui/FormManager";

export default class Player extends Entity {
    #minecraftPlayer: MinecraftServer.Player;

    constructor(player: MinecraftServer.Player) {
        super(player);
        this.#minecraftPlayer = player;
    }

    public setCameraInput(enabled: boolean) {
        try {
            this.#minecraftPlayer.inputPermissions.cameraEnabled = enabled;
        } catch (error) {
            Teseract.log(error);
        }
    }

    public getCameraInput() {
        try {
            return this.#minecraftPlayer.inputPermissions.cameraEnabled;
        } catch (error) {
            Teseract.log(error);
        }
    }

    public setMovementInput(enabled: boolean) {
        try {
            this.#minecraftPlayer.inputPermissions.movementEnabled = enabled;
        } catch (error) {
            Teseract.log(error);
        }
    }

    public getMovementInput() {
        try {
            return this.#minecraftPlayer.inputPermissions.movementEnabled;
        } catch (error) {
            Teseract.log(error);
        }
    }

    #CheckValid() {
        if (!this.#minecraftPlayer.isValid)
            throw new Error(
                `This Entity (${
                    this.#minecraftPlayer.id
                }) is not valid. Make sure that the Entity is valid before invoking any methods.`,
            );
    }

    public async showForm(form: any) {
        try {
            await FormManager.getInstance().showForm(this, form);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public override getNativeHandle(): MinecraftServer.Player {
        return this.#minecraftPlayer;
    }

    public kick(reason?: string) {
        try {
            this.#minecraftPlayer?.runCommand(
                `kick "${this.#minecraftPlayer.name}" ${reason}`,
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public eatItem(foodItem: ItemStack) {
        try {
            this.#CheckValid();
            this.#minecraftPlayer.eatItem(foodItem.getNativeHandle());
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public override getHealth(): number | undefined {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.getComponent("minecraft:health")
                ?.currentValue as number;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public override setHealth(newHealth: number) {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer
                .getComponent("minecraft:health")
                ?.setCurrentValue(newHealth) as boolean;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getBelowBlock(distance?: number): MinecraftServer.Block | undefined {
        try {
            this.#CheckValid();
            const loc = this.#minecraftPlayer.location;
            return this.#minecraftPlayer.dimension.getBlockFromRay(
                loc,
                { x: 0, y: -1, z: 0 },
                {
                    maxDistance: distance,
                },
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
            this.#minecraftPlayer.setGameMode(newGamemode);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setPermission(newPermissionLevel: number) {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.setDynamicProperty(
                "teseract:permission",
                newPermissionLevel,
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getPermission(): number | undefined {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.getDynamicProperty(
                "teseract:permission",
            ) as number | undefined;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public override getInventory(): PlayerInventory | undefined {
        try {
            this.#CheckValid();
            const inventory = this.#minecraftPlayer?.getComponent(
                "minecraft:inventory",
            );
            if (!inventory) {
                return;
            }
            return new PlayerInventory(inventory);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public addExperience(experienceAmount: number): number {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.addExperience(experienceAmount);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public addLevels(levelsAmount: number): number {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.addLevels(levelsAmount);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getCamera(): MinecraftServer.Camera {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.camera;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getItemCooldown(categoryName: string): number {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.getItemCooldown(categoryName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getSpawnPoint(): DimensionLocation | undefined {
        try {
            this.#CheckValid();
            const dimensionLocation = this.#minecraftPlayer.getSpawnPoint();
            if (!dimensionLocation) {
                return undefined;
            }
            return new DimensionLocation(
                Teseract.getDimension(dimensionLocation.dimension.id),
                dimensionLocation?.x,
                dimensionLocation?.y,
                dimensionLocation?.z,
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getTotalXp(): number {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.getTotalXp();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isEmoting(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.isEmoting;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isFlying(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.isFlying;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isGliding(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.isGliding;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isJumping(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.isJumping;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isOp(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.isOp();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getLevel(): number {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.level;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getName() {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.name;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getScreenDisplay(): MinecraftServer.ScreenDisplay {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.onScreenDisplay;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public playMusic(
        musicName: string,
        volume?: number,
        fade?: number,
        loop?: boolean,
    ): void {
        try {
            this.#CheckValid();
            this.#minecraftPlayer.playMusic(musicName, {
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
        pitch?: number,
    ): void {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.playSound(soundName, {
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
            this.#minecraftPlayer.postClientMessage(id, value);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public queueMusic(
        musicName: string,
        volume?: number,
        fade?: number,
        loop?: boolean,
    ): void {
        try {
            this.#CheckValid();
            this.#minecraftPlayer.queueMusic(musicName, {
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
            this.#minecraftPlayer.resetLevel();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getSelectedSlot(): number {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.selectedSlotIndex;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public sendMessage(
        message:
            | string
            | MinecraftServer.RawMessage
            | (string | MinecraftServer.RawMessage)[],
    ): void {
        try {
            this.#CheckValid();
            this.#minecraftPlayer.sendMessage(message);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setOp(op: boolean): void {
        try {
            this.#CheckValid();
            this.#minecraftPlayer.setOp(op);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setSpawnPoint(newSpawnPoint: DimensionLocation): void {
        try {
            this.#CheckValid();
            this.#minecraftPlayer.setSpawnPoint(
                newSpawnPoint.getMinecraftDimensionLocation(),
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public startItemCooldown(itemCategory: string, ticksDelay: number): void {
        try {
            this.#CheckValid();
            this.#minecraftPlayer.startItemCooldown(itemCategory, ticksDelay);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public stopMusic(): void {
        try {
            this.#CheckValid();
            this.#minecraftPlayer.stopMusic();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getotalXpNeededForNextLevel(): number {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.totalXpNeededForNextLevel;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getXpEarnedAtCurrentLevel(): number {
        try {
            this.#CheckValid();
            return this.#minecraftPlayer.xpEarnedAtCurrentLevel;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
