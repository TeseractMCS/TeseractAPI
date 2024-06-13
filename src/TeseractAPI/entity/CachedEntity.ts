import * as MinecraftServer from "@minecraft/server";
import Entity from "./Entity";
//@ts-ignore
export class CachedVanillaEntity {
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

export default class CachedEntity extends Entity {
    constructor(data: CachedVanillaEntity) {
        super(data as unknown as MinecraftServer.Entity);
    }
}
