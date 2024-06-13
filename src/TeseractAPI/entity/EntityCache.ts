import * as MinecraftServer from "@minecraft/server";
import CachedEntity, { CachedVanillaEntity } from "./CachedEntity";

const EntityCache = {
    cache: new Map<string, CachedEntity>(),
    native: new Map<string, CachedVanillaEntity>() 
};

MinecraftServer.world.beforeEvents.explosion.subscribe((arg) => {
    if (!arg.source) {
        return;
    }
    const { source } = arg;
    EntityCache.cache.set(
        arg.source.id,
        new CachedEntity(new CachedVanillaEntity(source)),
    );
    EntityCache.native.set(arg.source.id, new CachedVanillaEntity(source))
});

export default EntityCache;
