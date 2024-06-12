import * as MinecraftServer from "@minecraft/server";
import Teseract from "TeseractAPI/Teseract";
import Dimension from "TeseractAPI/Dimension";
import Location from "TeseractAPI/Location";

/**
 * A class that represents an exact coordinate within the {@link @minecraft/server.World}, including its dimension and location.
 */
export default class DimensionLocation extends Location {
    #dimension: Dimension;

    constructor(x: number, y: number, z: number, dimension: Dimension) {
        super(x, y, z);
        this.#dimension = dimension;
    }

    /**
     * @remarks
     * Gets the {@link @minecraft/server.DimensionLocation} instance of this same DimensionLocation.
     * @returns
     */
    public getMinecraftDimensionLocation(): MinecraftServer.DimensionLocation {
        try {
            return {
                x: this.getX(),
                y: this.getY(),
                z: this.getZ(),
                dimension: MinecraftServer.world.getDimension(
                    this.getDimension().getIdentifier()
                ),
            };
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }

    /**
     * @remarks
     * Gets the dimension where the {@link DimensionLocation} exists in.
     * @returns
     * The dimension where the location belongs to.
     */
    public getDimension(): Dimension {
        try {
            return this.#dimension;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
}
