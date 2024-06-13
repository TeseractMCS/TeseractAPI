import * as MinecraftServer from "@minecraft/server";
import Entity from "./Entity";

export default interface EntityDamageSource {
    cause: MinecraftServer.EntityDamageCause;
    damagingEntity: Entity;
    damagingProjectile: Entity;
}
