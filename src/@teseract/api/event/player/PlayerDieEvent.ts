import * as MinecraftServer from "@minecraft/server";
import PlayerEventBase from "./base/PlayerEventBase";
import Entity from "@teseract/api/entity/Entity";
import Teseract from "@teseract/api/Teseract";

function DataEntity(
    entity: MinecraftServer.Entity | undefined
): Entity | undefined {
    return entity ? new Entity(entity) : undefined;
}

/**
 * @remarks
 * Represents an event that occurs when an player dies.
 */
export default class PlayerDieEvent extends PlayerEventBase {
    #minecraft_data: {
        damagingEntity: Entity | undefined;
        damagingProjectile: Entity | undefined;
        cause: MinecraftServer.EntityDamageCause;
    };

    constructor(data: MinecraftServer.EntityDieAfterEvent) {
        super({ player: data.deadEntity as MinecraftServer.Player });
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
    public getDamager(): Entity | undefined {
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
    public getProjectile(): Entity | undefined {
        try {
            return this.#minecraft_data.damagingProjectile;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
