import * as MinecraftServer from "@minecraft/server";
import ItemStack from "TeseractAPI/Inventory/ItemStack";
import Teseract from "TeseractAPI/Teseract";

export default class BlockPermutation {
    #permutation: MinecraftServer.BlockPermutation;
    // public static __instance: BlockPermutation
    constructor(data: MinecraftServer.BlockPermutation) {
        this.#permutation = data;
        // BlockPermutation.__instance = this
    }

    public getNativeHandle(): MinecraftServer.BlockPermutation {
        try {
            return this.#permutation
        } catch (error) {
            Teseract.log(error, error.stack)
        }
    }

    public static resolve(
        blockName: string,
        states?: Record<string, string | number | boolean>
    ) {
        try {
            return MinecraftServer.BlockPermutation.resolve(blockName, states);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getType(): MinecraftServer.BlockType {
        try {
            return this.#permutation.type;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public clone(): BlockPermutation {
        try {
            return new BlockPermutation(this.#permutation.clone());
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getAllStates(): Record<string, string | number | boolean> {
        try {
            return this.#permutation.getAllStates();
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getItemStack(amount?: number): ItemStack {
        try {
            return new ItemStack(this.#permutation.getItemStack(amount));
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getState(stateName: string): string | number | boolean {
        try {
            return this.#permutation.getState(stateName);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public getTags(): string[] {
        try {
            return this.#permutation.getTags();
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public hasTag(tag: string): boolean {
        try {
            return this.#permutation.hasTag(tag);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public matches(
        blockName: string,
        states?: Record<string, string | number | boolean>
    ): boolean {
        try {
            return this.#permutation.matches(blockName, states);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    public withState(
        name: string,
        value: string | number | boolean
    ): BlockPermutation {
        try {
            return new BlockPermutation(
                this.#permutation.withState(name, value)
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}
