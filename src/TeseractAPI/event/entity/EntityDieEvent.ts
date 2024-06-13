import * as MinecraftServer from "@minecraft/server";
import EntityEventBase from "./base/EntityEventBase";
import Entity from "TeseractAPI/entity/Entity";
import Teseract from "TeseractAPI/Teseract";

function DataEntity(
    entity: MinecraftServer.Entity | undefined
): Entity | undefined {
    return entity ? new Entity(entity) : undefined;
}

/**
 * @remarks
 * Represents an event that occurs when an entity dies.
 */
export default class EntityDieEvent extends EntityEventBase {
    #minecraft_data: {
        damagingEntity: Entity | undefined;
        damagingProjectile: Entity | undefined;
        cause: MinecraftServer.EntityDamageCause;
    };

    constructor(data: MinecraftServer.EntityDieAfterEvent) {
        super({ entity: data.deadEntity });
        this.#minecraft_data = {
            damagingEntity: DataEntity(data.damageSource.damagingEntity),
            damagingProjectile: DataEntity(
                data.damageSource.damagingProjectile
            ),
            cause: data.damageSource.cause,
        };
    }

    /**
     * @remarks
     * Retrieves the type of damage caused to the entity.
     * @returns The type of damage caused to the entity.
     */
    public getCause(): MinecraftServer.EntityDamageCause {
        try {
            return this.#minecraft_data.cause;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    
    /**
     * @remarks
     * Retrieves the entity that caused the damage.
     * @returns The entity that caused the damage, or undefined if not available.
     */
    public getDamagingEntity(): Entity | undefined {
        try {
            return this.#minecraft_data.damagingEntity;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Retrieves the projectile that caused the damage.
     * @returns The projectile that caused the damage, or undefined if not available.
     */
    public getDamagingProjectile(): Entity | undefined {
        try {
            return this.#minecraft_data.damagingProjectile;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
