import * as MinecraftServer from "@minecraft/server";
import * as MinecraftServerUI from "@minecraft/server-ui";

export default class SimpleForm extends MinecraftServerUI.ActionFormData {
    /**
     * @remarks
     * Method that sets the body text for the modal form.
     *
     * This function can't be called in read-only mode.
     *
     */
    formBody: MinecraftServer.RawMessage | string;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     *
     * This function can't be called in read-only mode.
     *
     */
    formTitle: MinecraftServer.RawMessage | string;
}
