// import * as MinecraftServer from "@minecraft/server";
// import Location from "TeseractAPI/Location";
// import Teseract from "TeseractAPI/Teseract";
// import NativeParserUtil from "TeseractAPI/util/NativeLocationParser";
// import { Vector3 } from "TeseractAPI/util/Vector";

// export default class BlockVolumeBase {
//     #volumeBase: MinecraftServer.BlockVolumeBase;

//     constructor(data: MinecraftServer.BlockVolumeBase) {
//         this.#volumeBase = data;
//     }

//     /**
//      * @remarks
//      * Fetch a {@link BlockLocationIterator} that represents all of
//      * the block world locations within the specified volume
//      *
//      * This function can't be called in read-only mode.
//      *
//      * @throws This function can throw errors.
//      */
//     public getBlockLocationIterator(): MinecraftServer.BlockLocationIterator {
//         try {
//             return this.#volumeBase.getBlockLocationIterator();
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }

//     /**
//      * @remarks
//      * Return a {@link BoundingBox} object which represents the
//      * validated min and max coordinates of the volume
//      *
//      * This function can't be called in read-only mode.
//      *
//      * @throws This function can throw errors.
//      */
//     public getBoundingBox(): MinecraftServer.BoundingBox {
//         try {
//             return this.#volumeBase.getBoundingBox();
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }

//     /**
//      * @remarks
//      * Return the capacity (volume) of the BlockVolume (W*D*H)
//      *
//      * This function can't be called in read-only mode.
//      *
//      * @throws This function can throw errors.
//      */
//     getCapacity(): number {
//         try {
//             return this.#volumeBase.getCapacity();
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }

//     /**
//      * @remarks
//      * Get the largest corner position of the volume (guaranteed to
//      * be >= min)
//      *
//      * This function can't be called in read-only mode.
//      *
//      * @throws This function can throw errors.
//      */
//     public getMax(): Vector3 {
//         try {
//             const max = this.#volumeBase.getMax();
//             return new Vector3({ x: max.x, y: max.y, z: max.z });
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }

//     /**
//      * @remarks
//      * Get the smallest corner position of the volume (guaranteed
//      * to be <= max)
//      *
//      * This function can't be called in read-only mode.
//      *
//      * @throws This function can throw errors.
//      */
//     public getMin(): Vector3 {
//         try {
//             const min = this.#volumeBase.getMin();
//             return new Vector3({ x: min.x, y: min.y, z: min.z });
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }

//     /**
//      * @remarks
//      * Get a {@link Vector3} object where each component represents
//      * the number of blocks along that axis
//      *
//      * This function can't be called in read-only mode.
//      *
//      * @throws This function can throw errors.
//      */
//     public getSpan(): Vector3 {
//         try {
//             const span = this.#volumeBase.getSpan();
//             return new Vector3({ x: span.x, y: span.y, z: span.z });
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }

//     /**
//      * @remarks
//      * Check to see if a given world block location is inside a
//      * BlockVolume
//      *
//      * This function can't be called in read-only mode.
//      *
//      * @throws This function can throw errors.
//      */
//     public isInside(pos: MinecraftServer.Vector3 | Vector3 | Location): boolean {
//         try {
//             return this.#volumeBase.isInside(
//                 NativeParserUtil.ToNativeLocation(pos),
//             );
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }

//     /**
//      * @remarks
//      * Move a BlockVolume by a specified amount
//      *
//      * This function can't be called in read-only mode.
//      *
//      * @param delta
//      * Amount of blocks to move by
//      *
//      * @throws This function can throw errors.
//      */
//     public translate(delta: MinecraftServer.Vector3 | Vector3 | Location): void {
//         try {
//             this.#volumeBase.translate(
//                 NativeParserUtil.ToNativeLocation(delta),
//             );
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }
// }
