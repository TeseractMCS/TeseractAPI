import { NumberRange } from "@minecraft/common";
import {
    BiomeSearchOptions,
    BiomeType,
    Block,
    BlockFillOptions,
    BlockFilter,
    BlockPermutation,
    BlockRaycastHit,
    BlockRaycastOptions,
    BlockType,
    BlockVolumeBase,
    CommandResult,
    Entity,
    EntityQueryOptions,
    EntityRaycastHit,
    EntityRaycastOptions,
    ExplosionOptions,
    ItemStack,
    ListBlockVolume,
    Dimension as MinecraftDimension,
    MolangVariableMap,
    Player,
    SpawnEntityOptions,
    Vector3,
    WeatherType,
    WorldSoundOptions,
    UnloadedChunksError
} from "@minecraft/server";
import Teseract from "./Teseract";

export default abstract class Dimension {
    #dimension_data: MinecraftDimension;
    constructor(dimensionData: MinecraftDimension) {
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
    containsBlock(
        volume: BlockVolumeBase,
        filter: BlockFilter,
        allowUnloadedChunks?: boolean | undefined
    ): boolean {
        try {
            return this.#dimension_data.containsBlock(
                volume,
                filter,
                allowUnloadedChunks
            );
        } catch (error) {
            Teseract.log(error);
            return false;
        }
    }

    createExplosion(
        location: Vector3,
        radius: number,
        explosionOptions?: ExplosionOptions | undefined
    ): boolean {
        throw new Error("Method not implemented.");
    }
    fillBlocks(
        begin: Vector3,
        end: Vector3,
        block: string | BlockPermutation | BlockType,
        options?: BlockFillOptions | undefined
    ): number {
        throw new Error("Method not implemented.");
    }
    findClosestBiome(
        pos: Vector3,
        biomeToFind: string | BiomeType,
        options?: BiomeSearchOptions | undefined
    ): Vector3 | undefined {
        throw new Error("Method not implemented.");
    }
    getBlock(location: Vector3): Block | undefined {
        throw new Error("Method not implemented.");
    }
    getBlockFromRay(
        location: Vector3,
        direction: Vector3,
        options?: BlockRaycastOptions | undefined
    ): BlockRaycastHit | undefined {
        throw new Error("Method not implemented.");
    }
    getBlocks(
        volume: BlockVolumeBase,
        filter: BlockFilter,
        allowUnloadedChunks?: boolean | undefined
    ): ListBlockVolume {
        throw new Error("Method not implemented.");
    }
    getEntities(options?: EntityQueryOptions | undefined): Entity[] {
        throw new Error("Method not implemented.");
    }
    getEntitiesAtBlockLocation(location: Vector3): Entity[] {
        throw new Error("Method not implemented.");
    }
    getEntitiesFromRay(
        location: Vector3,
        direction: Vector3,
        options?: EntityRaycastOptions | undefined
    ): EntityRaycastHit[] {
        throw new Error("Method not implemented.");
    }
    getPlayers(options?: EntityQueryOptions | undefined): Player[] {
        throw new Error("Method not implemented.");
    }
    getWeather(): WeatherType {
        throw new Error("Method not implemented.");
    }
    playSound(
        soundId: string,
        location: Vector3,
        soundOptions?: WorldSoundOptions | undefined
    ): void {
        throw new Error("Method not implemented.");
    }
    runCommand(commandString: string): CommandResult {
        throw new Error("Method not implemented.");
    }
    runCommandAsync(commandString: string): Promise<CommandResult> {
        throw new Error("Method not implemented.");
    }
    setBlockPermutation(
        location: Vector3,
        permutation: BlockPermutation
    ): void {
        throw new Error("Method not implemented.");
    }
    setBlockType(location: Vector3, blockType: string | BlockType): void {
        throw new Error("Method not implemented.");
    }
    setWeather(weatherType: WeatherType, duration?: number | undefined): void {
        throw new Error("Method not implemented.");
    }
    spawnEntity(
        identifier: string,
        location: Vector3,
        options?: SpawnEntityOptions | undefined
    ): Entity {
        throw new Error("Method not implemented.");
    }
    spawnItem(itemStack: ItemStack, location: Vector3): Entity {
        throw new Error("Method not implemented.");
    }
    spawnParticle(
        effectName: string,
        location: Vector3,
        molangVariables?: MolangVariableMap | undefined
    ): void {
        throw new Error("Method not implemented.");
    }
}
