import * as MinecraftServer from "@minecraft/server";
import Location from "TeseractAPI/Location";
import { Vector3 } from "./Vector";
import Entity from "TeseractAPI/entity/Entity";
import BlockPermutation from "TeseractAPI/block/BlockPermutation";
import { CachedVanillaEntity } from "TeseractAPI/entity/CachedEntity";

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

    public static NativeOptionalEntity(input?: MinecraftServer.Entity | CachedVanillaEntity) {
        const entity = input ? new Entity(input as MinecraftServer.Entity) : undefined;

        return entity;
    }

    public static NativeOptionalPlayer(input?: MinecraftServer.Player) {
        const player = input ? new Entity(input) : undefined;

        return player;
    }
}
