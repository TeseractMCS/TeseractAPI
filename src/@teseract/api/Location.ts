import * as MinecraftServer from "@minecraft/server";
import Dimension from "@teseract/api/Dimension";
import Chunk from "@teseract/api/Chunk";
import Teseract from "@teseract/api/Teseract";
import { Vector3 } from "@teseract/api/util/Vector";

export enum LocationParseFormat {
    FORMAT1 = "{x}, {y}, {z}",
    FORMAT2 = "{x: x, y: y, z: z}",
    FORMAT3 = "x: {x}, y: {y}, z: {z}",
    FORMAT4 = "{z} - {y} - {x}",
    FORMAT5 = "({x}, {y}, {z})",
    FORMAT6 = "x={x}, y={y}, z={z}",
    FORMAT7 = "z={z}, y={y}, x={x}",
    FORMAT8 = "[{x}, {y}, {z}]",
}

export default class Location {
    #Location: MinecraftServer.Vector3;

    constructor(vector: Vector3);
    constructor(vector: MinecraftServer.Vector3);
    constructor(x: number, y: number, z: number);

    constructor(arg1: Vector3 | MinecraftServer.Vector3 | number, y?: number, z?: number) {
        if (typeof arg1 === 'number') {
            this.#Location = { x: arg1, y: y!, z: z! };
        } else {
            this.#Location = { x: arg1.x, y: arg1.y, z: arg1.z };
        }
    }

    /**
     * @remarks
     * Parses the x. y and z component of this Location on a string
     * @param format Desired location parse format, which can be an string including {x}, {y} and {z} placeholders that will be replaced with the desired value, or a pre-defined {@link LocationParseFormat}
     * @param fixed
     * @returns
     */
    public parse(format: LocationParseFormat | string, fixed?: number): string {
        try {
            const x = fixed
                ? this.getX().toFixed(fixed)
                : this.getX().toString();
            const y = fixed
                ? this.getY().toFixed(fixed)
                : this.getY().toString();
            const z = fixed
                ? this.getZ().toFixed(fixed)
                : this.getZ().toString();
            const formattedLocation = format
                .replace(/{x}/g, x)
                .replace(/{y}/g, y)
                .replace(/{z}/g, z);
            return formattedLocation;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }

    /**
     * @remarks
     * Gets this location as a {@link Vector3} instance, including Math utils.
     * @returns
     * A Vector3 object.
     */
    public getVector(): Vector3 {
        try {
            return new Vector3(this.#Location);
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }

    public getChunk(): Chunk {
        try {
            return new Chunk(this.getX(), this.getZ());
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }

    public add(location: MinecraftServer.Vector3 | Vector3 | Location) {
        try {
            let targetLoc;
            if (location instanceof Location) {
                targetLoc = location.getVector();
            } else {
                targetLoc = location;
            }
            this.#Location.x += targetLoc.x;
            this.#Location.y += targetLoc.y;
            this.#Location.z += targetLoc.z;
        } catch (error) {}
    }
    public addX(amount: number) {
        try {
            this.#Location.x = this.#Location.x += amount;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
    public addY(amount: number) {
        try {
            this.#Location.y = this.#Location.y += amount;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
    public addZ(amount: number) {
        try {
            this.#Location.z = this.#Location.z += amount;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
    public removeX(amount: number) {
        try {
            this.#Location.x = this.#Location.x -= amount;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
    public removeY(amount: number) {
        try {
            this.#Location.y = this.#Location.y -= amount;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
    public removeZ(amount: number) {
        try {
            this.#Location.z = this.#Location.z -= amount;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
    public getX(): number {
        try {
            return this.#Location.x;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
    public setX(newValue: number): void {
        try {
            this.#Location.x = newValue;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
    public getY(): number {
        try {
            return this.#Location.y;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
    public setY(newValue: number): void {
        try {
            this.#Location.y = newValue;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
    public getZ(): number {
        try {
            return this.#Location.z;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
    public setZ(newValue: number): void {
        try {
            this.#Location.z = newValue;
        } catch (error: any) {
            Teseract.log(error, error.stack)
        }
    }
}
