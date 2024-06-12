import { system, world, System } from "@minecraft/server";
import Teseract from "TeseractAPI/Teseract";

export default interface CancellableEvent {
    /**
     * Async method for gaining the {@link System} API privileges
     * @remarks
     * Triggering this function will make you loose the access to previous decaying instances and you cannot revoke the {@link System} privileges for accesing the lost properties, make sure you save all the data you need before accesing the privileges
     * @remarks
     * This function was implemented as a replacement to {@link System.run} and nullish awaiting. Feel free to use both methods instead of this function
     * @returns An awaitable promise, for gaining {@link System} API access privileges
     */
    privileges(): Promise<void>;

    /**
     * @remarks
     * Set the event to be canceled.
     * @param canceled - Boolean to set the cancellation state.
     */
    setCanceled(isCanceled: boolean): void;

    isCanceled(): boolean;
}
