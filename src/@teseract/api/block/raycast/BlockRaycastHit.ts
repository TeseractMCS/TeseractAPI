import * as MinecraftServer from "@minecraft/server"
import Block from "../Block";
import DimensionLocation from "@teseract/api/DimensionLocation";

export default interface BlockRaycastHit {
    /**
     * @remarks
     * Block that was hit.
     *
     */
    block: Block;
    /**
     * @remarks
     * Face of the block that was hit.
     *
     */
    face: MinecraftServer.Direction;
    /**
     * @remarks
     * Hit location relative to the bottom north-west corner of the
     * block.
     *
     */
    faceLocation: DimensionLocation;
}