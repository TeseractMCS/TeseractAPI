import * as MinecraftServer from "@minecraft/server";
import Player from "TeseractAPI/entity/Player";
import PlayerCancellableEventBase from "./base/PlayerCancellableEventBase";
import EntityDamageSource from "TeseractAPI/entity/EntityDamageSource";
import Teseract from "TeseractAPI/Teseract";
import Entity from "TeseractAPI/entity/Entity";
import NativeParserUtil from "TeseractAPI/util/NativeLocationParser";
import EntityCache from "TeseractAPI/entity/EntityCache";
import EventManager from "../EventManager";
import CachedEntity from "TeseractAPI/entity/CachedEntity";
import CachedVanillaEntity from "TeseractAPI/entity/VanillaCachedEntity";

function parseKillerName(name: string): string {
    if (name == undefined) {
        return undefined;
    }
    let parsedName = name
        .replace(/.+?(:)/g, "")
        .replace(/_/g, " ")
        .replace(/(?<= )./g, (char: string) => char.toUpperCase())
        .replace(/§./g, "")
        .replace(/(\n).+/, "")
        .replace(/ V2/g, (replaceValue: string) =>
            name == "minecraft:zombie_villager_v2" ? "" : replaceValue,
        );
    return parsedName[0].toUpperCase() + parsedName.substring(1);
}

export default class PlayerPostmortalEvent extends PlayerCancellableEventBase {
    public static customDispatcher() {
        try {
            MinecraftServer.world.afterEvents.entityHurt.subscribe((arg) => {
                try {
                    const {
                        hurtEntity: _player,
                        damage: _damage,
                        damageSource: _damageSource,
                    } = arg;

                    if (_damage > 0 || _damageSource.cause !== "none") {
                        return;
                    }

                    const entityHurt =
                        MinecraftServer.world.afterEvents.entityHurt;

                    const data = entityHurt.subscribe((originalData) => {
                        const { hurtEntity, damageSource } = originalData;

                        const player = hurtEntity as MinecraftServer.Player;

                        let damagerWasValid = true;

                        if (
                            player.id != _player.id ||
                            damageSource.cause == "none"
                        ) {
                            return;
                        }

                        //@ts-ignore
                        let damagingEntity =
                            damageSource.cause == "entityExplosion"
                                ? EntityCache.native.get(
                                      damageSource.damagingEntity?.id,
                                  )
                                : damageSource.damagingEntity;

                        const killer =
                            (damagingEntity?.nameTag == ""
                                ? (damagingEntity as MinecraftServer.Player)
                                      ?.name
                                : damagingEntity?.nameTag) ??
                            parseKillerName(damagingEntity?.typeId);

                        const newDamageSource: MinecraftServer.EntityDamageSource =
                            {
                                cause: damageSource.cause,
                                damagingEntity: damageSource.damagingEntity,
                            };

                        let cachedDamager;

                        if (!damageSource.damagingEntity?.isValid()) {
                            damagerWasValid = false;
                            if (
                                damageSource.cause ==
                                MinecraftServer.EntityDamageCause
                                    .entityExplosion
                            ) {
                                cachedDamager = EntityCache.native.get(
                                    damageSource.damagingEntity.id,
                                );
                            }
                        }

                        const eventData = new PlayerPostmortalEvent({
                            hurtEntity: player,
                            damageSource: {
                                damagingEntity: damagerWasValid
                                    ? damageSource.damagingEntity
                                    : cachedDamager,
                                damagingProjectile:
                                    damageSource.damagingProjectile,
                                cause: damageSource.cause,
                            },
                        });

                        EventManager.getInstance().dispatchEvent(
                            "PlayerPostmortalEvent",
                            eventData,
                        );

                        console.warn(eventData.isCanceled());

                        MinecraftServer.world.afterEvents.entityHurt.unsubscribe(
                            data,
                        );

                        if (!eventData.isCanceled()) {
                            return;
                        }

                        const equipment = player.getComponent("equippable");

                        const mainHand = equipment.getEquipmentSlot(
                            MinecraftServer.EquipmentSlot.Mainhand,
                        );
                        const offHand = equipment.getEquipmentSlot(
                            MinecraftServer.EquipmentSlot.Offhand,
                        );

                        const mainItem = mainHand.getItem();
                        const offItem = offHand.getItem();

                        if (
                            mainHand.getItem()?.typeId ==
                            "minecraft:totem_of_undying"
                        ) {
                            if (
                                !MinecraftServer.world.gameRules.keepInventory
                            ) {
                                player.dimension.spawnItem(
                                    mainItem,
                                    player.location,
                                );
                            }
                            mainHand.setItem();
                        }

                        if (
                            offHand.getItem()?.typeId ==
                            "minecraft:totem_of_undying"
                        ) {
                            if (
                                !MinecraftServer.world.gameRules.keepInventory
                            ) {
                                player.dimension.spawnItem(
                                    offItem,
                                    player.location,
                                );
                            }
                            offHand.setItem();
                        }

                        if (!damagerWasValid) {
                            const damager = player.dimension.spawnEntity(
                                cachedDamager.typeId,
                                player.location,
                            );

                            damager.addEffect("invisibility", 20000000);
                            damager.nameTag = cachedDamager.nameTag;

                            newDamageSource.damagingEntity = damager;
                        }

                        function forcePlayerDeath() {
                            if (
                                player.getComponent("health").currentValue > 0
                            ) {
                                player.applyDamage(99999, newDamageSource);
                                forcePlayerDeath();
                            }
                        }

                        for (const effect of player.getEffects()) {
                            player.removeEffect(effect.typeId);
                        }

                        forcePlayerDeath();

                        if (!damagerWasValid) {
                            newDamageSource.damagingEntity?.remove();
                        }

                        if (MinecraftServer.world.gameRules.keepInventory) {
                            mainHand.setItem(mainItem);
                            offHand.setItem(offItem);
                        }
                    });
                } catch (error) {
                    console.warn(error, error.stack);
                }
            });
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    #damageSource: {
        damagingEntity: CachedEntity | Entity;
        damagingProjectile: Entity;
        cause: MinecraftServer.EntityDamageCause;
    };

    constructor(data: {
        hurtEntity: MinecraftServer.Player;
        damageSource: {
            damagingEntity: CachedVanillaEntity | MinecraftServer.Entity;
            damagingProjectile: MinecraftServer.Entity;
            cause: MinecraftServer.EntityDamageCause;
        };
    }) {
        super({ player: data.hurtEntity });
        this.#damageSource = {
            damagingEntity:
                data.damageSource.damagingEntity instanceof CachedVanillaEntity
                    ? new CachedEntity(data.damageSource.damagingEntity)
                    : NativeParserUtil.NativeOptionalEntity(
                          data.damageSource.damagingEntity,
                      ),
            damagingProjectile: NativeParserUtil.NativeOptionalEntity(
                data.damageSource.damagingProjectile,
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
            return this.#damageSource.cause;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Retrieves the entity that caused the damage.
     * @remarks
     * The damager can be a valid instance of {@link Entity} or a {@link CachedEntity} instance. The damager will be a CachedEntity if it wasn't valid during the postmortal activation.  
     * @returns The entity that caused the damage, or undefined if not available.
     */
    public getDamager(): Entity | CachedEntity {
        try {
            return this.#damageSource.damagingEntity;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Retrieves the projectile that caused the damage.
     * @returns The projectile that caused the damage, or undefined if not available.
     */
    public getProjectile(): Entity {
        try {
            return this.#damageSource.damagingProjectile;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
