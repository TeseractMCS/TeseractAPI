import { ChatSendBeforeEvent } from "@minecraft/server";
import PlayerCancellableEventBase from "./player/base/PlayerCancellableEventBase";
import Player from "@teseract/api/entity/Player";
import Teseract from "@teseract/api/Teseract";

export default class ChatSendEvent extends PlayerCancellableEventBase {
    #messageData: { message: string; targets: Player[] | undefined };
    #vanillaData;
    constructor(data: ChatSendBeforeEvent) {
        super({ player: data.sender });
        this.#messageData = {
            message: data.message,
            targets: data.targets?.map((p) => new Player(p)),
        };
        data.cancel = false
        this.setCanceled(false)
        this.#vanillaData = data;
    }

    public getMessage(): string {
        try {
            return this.#messageData.message;
        } catch (error) {
            Teseract.log(error);
        }
    }

    public setMessage(newMessage: string): void {
        try {
            this.#messageData.message = newMessage;
        } catch (error) {
            Teseract.log(error);
        }
    }

    public getTargets(): Player[] | undefined {
        try {
            return this.#messageData.targets;
        } catch (error) {
            Teseract.log(error);
        }
    }

    // public setTargets(targets: Player[]) {
    //     try {
    //         this.#messageData.targets = targets;
    //         this.#vanillaData.targets = targets.map((p) => p.getNativeHandle());
    //     } catch (error) {
    //         Teseract.log(error);
    //     }
    // }
}
