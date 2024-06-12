import * as MinecraftServer from "@minecraft/server";

export default class Block {
    #block: MinecraftServer.Block;
    constructor(block: MinecraftServer.Block) {
        this.#block = block;
    }
    dimension: MinecraftServer.Dimension;
    isAir: boolean;
    isLiquid: boolean;
    isSolid: boolean;
    isWaterlogged: boolean;
    location: MinecraftServer.Vector3;
    permutation: MinecraftServer.BlockPermutation;
    type: MinecraftServer.BlockType;
    typeId: string;
    x: number;
    y: number;
    z: number;
    above(steps?: number): MinecraftServer.Block {
        throw new Error("Method not implemented.");
    }
    below(steps?: number): MinecraftServer.Block {
        throw new Error("Method not implemented.");
    }
    bottomCenter(): MinecraftServer.Vector3 {
        throw new Error("Method not implemented.");
    }
    canPlace(
        blockToPlace:
            | string
            | MinecraftServer.BlockType
            | MinecraftServer.BlockPermutation,
        faceToPlaceOn?: MinecraftServer.Direction
    ): boolean {
        throw new Error("Method not implemented.");
    }
    center(): MinecraftServer.Vector3 {
        throw new Error("Method not implemented.");
    }
    east(steps?: number): MinecraftServer.Block {
        throw new Error("Method not implemented.");
    }
    getComponent<T extends keyof MinecraftServer.BlockComponentTypeMap>(
        componentId: T
    ): MinecraftServer.BlockComponentTypeMap[T] {
        throw new Error("Method not implemented.");
    }
    getItemStack(
        amount?: number,
        withData?: boolean
    ): MinecraftServer.ItemStack {
        throw new Error("Method not implemented.");
    }
    getRedstonePower(): number {
        throw new Error("Method not implemented.");
    }
    getTags(): string[] {
        throw new Error("Method not implemented.");
    }
    hasTag(tag: string): boolean {
        throw new Error("Method not implemented.");
    }
    isValid(): boolean {
        throw new Error("Method not implemented.");
    }
    matches(
        blockName: string,
        states?: Record<string, string | number | boolean>
    ): boolean {
        throw new Error("Method not implemented.");
    }
    north(steps?: number): MinecraftServer.Block {
        throw new Error("Method not implemented.");
    }
    offset(offset: MinecraftServer.Vector3): MinecraftServer.Block {
        throw new Error("Method not implemented.");
    }
    setPermutation(permutation: MinecraftServer.BlockPermutation): void {
        throw new Error("Method not implemented.");
    }
    setType(blockType: string | MinecraftServer.BlockType): void {
        throw new Error("Method not implemented.");
    }
    setWaterlogged(isWaterlogged: boolean): void {
        throw new Error("Method not implemented.");
    }
    south(steps?: number): MinecraftServer.Block {
        throw new Error("Method not implemented.");
    }
    trySetPermutation(permutation: MinecraftServer.BlockPermutation): boolean {
        throw new Error("Method not implemented.");
    }
    west(steps?: number): MinecraftServer.Block {
        throw new Error("Method not implemented.");
    }
}
