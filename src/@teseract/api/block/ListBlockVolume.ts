// import * as MinecraftServer from "@minecraft/server";
// import Location from "TeseractAPI/Location";
// import Teseract from "TeseractAPI/Teseract";
// import NativeParserUtil from "TeseractAPI/util/NativeLocationParser";
// import { Vector3 } from "TeseractAPI/util/Vector";
// import BlockVolumeBase from "./BlockVolumeBase";

// /**
//  * @beta
//  */
// export default class ListBlockVolume extends BlockVolumeBase {
//     #locations: Vector3[];

//     constructor(locations: (MinecraftServer.Vector3 | Vector3 | Location)[]) {
//         super()
//         this.#locations = locations.map((location) =>
//             NativeParserUtil.ToNativeLocation(location),
//         );
//     }

//     /**
//      * @remarks
//      * Insert locations into container.
//      * @param locations An array of Vector3 objects to add to the container.
//      */
//     add(locations: Vector3[]): void {
//         try {
//             const newLocations = locations.map((location) =>
//                 NativeParserUtil.ToNativeLocation(location),
//             );
//             this.#locations.push(...newLocations);
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }

//     /**
//      * @remarks
//      * Remove locations from container.
//      * @param locations An array of Vector3 objects to remove from the container.
//      */
//     remove(locations: Vector3[]): void {
//         try {
//             const locationsToRemove = locations.map((location) =>
//                 NativeParserUtil.ToNativeLocation(location),
//             );
//             this.#locations = this.#locations.filter(
//                 (location) =>
//                     !locationsToRemove.some(
//                         (loc) =>
//                             loc.x === location.x &&
//                             loc.y === location.y &&
//                             loc.z === location.z,
//                     ),
//             );
//         } catch (error: any) {
//             Teseract.log(error, error.stack);
//         }
//     }
// }
