import * as MinecraftServer from "@minecraft/server"

export default class CachedVanillaEntity {
    #instance: MinecraftServer.Entity;
    constructor(entity: MinecraftServer.Entity) {
        for (let x in entity) {
            let cache = entity as any;
            this[x] = cache[x];
        }
        this.#instance = entity;
    }

    getInstance() {
        return this.#instance;
    }

    isCachedEntity() {
        return true;
    }
    [key: string]: any;
}
