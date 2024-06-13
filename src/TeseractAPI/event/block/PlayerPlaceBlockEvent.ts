import * as MinecraftServer from "@minecraft/server";
import CancellableBlockEventBase from "./base/CancellableBlockEventBase";
import Teseract from "TeseractAPI/Teseract";
import Location from "TeseractAPI/Location";
import BlockPermutation from "TeseractAPI/block/BlockPermutation";
import Player from "TeseractAPI/entity/Player";
import Dimension from "TeseractAPI/Dimension";

export default class PlayerPlaceBlockEvent extends CancellableBlockEventBase {
    #minecraft_data: {
        dimension: Dimension;
        face: MinecraftServer.Direction;
        faceLocation: Location;
        permutationBeingPlaced: BlockPermutation;
        player: Player;
    };

    constructor(data: MinecraftServer.PlayerPlaceBlockBeforeEvent) {
        super(data);
        this.#minecraft_data = {
            dimension: Teseract.getDimension(data.dimension.id),
            face: data.face,
            faceLocation: new Location(data.faceLocation),
            permutationBeingPlaced: new BlockPermutation(data.permutationBeingPlaced),
            player: new Player(data.player),
        };
    }

    /**
     * @remarks
     * Gets the dimension where the block is being placed.
     * @returns The dimension of the block placement.
     */
    public getDimension(): Dimension {
        try {
            return this.#minecraft_data.dimension;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Gets the face of the block where the placement is occurring.
     * @returns The face direction of the block.
     */
    public getFace(): MinecraftServer.Direction {
        try {
            return this.#minecraft_data.face;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Gets the location of the face where the block is being placed.
     * @returns The location of the block placement face.
     */
    public getFaceLocation(): Location {
        try {
            return this.#minecraft_data.faceLocation;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Gets the block permutation being placed.
     * @returns The block permutation.
     */
    public getPermutationBeingPlaced(): BlockPermutation {
        try {
            return this.#minecraft_data.permutationBeingPlaced;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Gets the player who is placing the block.
     * @returns The player placing the block.
     */
    public getPlayer(): Player {
        try {
            return this.#minecraft_data.player;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
