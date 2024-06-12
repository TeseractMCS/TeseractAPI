import Teseract from "TeseractAPI/Teseract";
import CancellableEvent from "../../CancellableEvent";
import ItemEventBase from "./ItemEventBase";

export default class CancellableItemEvent extends ItemEventBase implements CancellableEvent {
    #isCanceled = false;

    public async privileges(): Promise<void> {
        try {
            return new Promise(async (resolve) => {
                await null;
                resolve();
            });
        } catch (error) {
            Teseract.log(error);
        }
    }

    public setCanceled(canceled: boolean) {
        try {
            this.#isCanceled = canceled;
        } catch (error) {
            Teseract.log(error);
        }
    }

    public isCanceled(): boolean {
        try {
            return this.#isCanceled;
        } catch (error) {
            Teseract.log(error);
        }
    }
}
