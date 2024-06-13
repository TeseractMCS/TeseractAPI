import * as MinecraftServer from "@minecraft/server";
import Dimension from "../Dimension";
import Teseract from "../Teseract";
import Location from "../Location";
import ItemStack from "../Inventory/ItemStack";
import Chunk from "../Chunk";
import BlockPermutation from "./BlockPermutation";

export default class Block {
    #block: MinecraftServer.Block;

    constructor(block: MinecraftServer.Block) {
        this.#block = block;
    }

    public getChunk(): Chunk {
        try {
            return this.getLocation().getChunk();
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Return the identifier of the dimension.
     */
    public getDimension(): Dimension {
        try {
            return Teseract.getDimension(this.#block.dimension.id);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Returns true if this block is an air block (i.e., empty
     * space).
     *
     * @throws This property can throw when used.
     *
     * {@link MinecraftServer.LocationInUnloadedChunkError}
     *
     * {@link MinecraftServer.LocationOutOfWorldBoundariesError}
     */
    public isAir(): boolean {
        try {
            return this.#block.isAir;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Returns true if this block is an air block (i.e., empty
     * space).
     *
     * @throws This property can throw when used.
     *
     * {@link MinecraftServer.LocationInUnloadedChunkError}
     *
     * {@link MinecraftServer.LocationOutOfWorldBoundariesError}
     */
    public isLiquid(): boolean {
        try {
            return this.#block.isAir;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @beta
     * @remarks
     * Returns true if this block is solid and impassible - (e.g.,
     * a cobblestone block and a diamond block are solid, while a
     * ladder block and a fence block are not).
     *
     * @throws This property can throw when used.
     *
     * {@link MinecraftServer.LocationInUnloadedChunkError}
     *
     * {@link MinecraftServer.LocationOutOfWorldBoundariesError}
     */
    public isSolid(): boolean {
        try {
            return this.#block.isSolid;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @beta
     * @remarks
     * Returns or sets whether this block has a liquid on it.
     *
     * @throws This property can throw when used.
     *
     * {@link MinecraftServer.LocationInUnloadedChunkError}
     *
     * {@link MinecraftServer.LocationOutOfWorldBoundariesError}
     */
    public isWaterlogged(): boolean {
        try {
            return this.#block.isWaterlogged;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Returns the coordinates of the specified block.
     *
     * @throws This property can throw when used.
     */
    public getLocation(): Location {
        try {
            return new Location(this.#block.location);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getPermutation(): BlockPermutation {
        try {
            return new BlockPermutation(this.#block.permutation);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getType(): MinecraftServer.BlockType {
        try {
            return this.#block.type;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getTypeId(): string {
        try {
            return this.#block.typeId;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getX(fixed?: number): number {
        try {
            const x = this.#block.location.x;
            return fixed ? parseFloat(x.toFixed(fixed)) : x;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getY(fixed?: number): number {
        try {
            const y = this.#block.location.y;
            return fixed ? parseFloat(y.toFixed(fixed)) : y;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getZ(fixed?: number): number {
        try {
            const z = this.#block.location.z;
            return fixed ? parseFloat(z.toFixed(fixed)) : z;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public above(steps?: number): Block {
        try {
            const block = this.#block.above(steps);
            return new Block(block);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public below(steps?: number): Block {
        try {
            const block = this.#block.below(steps);
            return new Block(block);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public bottomCenter(): Location {
        try {
            return new Location(this.#block.bottomCenter());
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public canPlace(
        blockToPlace: string | MinecraftServer.BlockType | BlockPermutation,
        faceToPlaceOn?: MinecraftServer.Direction
    ): boolean {
        try {
            const permutation =
                blockToPlace instanceof BlockPermutation
                    ? blockToPlace.getNativeHandle()
                    : blockToPlace;

            return this.#block.canPlace(permutation, faceToPlaceOn);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public center(): Location {
        try {
            return new Location(this.#block.center());
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public east(steps?: number): Block {
        try {
            const block = this.#block.east(steps);
            return new Block(block);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getComponent<T extends keyof MinecraftServer.BlockComponentTypeMap>(
        componentId: T
    ): MinecraftServer.BlockComponentTypeMap[T] {
        try {
            return this.#block.getComponent(componentId);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getItemStack(amount?: number, withData?: boolean): ItemStack {
        try {
            return new ItemStack(this.#block.getItemStack(amount, withData));
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getRedstonePower(): number {
        try {
            return this.#block.getRedstonePower();
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getTags(): string[] {
        try {
            return this.#block.getTags();
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public hasTag(tag: string): boolean {
        try {
            return this.#block.hasTag(tag);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public isValid(): boolean {
        return this.#block.isValid();
    }

    public matches(
        blockName: string,
        states?: Record<string, string | number | boolean>
    ): boolean {
        try {
            return this.#block.matches(blockName, states);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public north(steps?: number): Block {
        try {
            const block = this.#block.north(steps);
            return new Block(block);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public offset(offset: MinecraftServer.Vector3): Block {
        try {
            const block = this.#block.offset(offset);
            return new Block(block);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public setPermutation(permutation: BlockPermutation): void {
        try {
            this.#block.setPermutation(permutation.getNativeHandle());
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public setType(blockType: string | MinecraftServer.BlockType): void {
        try {
            this.#block.setType(blockType);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public setWaterlogged(isWaterlogged: boolean): void {
        try {
            this.#block.setWaterlogged(isWaterlogged);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public south(steps?: number): Block {
        try {
            const block = this.#block.south(steps);
            return new Block(block);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public trySetPermutation(permutation: BlockPermutation): boolean {
        try {
            return this.#block.trySetPermutation(
                permutation.getNativeHandle()
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public west(steps?: number): Block {
        try {
            const block = this.#block.west(steps);
            return new Block(block);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
