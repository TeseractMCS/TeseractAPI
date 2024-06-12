import * as MinecraftServer from "@minecraft/server";
import Location from "TeseractAPI/Location";
import Teseract from "TeseractAPI/Teseract";
import ItemUseOnCancellableBase from "./base/ItemUseOnCancellableBase";

/**
 * @remarks
 * Contains information related to an item being used on a block.
 */
export default class ItemUseOnEvent extends ItemUseOnCancellableBase {
    #faceLocation: Location;

    constructor(data: MinecraftServer.ItemUseOnBeforeEvent) {
        super(data);
        this.#faceLocation = new Location(
            data.faceLocation.x,
            data.faceLocation.y,
            data.faceLocation.z
        );
    }

    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    public getFaceLocation(): Location {
        try {
        } catch (error) {
            return this.#faceLocation;
            Teseract.log(error, error.stack);
        }
    }
}
