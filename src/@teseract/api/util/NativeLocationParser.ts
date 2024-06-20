import * as MinecraftServer from "@minecraft/server";
import Location from "@teseract/api/Location";
import { Vector3 } from "./Vector";
import Entity from "@teseract/api/entity/Entity";
import BlockPermutation from "@teseract/api/block/BlockPermutation";
import CachedVanillaEntity from "@teseract/api/entity/CachedEntity";
import ItemStack from "@teseract/api/Inventory/ItemStack";
import Player from "@teseract/api/entity/Player";

export default class NativeParserUtil {
    public static ToNativeLocation(
        input: Location | Vector3 | MinecraftServer.Vector3,
    ): Vector3 {
        const location =
            input instanceof Location ? input.getVector() : new Vector3(input);

        return location;
    }

    public static ToNativePermutation(input: any) {
        const permutation =
            input instanceof BlockPermutation ? input.getNativeHandle() : input;
        return permutation;
    }

    /**
     * @deprecated Pendejo no dura nada
     * Use {@link NativeParserUtil.ToNativeLocation} instead
     */
    public static ToWrappedVector3(
        input: Location | Vector3 | MinecraftServer.Vector3,
    ): Vector3 {
        const vector =
            input instanceof Location
                ? new Vector3(input.getVector())
                : input instanceof Vector3
                ? input
                : new Vector3(input);

        return vector;
    }

    public static NativeOptionalEntity(
        input?: MinecraftServer.Entity | CachedVanillaEntity,
    ) {
        //@ts-ignore
        if (input?.typeId == "minecraft:player") {
            return new Player(input as MinecraftServer.Player)
        } 
        const entity = input
            ? new Entity(input as MinecraftServer.Entity)
            : undefined;


        return entity;
    }

    public static NativeOptionalItemStack(input?: MinecraftServer.ItemStack) {
        const entity = input ? new ItemStack(input) : undefined;

        return entity;
    }

    public static NativeOptionalPlayer(input?: MinecraftServer.Player) {
        const player = input ? new Entity(input) : undefined;

        return player;
    }
}
