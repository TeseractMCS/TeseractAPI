import * as MC from "@minecraft/server";
import Teseract from "TeseractAPI/Teseract";
import Dimension from "TeseractAPI/Dimension";
import Location from "TeseractAPI/Location";
import DimensionLocation from "TeseractAPI/DimensionLocation";
// import { PotionEffects } from "../enum/PotionEffects";
// import { DamageCause } from "../enum/DamageCause";
// import { PotionEffect } from "../PotionEffect";
// import { EntityRaycastHit } from "../interface/EntityRaycastHit";
// import { Inventory } from "../inventory/Inventory";
// import { MinecraftSounds } from "../enum/sounds/MinecraftSound";

export default class Entity {
    #MCEntity: MC.Entity | MC.Player;
    #MCPlayer?: MC.Player;
    constructor(entity: MC.Entity | MC.Player) {
        this.#MCEntity = entity;
    }
    #CheckValid() {
        if (!this.#MCEntity.isValid)
            return console.warn(
                `This Entity (${
                    this.#MCEntity.id
                }) is not valid. Make sure that the Entity is valid before invoking any methods.`
            );
    }
    public isPlayer(): boolean {
        try {
            return this.#MCEntity.typeId == "minecraft:player";
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public kick(reason?: string) {
        try {
            this.#MCPlayer?.runCommand(
                `kick "${this.#MCPlayer.name}" ${reason}`
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getMaxHealth(): number | undefined {
        try {
            this.#CheckValid();
            return this.#MCEntity.getComponent("minecraft:health")
                ?.defaultValue;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public resetHealthToDefault() {
        try {
            this.#CheckValid();
            return this.#MCEntity
                .getComponent("minecraft:health")
                ?.resetToMaxValue();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public resetHealthToMinimum() {
        try {
            this.#CheckValid();
            return this.#MCEntity
                .getComponent("minecraft:health")
                ?.resetToMaxValue();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public resetHealthToMaximum() {
        try {
            this.#CheckValid();
            return this.#MCEntity
                .getComponent("minecraft:health")
                ?.resetToMaxValue();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getHealth(): number | undefined {
        try {
            this.#CheckValid();
            return this.#MCEntity.getComponent("minecraft:health")
                ?.currentValue;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setHealth(newHealth: number) {
        try {
            this.#CheckValid();
            return this.#MCEntity
                .getComponent("minecraft:health")
                ?.setCurrentValue(newHealth);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

//     public getInventory(): Inventory | undefined {
//         try {
//             this.#CheckValid();
//             const inventory = this.#MCPlayer?.getComponent(
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

//     /*
//   ################################################
//   ################ MATIVE METHODS ################
//   ################################################
//   */

//     public addPotionEffect(potionEffect: PotionEffect) {
//         try {
//             this.#CheckValid();
//             let potEffect;

//             let res = this.#MCEntity.addEffect(
//                 potionEffect.getType(),
//                 potionEffect.getDuration(),
//                 {
//                     amplifier: potionEffect.getAmplifier(),
//                     showParticles: potionEffect.showsParticles(),
//                 }
//             );
//             if (res != undefined) {
//                 potEffect = new PotionEffect(
//                     res.typeId as PotionEffects,
//                     res.duration,
//                     res.amplifier
//                 );
//             }
//             return potEffect;
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }
//     public addPotionEffects(...potionEffects: PotionEffect[]) {
//         try {
//             this.#CheckValid();
//             for (const effect of potionEffects) {
//                 this.addPotionEffect(effect);
//             }
//             return potionEffects;
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }
    public addTag(tag: string) {
        try {
            this.#CheckValid();
            this.#MCEntity.addTag(tag);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public addTags(tags: string[]) {
        try {
            this.#CheckValid();
            for (const tag of tags) {
                this.#MCEntity.addTag(tag);
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
    //         const P = !!projectile ? projectile.#MCEntity : undefined;
    //         const D = !!damager ? damager.#MCEntity : undefined;
    //         this.#MCEntity.applyDamage(damage, {
    //             cause: cause as unknown as MC.EntityDamageCause,
    //             damagingEntity: D,
    //             damagingProjectile: P,
    //         });
    //     } catch (error: any) {
    //         Teseract.log(error, error.stack);
    //     }
    // }
    public setVelocity(impulse: MC.Vector3 | Location) {
        try {
            this.#CheckValid();
            let I;
            if (impulse instanceof Location) {
                I = impulse.getVector();
            } else {
                I = impulse;
            }
            this.#MCEntity.applyImpulse(I);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public knockback(
        DirectionX: number,
        DirectionZ: number,
        ForceXZ: number,
        ForceY: number
    ) {
        try {
            this.#CheckValid();
            this.#MCEntity.applyKnockback(
                DirectionX,
                DirectionZ,
                ForceXZ,
                ForceY
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public clearDynamicProperties() {
        try {
            this.#CheckValid();
            this.#MCEntity.clearDynamicProperties();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public clearVelocity() {
        try {
            this.#CheckValid();
            this.#MCEntity.clearVelocity();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    public getDimension(): Dimension {
        try {
            this.#CheckValid();
            return Teseract.getDimension(this.#MCEntity.dimension.id);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public extinguishFire() {
        try {
            this.#CheckValid();
            this.#MCEntity.extinguishFire();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getFallDistance() {
        try {
            this.#CheckValid();
            return this.#MCEntity.fallDistance;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getBlockFromViewDirection(
        config: MC.BlockRaycastOptions
    ): MC.BlockRaycastHit | undefined {
        try {
            this.#CheckValid();
            return this.#MCEntity.getBlockFromViewDirection(config);
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
        propertyName: string
    ): string | number | boolean | MC.Vector3 | undefined {
        try {
            this.#CheckValid();
            return this.#MCEntity.getDynamicProperty(propertyName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getDynamicPropertyIds(): string[] {
        try {
            this.#CheckValid();
            return this.#MCEntity.getDynamicPropertyIds();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getDynamicPropertyTotalByteCount(): number {
        try {
            this.#CheckValid();
            return this.#MCEntity.getDynamicPropertyTotalByteCount();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // public getEffect(potionEffect: PotionEffects): PotionEffect | undefined {
    //     try {
    //         this.#CheckValid();
    //         const MCEffect = this.#MCEntity.getEffect(potionEffect);
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
    //         const TSEffects = this.#MCEntity.getEffects().map((effect) => {
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
    //         const MCHit = this.#MCEntity.getEntitiesFromViewDirection();
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
            const vec = this.#MCEntity.getHeadLocation();
            return new Location(vec.x, vec.y, vec.z);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getProperty(
        propertyName: string
    ): number | string | boolean | undefined {
        try {
            this.#CheckValid();
            return this.#MCEntity.getProperty(propertyName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getRotation(): MC.Vector2 {
        try {
            this.#CheckValid();
            return this.#MCEntity.getRotation();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getTags(): string[] {
        try {
            this.#CheckValid();
            return this.#MCEntity.getTags();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getVelocity(): MC.Vector3 {
        try {
            this.#CheckValid();
            return this.#MCEntity.getVelocity();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getViewVector(): MC.Vector3 {
        try {
            this.#CheckValid();
            return this.#MCEntity.getViewDirection();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public hasAttribute(attributeName: string): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.hasComponent(attributeName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public hasTag(tagName: string): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.hasTag(tagName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getUUID(): string {
        try {
            return this.#MCEntity.id;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isClimbing(): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.isClimbing;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isFalling(): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.isFalling;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isInWater(): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.isInWater;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isOnGround(): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.isOnGround;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isSleeping(): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.isSleeping;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isSneaking(): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.isSneaking;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isSprinting(): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.isSprinting;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isSwimming(): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.isSwimming;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public isValid(): boolean {
        try {
            return this.#MCEntity.isValid();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public kill(): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.kill();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getLifetimeState(): MC.EntityLifetimeState {
        try {
            this.#CheckValid();
            return this.#MCEntity.lifetimeState;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getLocation(): Location {
        try {
            this.#CheckValid();
            const loc = this.#MCEntity.location;
            return new Location(loc.x, loc.y, loc.z);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public matches(matcher: MC.EntityQueryOptions): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.matches(matcher);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getDisplayName(): string {
        try {
            this.#CheckValid();
            return this.#MCEntity.nameTag;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setDisplayName(displayName: string): void {
        try {
            this.#CheckValid();
            this.#MCEntity.nameTag = displayName;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public playAnimation(
        animation: string,
        config?: MC.PlayAnimationOptions
    ): void {
        try {
            this.#CheckValid();
            this.#MCEntity.playAnimation(animation, config);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public remove() {
        try {
            this.#MCEntity.remove();
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // public removePotionEffect(effectType: PotionEffects): boolean {
    //     try {
    //         this.#CheckValid();
    //         return this.#MCEntity.removeEffect(
    //             effectType as unknown as MC.EffectType
    //         );
    //     } catch (error: any) {
    //         Teseract.log(error, error.stack);
    //     }
    // }
    public removeTag(tagName: string): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.removeTag(tagName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public removeTags(tags: string[]): number {
        try {
            this.#CheckValid();
            let successCount = 0;
            for (const tag of tags) {
                if (this.#MCEntity.hasTag(tag)) {
                    this.#MCEntity.removeTag(tag);
                    successCount++;
                }
            }
            return successCount;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public resetProperty(
        propertyName: string
    ): string | number | undefined | boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.resetProperty(propertyName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public runCommand(command: string): MC.CommandError | MC.CommandResult {
        try {
            this.#CheckValid();
            return this.#MCEntity.runCommand(command);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public async runCommandAsync(
        command: string
    ): Promise<MC.CommandError | MC.CommandResult> {
        try {
            this.#CheckValid();
            return this.#MCEntity.runCommandAsync(command);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getScoreboard(): MC.ScoreboardIdentity | undefined {
        try {
            this.#CheckValid();
            return this.#MCEntity.scoreboardIdentity;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setDynamicProperty(
        propertyName: string,
        propertyValue: string | number | boolean | undefined | MC.Vector3
    ): void {
        try {
            this.#CheckValid();
            this.#MCEntity.setDynamicProperty(propertyName, propertyValue);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setOnFire(duration: number, useEffects?: boolean): boolean {
        try {
            this.#CheckValid();
            return this.#MCEntity.setOnFire(duration, useEffects);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setProperty(
        propertyName: string,
        propertyValue: string | number | boolean
    ): void {
        try {
            this.#CheckValid();
            this.#MCEntity.setProperty(propertyName, propertyValue);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public setRotation(newRotation: MC.Vector2): void {
        try {
            this.#CheckValid();
            this.#MCEntity.setRotation(newRotation);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    public getTarget(): Entity | undefined {
        try {
            this.#CheckValid();
            if (!this.#MCEntity?.target) {
                return undefined;
            }
            return new Entity(this.#MCEntity?.target);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // public teleport(
    //     newLocation: Location | DimensionLocation,
    //     rotation?: MC.Vector2,
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
    //         this.#MCEntity.teleport(newLocation.getVector(), {
    //             checkForBlocks: checkForBlocks,
    //             dimension: MC.world.getDimension(
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
            this.#MCEntity.triggerEvent(eventName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    // public tryTeleport(
    //     newLocation: Location,
    //     rotation: MC.Vector2,
    //     checkForBlocks: boolean,
    //     dimension: Dimension,
    //     facingLocation: Location,
    //     keepVelocity: boolean
    // ): boolean {
    //     try {
    //         this.#CheckValid();
    //         return this.#MCEntity.tryTeleport(newLocation.getVector(), {
    //             checkForBlocks: checkForBlocks,
    //             dimension: MC.world.getDimension(dimension.getName()),
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
            return this.#MCEntity.typeId;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
