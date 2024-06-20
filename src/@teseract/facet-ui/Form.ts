/**
 * @experimental
 */
function ActionForm(target: any) {
    console.warn("Tagged action form");
    target.formType = "action";
    target.constructor.formType = "action";
}

/**
 * @experimental
 */
function MessageForm(target: any) {
    target.formType = "message";
    target.constructor.formType = "message";
}

/**
 * @experimental
 */
function ModalForm(target: any) {
    target.formType = "modal";
    target.constructor.formType = "modal";
}

/**
 * @experimental
 */
function FormTitle(title: string): any {
    return function (target: any, propertyKey: string) {
        if (!target.formMetaData) {
            target.formMetaData = {};
        }
        target.formMetaData.titleKey = title;
    };
}

/**
 * @experimental
 */
function FormBody(bodyText: string): any {
    return function (target: any, propertyKey: string) {
        if (!target.formMetaData) {
            target.formMetaData = {};
        }
        target.formMetaData.bodyKey = bodyText;
    };
}

/**
 * @experimental
 */
function FormButton(buttonName: string, texturePath?: string): any {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        if (!target.constructor.formMetaData) {
            target.constructor.formMetaData = {};
        }
        if (!target.constructor.formMetaData.buttons) {
            target.constructor.formMetaData.buttons = [];
        }
        target.constructor.formMetaData.buttons.push({
            methodName: propertyKey,
            buttonName: buttonName,
            texturePath: texturePath,
        });
    };
}

/**
 * @experimental
 */
function OnCanceled(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    if (!target.constructor.formMetaData) {
        target.constructor.formMetaData = {};
    }
    if (!target.constructor.formMetaData.buttons) {
        target.constructor.formMetaData.OnCanceled = [];
    }
    target.constructor.formMetaData.OnCanceled = {
        methodName: propertyKey,
    };
}

/**
 * @experimental
 */
function FirstSelection(target: any, propertyKey: string) {
    if (!target.constructor.formMetaData) {
        target.constructor.formMetaData = {};
    }
    if (!target.constructor.formMetaData.buttons) {
        target.constructor.formMetaData.buttons = [];
    }
    target.constructor.formMetaData.buttons[0] = {
        methodName: propertyKey,
    };
}

function SecondSelection(target: any, propertyKey: string) {
    if (!target.constructor.formMetaData) {
        target.constructor.formMetaData = {};
    }
    if (!target.constructor.formMetaData.buttons) {
        target.constructor.formMetaData.buttons = [];
    }
    target.constructor.formMetaData.buttons[1] = {
        methodName: propertyKey,
    };
}

class Form {
    /**
     * @remarks
     * Decorator for tagging ModalForm classes.
     */
    public Modal = ModalForm;
    /**
     * @remarks
     * Decorator for tagging MessageForm classes.
     */
    public Message = MessageForm;
    /**
     * @remarks
     * Decorator for tagging ActionForm classes.
     */
    public Action = ActionForm;

    public Button = FormButton;
    public OnCanceled = OnCanceled;
    public Body = FormBody;
    public Title = FormTitle;
}

export {
    ModalForm,
    MessageForm,
    ActionForm,
    FormButton,
    OnCanceled,
    FormBody,
    FormTitle,
};
export default new Form();
