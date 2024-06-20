/**
 * @experimental
 */
import {
    ModalFormData,
    ModalFormResponse,
    ActionFormData,
    ActionFormResponse,
    MessageFormData,
    FormResponse,
    MessageFormResponse,
    FormCancelationReason,
} from "@minecraft/server-ui";
import Teseract from "@teseract/api/Teseract";

export type Response<T> = T extends
    | MessageFormResponse
    | FormResponse
    | ModalFormResponse
    | ActionFormResponse
    ? T
    : null;
import Player from "@teseract/api/entity/Player";

export default class FormManager {
    private static instance: FormManager;
    public static getInstance(): FormManager {
        if (!FormManager.instance) {
            FormManager.instance = new FormManager();
        }
        return FormManager.instance;
    }

    private initializeForm(formClass: any) {
        try {
            const formInstance = new formClass();
            const formType = formClass.formType ?? formClass.constructor.formType;
            let form: any;

            const metaData = formClass.formMetaData ?? formClass.constructor.formMetaData;

            switch (formType) {
                case "modal":
                    form = new ModalFormData();
                    break;
                case "action":
                    form = new ActionFormData();
                    break;
                case "message":
                    form = new MessageFormData();
                    break;
                default:
                    throw new Error("Unknown form type");
            }
            // console.warn(JSON.stringify(metaData));

            // Configurar el título y el cuerpo del formulario
            if (metaData.titleKey) {
                form.title(formInstance[metaData.titleKey]);
            }
            if (metaData.bodyKey) {
                form.body(formInstance[metaData.bodyKey]);
            }

            // Configurar los botones del formulario
            if (metaData.buttons && formType === "action") {
                metaData.buttons.forEach((button: any) => {
                    form.button(button.buttonName, button.texturePath ?? undefined);
                });
            }

            if (metaData.buttons && formType === "message") {
                (form as MessageFormData).button1(
                    metaData.buttons[0].methodName,
                );
                (form as MessageFormData).button2(
                    metaData.buttons[1].methodName,
                );
            }

            // Configurar las opciones del formulario
            // if (metaData.firstChoiceKey && formType === "modal") {
            //     form.dropdown(
            //         formInstance[metaData.firstChoiceKey].label,
            //         formInstance[metaData.firstChoiceKey].options,
            //     );
            // }
            // if (metaData.secondChoiceKey && formType === "modal") {
            //     form.dropdown(
            //         formInstance[metaData.secondChoiceKey].label,
            //         formInstance[metaData.secondChoiceKey].options,
            //     );
            // }

            return form;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    private async forceForm<
        Form extends ModalFormData | ActionFormData | MessageFormData,
    >(
        player: Player,
        form: Form,
        callback: (
            response: Response<
                | MessageFormResponse
                | FormResponse
                | ModalFormResponse
                | ActionFormResponse
            >,
        ) => void,
    ): Promise<void> {
        while (true) {
            const response = await form.show(player.getNativeHandle());
            if (
                response?.cancelationReason !== FormCancelationReason.UserBusy
            ) {
                try {
                    callback(response);
                } catch (error) {
                    console.error("FORM ERROR", error, error.stack);
                }
                break;
            }
        }
    }

    public async showForm(player: Player, formClass: any) {
        const form = this.initializeForm(formClass);
        const formType = formClass.formType;

        const nativeSource = player.getNativeHandle();
        const FormClass = formClass;

        await null;

        if (formType === "modal") {
            this.forceForm(player, form, (response: ModalFormResponse) => {
                this.handleResponse(FormClass, response, player);
            });
        } else if (formType === "action") {
            this.forceForm(player, form, (response: ActionFormResponse) => {
                this.handleResponse(FormClass, response, player);
            });
        } else if (formType === "message") {
            this.forceForm(player, form, (response: MessageFormResponse) => {
                this.handleResponse(FormClass, response, player);
            });
        }
    }

    private handleResponse(formClass: any, response: any, player: Player) {
        const formInstance = new formClass();
        const metaData = formClass.formMetaData;

        if (response.canceled && metaData?.onCanceled) {
            return formInstance[metaData.onCanceled.methodName](player, response.cancelationReason);
        }

        if (metaData.buttons) {
            const selectedButton = metaData.buttons[response.selection];

            if (selectedButton) {
                formInstance[selectedButton.methodName](player);
            }
        }
    }
}
