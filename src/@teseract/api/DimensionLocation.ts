import * as MinecraftServer from "@minecraft/server";
import Teseract from "@teseract/api/Teseract";
import Dimension from "@teseract/api/Dimension";
import Location from "@teseract/api/Location";
import { Vector3 } from "./util/Vector";

/**
 * A class that represents an exact coordinate within the {@link @minecraft/server.World}, including its dimension and location.
 */
export default class DimensionLocation extends Location {
    #dimension: Dimension;

    constructor(dimension: Dimension, vector: Vector3);
    constructor(dimension: Dimension, vector: MinecraftServer.Vector3);
    constructor(dimension: Dimension, x: number, y: number, z: number);
    
    constructor(
        dimension: Dimension,
        arg1: Vector3 | MinecraftServer.Vector3 | number,
        y?: number,
        z?: number,
    ) {
        let data;

        if (typeof arg1 === "number") {
            data = { x: arg1, y: y, z: z };
        } else {
            data = { x: arg1.x, y: arg1.y, z: arg1.z };
        }

        super(data);
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
                    this.getDimension().getIdentifier(),
                ),
            };
        } catch (error: any) {
            Teseract.log(error, error.stack);
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
            Teseract.log(error, error.stack);
        }
    }
}
