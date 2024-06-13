import * as MinecraftServer from "@minecraft/server";
import Teseract from "./Teseract";
import Location, { LocationParseFormat } from "./Location";
import { Vector3 } from "./util/Vector";
import BlockPermutation from "./block/BlockPermutation";
import ExplosionOptions from "./options/ExplosionOptions";
import ItemStack from "./Inventory/ItemStack";
import Entity from "./entity/Entity";
import NativeParserUtil from "./util/NativeLocationParser";
import EntityQueryOptions from "./options/entity/query/EntityQueryOptions";
import Player from "./entity/Player";
import EntityRaycastOptions from "./options/entity/raycast/EntityRaycastOptions";
import EntityRaycastHit from "./options/entity/raycast/EntityRaycastHit";
import Block from "./block/Block";
import BlockFilter from "./block/BlockFilter";
import BlockFillOptions from "./block/BlockFillOptions";
import BlockRaycastHit from "./block/raycast/BlockRaycastHit";
import DimensionLocation from "./DimensionLocation";
import BlockRaycastOptions from "./block/raycast/BlockRaycastOptions";

// import BlockVolumeBase from "./block/BlockVolumeBase";
// import ListBlockVolume from "./block/ListBlockVolume";

export default abstract class Dimension {
    #dimension_data: MinecraftServer.Dimension;
    constructor(dimensionData: MinecraftServer.Dimension) {
        this.#dimension_data = dimensionData;
    }

    /**
     * @remarks
     * Gets the desired dimension identifier
     * @returns The desired dimension identifier string
     */
    public getIdentifier(): string {
        return this.#dimension_data.id;
    }

