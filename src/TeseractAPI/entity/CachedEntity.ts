import * as MinecraftServer from "@minecraft/server";
import Entity from "./Entity";
import CachedVanillaEntity from "./VanillaCachedEntity";

export default class CachedEntity extends Entity {
    #nativeCache: CachedVanillaEntity;
    constructor(data: CachedVanillaEntity) {
        super(data as unknown as MinecraftServer.Entity);
        this.#nativeCache = data;
    }

    public getNativeCache() {
        return this.#nativeCache;
    }
    
    override isCachedEntity() {
        return true;
    }
}
