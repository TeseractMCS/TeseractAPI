import * as MinecraftServer from "@minecraft/server";
import Teseract from "TeseractAPI/Teseract";
import Dimension from "TeseractAPI/Dimension";
import Location from "TeseractAPI/Location";
import DimensionLocation from "TeseractAPI/DimensionLocation";
import PotionEffects from "TeseractAPI/potion/PotionEffects";
import PotionEffect from "TeseractAPI/potion/PotionEffect";
import Inventory from "TeseractAPI/Inventory/Inventory";

export default class Entity {
    #minecraftEntity: MinecraftServer.Entity;

    constructor(entity: MinecraftServer.Entity) {
        this.#minecraftEntity = entity;
    }

    #CheckValid() {
        if (!this.#minecraftEntity.isValid)
            return console.warn(
                `This Entity (${
                    this.#minecraftEntity.id
                }) is not valid. Make sure that the Entity is valid before invoking any methods.`,
            );
    }

    isCachedEntity() {
        return false;
    }

    public getNativeHandle(): MinecraftServer.Entity {
        return this.#minecraftEntity;
    }

    public isPlayer(): boolean {
        try {
            return this.#minecraftEntity.typeId == "minecraft:player";
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getInventory(): Inventory | undefined {
        try {
            this.#CheckValid();
            const inventory = this.#minecraftEntity?.getComponent(
                "minecraft:inventory",
            );
            if (!inventory) {
                return;
            }
            return new Inventory(inventory);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getMaxHealth(): number | undefined {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.getComponent("minecraft:health")
                ?.defaultValue;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public resetHealthToDefault() {
        try {
            this.#CheckValid();
            return this.#minecraftEntity
                .getComponent("minecraft:health")
                ?.resetToMaxValue();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public resetHealthToMinimum() {
        try {
            this.#CheckValid();
            return this.#minecraftEntity
                .getComponent("minecraft:health")
                ?.resetToMaxValue();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public resetHealthToMaximum() {
        try {
            this.#CheckValid();
            return this.#minecraftEntity
                .getComponent("minecraft:health")
                ?.resetToMaxValue();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getHealth(): number | undefined {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.getComponent("minecraft:health")
                ?.currentValue;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setHealth(newHealth: number) {
        try {
            this.#CheckValid();
            return this.#minecraftEntity
                .getComponent("minecraft:health")
                ?.setCurrentValue(newHealth);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    //     public getInventory(): Inventory | undefined {
    //         try {
    //             this.#CheckValid();
    //             const inventory = this.#minecraftPlayer?.getComponent(
    //                 "minecraft:inventory"
    //             );
    //             if (!inventory) {
    //                 return;
    //             }
    //             return new Inventory(inventory);
    //         } catch (error: any) {
    //             Teseract.log(error, error.stack);
    //         }
    //     }

    /*
      ################################################
      ################ MATIVE METHODS ################
      ################################################
      */

    public addPotionEffect(potionEffect: PotionEffect) {
        try {
            this.#CheckValid();
            let potEffect;

            let res = this.#minecraftEntity.addEffect(
                potionEffect.getType(),
                potionEffect.getDuration(),
                {
                    amplifier: potionEffect.getAmplifier(),
                    showParticles: potionEffect.showsParticles(),
                },
            );
            if (res != undefined) {
                potEffect = new PotionEffect(
                    res.typeId as PotionEffects,
                    res.duration,
                    res.amplifier,
                );
            }
            return potEffect;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public addPotionEffects(...potionEffects: PotionEffect[]): PotionEffect[];
    public addPotionEffects(potionEffects: PotionEffect[]): PotionEffect[];
    public addPotionEffects(...potionEffects: any): PotionEffect[] {
        try {
            this.#CheckValid();
            if (Array.isArray(potionEffects[0])) {
                potionEffects = potionEffects[0];
            }
            for (const effect of potionEffects) {
                this.addPotionEffect(effect);
            }
            return potionEffects;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public addTag(tag: string) {
        try {
            this.#CheckValid();
            this.#minecraftEntity.addTag(tag);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public addTags(tags: string[]) {
        try {
            this.#CheckValid();
            for (const tag of tags) {
                this.#minecraftEntity.addTag(tag);
            }
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // public damage(
    //     damage: number,
    //     cause?: DamageCause,
    //     damager?: Entity,
    //     projectile?: Entity
    // ) {
    //     try {
    //         this.#CheckValid();
    //         const P = !!projectile ? projectile.#minecraftEntity : undefined;
    //         const D = !!damager ? damager.#minecraftEntity : undefined;
    //         this.#minecraftEntity.applyDamage(damage, {
    //             cause: cause as unknown as MinecraftServer.EntityDamageCause,
    //             damagingEntity: D,
    //             damagingProjectile: P,
    //         });
    //     } catch (error: any) {
    //         Teseract.log(error, error.stack);
    //     }
    // }
    public setVelocity(impulse: MinecraftServer.Vector3 | Location) {
        try {
            this.#CheckValid();
            let I;
            if (impulse instanceof Location) {
                I = impulse.getVector();
            } else {
                I = impulse;
            }
            this.#minecraftEntity.applyImpulse(I);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public knockback(
        DirectionX: number,
        DirectionZ: number,
        ForceXZ: number,
        ForceY: number,
    ) {
        try {
            this.#CheckValid();
            this.#minecraftEntity.applyKnockback(
                DirectionX,
                DirectionZ,
                ForceXZ,
                ForceY,
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public clearDynamicProperties() {
        try {
            this.#CheckValid();
            this.#minecraftEntity.clearDynamicProperties();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public clearVelocity() {
        try {
            this.#CheckValid();
            this.#minecraftEntity.clearVelocity();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getDimension(): Dimension {
        try {
            this.#CheckValid();
            return Teseract.getDimension(this.#minecraftEntity.dimension.id);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public extinguishFire() {
        try {
            this.#CheckValid();
            this.#minecraftEntity.extinguishFire();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getFallDistance() {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.fallDistance;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getBlockFromViewDirection(
        config: MinecraftServer.BlockRaycastOptions,
    ): MinecraftServer.BlockRaycastHit | undefined {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.getBlockFromViewDirection(config);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // TODO
    public getAttribute() {
        try {
            this.#CheckValid();
            console.warn("Attributes or Attributes are not available yet");
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // TODO
    public getAttributes() {
        try {
            this.#CheckValid();
            console.warn("Attributes or Attributes are not available yet");
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getDynamicProperty(
        propertyName: string,
    ): string | number | boolean | MinecraftServer.Vector3 | undefined {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.getDynamicProperty(propertyName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getDynamicPropertyIds(): string[] {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.getDynamicPropertyIds();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getDynamicPropertyTotalByteCount(): number {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.getDynamicPropertyTotalByteCount();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // public getEffect(potionEffect: PotionEffects): PotionEffect | undefined {
    //     try {
    //         this.#CheckValid();
    //         const MCEffect = this.#minecraftEntity.getEffect(potionEffect);
    //         if (!MCEffect) {
    //             return undefined;
    //         }
    //         const TSEffect = new PotionEffect(
    //             MCEffect?.typeId as unknown as PotionEffects,
    //             MCEffect.duration,
    //             MCEffect.amplifier
    //         );
    //         return TSEffect;
    //     } catch (error: any) {
    //         Teseract.log(error, error.stack);
    //     }
    // }
    // public getEffects(): PotionEffect[] {
    //     try {
    //         this.#CheckValid();
    //         const TSEffects = this.#minecraftEntity.getEffects().map((effect) => {
    //             return new PotionEffect(
    //                 effect.typeId as unknown as PotionEffects,
    //                 effect.duration,
    //                 effect.amplifier
    //             );
    //         });
    //         return TSEffects;
    //     } catch (error: any) {
    //         Teseract.log(error, error.stack);
    //     }
    // }
    // public getEntitiesFromViewDirection(): EntityRaycastHit[] | undefined {
    //     try {
    //         this.#CheckValid();
    //         const MCHit = this.#minecraftEntity.getEntitiesFromViewDirection();
    //         if (!MCHit || MCHit?.length == 0) {
    //             return undefined;
    //         }
    //         const TSHit: EntityRaycastHit[] = MCHit.map((val) => {
    //             return {
    //                 distance: val.distance,
    //                 entity: new Entity(val.entity),
    //             };
    //         });
    //         return TSHit;
    //     } catch (error: any) {
    //         Teseract.log(error, error.stack);
    //     }
    // }
    public getHeadLocation(): Location {
        try {
            this.#CheckValid();
            const vec = this.#minecraftEntity.getHeadLocation();
            return new Location(vec.x, vec.y, vec.z);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getProperty(
        propertyName: string,
    ): number | string | boolean | undefined {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.getProperty(propertyName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getRotation(): MinecraftServer.Vector2 {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.getRotation();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getTags(): string[] {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.getTags();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getVelocity(): MinecraftServer.Vector3 {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.getVelocity();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getViewVector(): MinecraftServer.Vector3 {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.getViewDirection();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public hasAttribute(attributeName: string): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.hasComponent(attributeName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public hasTag(tagName: string): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.hasTag(tagName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getUUID(): string {
        try {
            return this.#minecraftEntity.id;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isClimbing(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.isClimbing;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isFalling(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.isFalling;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isInWater(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.isInWater;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isOnGround(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.isOnGround;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isSleeping(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.isSleeping;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isSneaking(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.isSneaking;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isSprinting(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.isSprinting;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isSwimming(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.isSwimming;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isValid(): boolean {
        try {
            return this.#minecraftEntity.isValid();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public kill(): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.kill();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getLifetimeState(): MinecraftServer.EntityLifetimeState {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.lifetimeState;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getLocation(): Location {
        try {
            this.#CheckValid();
            const loc = this.#minecraftEntity.location;
            return new Location(loc.x, loc.y, loc.z);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public matches(matcher: MinecraftServer.EntityQueryOptions): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.matches(matcher);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getDisplayName(): string {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.nameTag;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setDisplayName(displayName: string): void {
        try {
            this.#CheckValid();
            this.#minecraftEntity.nameTag = displayName;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public playAnimation(
        animation: string,
        config?: MinecraftServer.PlayAnimationOptions,
    ): void {
        try {
            this.#CheckValid();
            this.#minecraftEntity.playAnimation(animation, config);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public remove() {
        try {
            this.#minecraftEntity.remove();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // public removePotionEffect(effectType: PotionEffects): boolean {
    //     try {
    //         this.#CheckValid();
    //         return this.#minecraftEntity.removeEffect(
    //             effectType as unknown as MinecraftServer.EffectType
    //         );
    //     } catch (error: any) {
    //         Teseract.log(error, error.stack);
    //     }
    // }
    public removeTag(tagName: string): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.removeTag(tagName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public removeTags(tags: string[]): number {
        try {
            this.#CheckValid();
            let successCount = 0;
            for (const tag of tags) {
                if (this.#minecraftEntity.hasTag(tag)) {
                    this.#minecraftEntity.removeTag(tag);
                    successCount++;
                }
            }
            return successCount;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public resetProperty(
        propertyName: string,
    ): string | number | undefined | boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.resetProperty(propertyName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public runCommand(
        command: string,
    ): MinecraftServer.CommandError | MinecraftServer.CommandResult {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.runCommand(command);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public async runCommandAsync(
        command: string,
    ): Promise<MinecraftServer.CommandError | MinecraftServer.CommandResult> {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.runCommandAsync(command);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getScoreboard(): MinecraftServer.ScoreboardIdentity | undefined {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.scoreboardIdentity;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setDynamicProperty(
        propertyName: string,
        propertyValue:
            | string
            | number
            | boolean
            | undefined
            | MinecraftServer.Vector3,
    ): void {
        try {
            this.#CheckValid();
            this.#minecraftEntity.setDynamicProperty(
                propertyName,
                propertyValue,
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setOnFire(duration: number, useEffects?: boolean): boolean {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.setOnFire(duration, useEffects);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setProperty(
        propertyName: string,
        propertyValue: string | number | boolean,
    ): void {
        try {
            this.#CheckValid();
            this.#minecraftEntity.setProperty(propertyName, propertyValue);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setRotation(newRotation: MinecraftServer.Vector2): void {
        try {
            this.#CheckValid();
            this.#minecraftEntity.setRotation(newRotation);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getTarget(): Entity | undefined {
        try {
            this.#CheckValid();
            if (!this.#minecraftEntity?.target) {
                return undefined;
            }
            return new Entity(this.#minecraftEntity?.target);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // public teleport(
    //     newLocation: Location | DimensionLocation,
    //     rotation?: MinecraftServer.Vector2,
    //     checkForBlocks?: boolean,
    //     dimension?: Dimension,
    //     facingLocation?: Location,
    //     keepVelocity?: boolean
    // ) {
    //     try {
    //         this.#CheckValid();
    //         if (newLocation instanceof DimensionLocation) {
    //             dimension = newLocation.getDimension();
    //         }
    //         this.#minecraftEntity.teleport(newLocation.getVector(), {
    //             checkForBlocks: checkForBlocks,
    //             dimension: MinecraftServer.world.getDimension(
    //                 dimension?.getName() ?? "minecraft:overworld"
    //             ),
    //             facingLocation: facingLocation?.getVector(),
    //             keepVelocity: keepVelocity,
    //             rotation: rotation,
    //         });
    //     } catch (error: any) {
    //         Teseract.log(error, error.stack);
    //     }
    // }
    public triggerEvent(eventName: string): void {
        try {
            this.#CheckValid();
            this.#minecraftEntity.triggerEvent(eventName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // public tryTeleport(
    //     newLocation: Location,
    //     rotation: MinecraftServer.Vector2,
    //     checkForBlocks: boolean,
    //     dimension: Dimension,
    //     facingLocation: Location,
    //     keepVelocity: boolean
    // ): boolean {
    //     try {
    //         this.#CheckValid();
    //         return this.#minecraftEntity.tryTeleport(newLocation.getVector(), {
    //             checkForBlocks: checkForBlocks,
    //             dimension: MinecraftServer.world.getDimension(dimension.getName()),
    //             facingLocation: facingLocation.getVector(),
    //             keepVelocity: keepVelocity,
    //             rotation: rotation,
    //         });
    //     } catch (error: any) {
    //         Teseract.log(error, error.stack);
    //     }
    // }
    public getTypeId(): string {
        try {
            this.#CheckValid();
            return this.#minecraftEntity.typeId;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