    /**
     * @beta
     *
     * @throws
     * This function can throw errors.
     *
     * {@link Error}
     * {@link UnloadedChunksError}
     * @param volume BlockVolume to serach for the desired block filter
     * @param filter BlockFilter for searching specific block attributes
     * @param allowUnloadedChunks
     * @returns Returns wheter the given BlockVolume includes a block according to the {@link volume} filter
     */
    public containsBlock(
        volume: MinecraftServer.BlockVolumeBase,
        filter: MinecraftServer.BlockFilter,
        allowUnloadedChunks?: boolean | undefined,
    ): boolean {
        try {
            return this.#dimension_data.containsBlock(
                volume,
                filter,
                allowUnloadedChunks,
            );
        } catch (error) {
            Teseract.log(error);
            return false;
        }
    }

    public createExplosion(
        location:
            | Vector3
            | Location
            | MinecraftServer.Vector3
            | Vector3
            | Location,
        radius: number,
        explosionOptions?: ExplosionOptions | undefined,
    ): boolean {
        try {
            const destination =
                location instanceof Location ? location.getVector() : location;
            (
                explosionOptions as unknown as MinecraftServer.ExplosionOptions
            ).source = explosionOptions.source.getNativeHandle();

            return this.#dimension_data.createExplosion(
                destination,
                radius,
                explosionOptions as unknown as MinecraftServer.ExplosionOptions,
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public fillBlocks(
        begin: MinecraftServer.Vector3 | Vector3 | Location,
        end: MinecraftServer.Vector3 | Vector3 | Location,
        block: string | BlockPermutation | MinecraftServer.BlockType,
        options?: BlockFillOptions | undefined,
    ): number {
        try {
            return this.#dimension_data.fillBlocks(
                NativeParserUtil.ToNativeLocation(begin),
                NativeParserUtil.ToNativeLocation(end),
                NativeParserUtil.ToNativePermutation(block),
                {
                    matchingBlock: options.matchingBlock.getNativeHandle(),
                },
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public findClosestBiome(
        pos: MinecraftServer.Vector3 | Vector3 | Location,
        biomeToFind: string | MinecraftServer.BiomeType,
        options?: MinecraftServer.BiomeSearchOptions | undefined,
    ): Vector3 | undefined {
        try {
            const biomeLoc = this.#dimension_data.findClosestBiome(
                NativeParserUtil.ToNativeLocation(pos),
                biomeToFind,
                options,
            );
            return biomeLoc ? new Vector3(biomeLoc) : undefined;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getBlock(
        location: MinecraftServer.Vector3 | Vector3 | Location,
    ): Block | undefined {
        try {
            const block = this.#dimension_data.getBlock(
                NativeParserUtil.ToNativeLocation(location),
            );
            return block ? new Block(block) : undefined;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getBlockFromRay(
        location: MinecraftServer.Vector3 | Vector3 | Location,
        direction: MinecraftServer.Vector3 | Vector3 | Location,
        options?: BlockRaycastOptions | undefined,
    ): BlockRaycastHit | undefined {
        try {
            const hit = this.#dimension_data.getBlockFromRay(
                NativeParserUtil.ToNativeLocation(location),
                NativeParserUtil.ToNativeLocation(direction),
                options,
            );

            if (!hit) {
                return undefined;
            }

            const parsedHit = {
                block: new Block(hit.block),
                face: hit.face,
                faceLocation: new DimensionLocation(this, hit.faceLocation),
            };

            return parsedHit;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getBlocks(
        volume: MinecraftServer.BlockVolumeBase,
        filter: BlockFilter,
        allowUnloadedChunks?: boolean | undefined,
    ): MinecraftServer.ListBlockVolume {
        try {
            return this.#dimension_data.getBlocks(
                volume,
                filter,
                allowUnloadedChunks,
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getEntities(options?: EntityQueryOptions | undefined): Entity[] {
        try {
            return this.#dimension_data
                .getEntities()
                .map((entity) => new Entity(entity));
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getEntitiesAtBlockLocation(
        location: MinecraftServer.Vector3 | Vector3 | Location,
    ): Entity[] {
        try {
            return this.#dimension_data
                .getEntitiesAtBlockLocation(
                    NativeParserUtil.ToNativeLocation(location),
                )
                .map((entity) => new Entity(entity));
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getEntitiesFromRay(
        location: MinecraftServer.Vector3 | Vector3 | Location,
        direction: MinecraftServer.Vector3 | Vector3 | Location,
        options?: EntityRaycastOptions | undefined,
    ): EntityRaycastHit[] {
        try {
            const hits = this.#dimension_data.getEntitiesFromRay(
                NativeParserUtil.ToNativeLocation(location),
                NativeParserUtil.ToNativeLocation(direction),
                options,
            );

            return hits?.map((hit) => {
                const parsedHit = {
                    entity: NativeParserUtil.NativeOptionalEntity(hit.entity),
                    distance: hit.distance,
                };
                return parsedHit;
            });
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getPlayers(options?: EntityQueryOptions | undefined): Player[] {
        try {
            return this.#dimension_data
                .getPlayers(options)
                .map((p) => new Player(p));
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getWeather(): MinecraftServer.WeatherType {
        try {
            return this.#dimension_data.getWeather();
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public playSound(
        soundId: string,
        location: MinecraftServer.Vector3 | Vector3 | Location,
        soundOptions?: MinecraftServer.WorldSoundOptions | undefined,
    ): void {
        try {
            const destination = NativeParserUtil.ToNativeLocation(location);

            this.#dimension_data.playSound(soundId, destination, soundOptions);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public runCommand(commandString: string): MinecraftServer.CommandResult {
        return this.#dimension_data.runCommand(commandString);
    }

    public runCommandAsync(
        commandString: string,
    ): Promise<MinecraftServer.CommandResult> {
        return this.#dimension_data.runCommandAsync(commandString);
    }

    public setBlockPermutation(
        location: MinecraftServer.Vector3 | Vector3 | Location,
        permutation: BlockPermutation,
    ): void {
        try {
            this.#dimension_data.setBlockPermutation(
                NativeParserUtil.ToNativeLocation(location),
                permutation.getNativeHandle(),
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public setBlockType(
        location: MinecraftServer.Vector3 | Vector3 | Location,
        blockType: string | MinecraftServer.BlockType,
    ): void {
        try {
            this.#dimension_data.setBlockType(
                NativeParserUtil.ToNativeLocation(location),
                blockType,
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public setWeather(
        weatherType: MinecraftServer.WeatherType,
        duration?: number | undefined,
    ): void {
        try {
            this.#dimension_data.setWeather(weatherType, duration);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public spawnEntity(
        identifier: string,
        location: MinecraftServer.Vector3 | Vector3 | Location,
        options?: MinecraftServer.SpawnEntityOptions | undefined,
    ): Entity {
        try {
            return new Entity(
                this.#dimension_data.spawnEntity(
                    identifier,
                    NativeParserUtil.ToNativeLocation(location),
                    options,
                ),
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public spawnItem(
        itemStack: ItemStack,
        location:
            | Vector3
            | Location
            | MinecraftServer.Vector3
            | Vector3
            | Location,
    ): Entity {
        try {
            return new Entity(
                this.#dimension_data.spawnItem(
                    itemStack.getNativeHandle(),
                    NativeParserUtil.ToNativeLocation(location),
                ),
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public spawnParticle(
        effectName: string,
        location: Vector3 | MinecraftServer.Vector3 | Location,
        molangVariables?: MinecraftServer.MolangVariableMap | undefined,
    ): void {
        try {
            this.#dimension_data.spawnParticle(
                effectName,
                NativeParserUtil.ToNativeLocation(location),
                molangVariables,
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
