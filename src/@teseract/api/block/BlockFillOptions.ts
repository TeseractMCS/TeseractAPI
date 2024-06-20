import BlockPermutation from "./BlockPermutation";
import * as MinecraftServer from "@minecraft/server"
import BlockFilter from "./BlockFilter"
export default interface BlockFillOptions {
    blockFilter?: BlockFilter;
    ignoreChunkBoundErrors?: boolean;
}
