/**
 * @experimental
 */
export function buttonForm() {
    return function (target: any) {
        target.formType = "action";
    };
}

/**
 * @experimental
 */
export function choiceForm() {
    return function (target: any) {
        target.formType = "message";
    };
}

/**
 * @experimental
 */
export function messageForm() {
    return function (target: any) {
        target.formType = "message";
    };
}

/**
 * @experimental
 */
export function formTitle() {
    return function (target: any, propertyKey: string) {
        if (!target.constructor.formMetaData) {
            target.constructor.formMetaData = {};
        }
        target.constructor.formMetaData.titleKey = propertyKey;
    };
}

/**
 * @experimental
 */
export function formBody() {
    return function (target: any, propertyKey: string) {
        if (!target.constructor.formMetaData) {
            target.constructor.formMetaData = {};
        }
        target.constructor.formMetaData.bodyKey = propertyKey;
    };
}

/**
 * @experimental
 */
export function formButton() {
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
        });
    };
}

/**
 * @experimental
 */
export function firstChoice() {
    return function (target: any, propertyKey: string) {
        if (!target.constructor.formMetaData) {
            target.constructor.formMetaData = {};
        }
        if (!target.constructor.formMetaData.buttons) {
            target.constructor.formMetaData.buttons = [];
        }
        target.constructor.formMetaData.buttons[0] = {
            methodName: propertyKey,
        };
    };
}

export function secondChoice() {
    return function (target: any, propertyKey: string) {
        if (!target.constructor.formMetaData) {
            target.constructor.formMetaData = {};
        }
        if (!target.constructor.formMetaData.buttons) {
            target.constructor.formMetaData.buttons = [];
        }
        target.constructor.formMetaData.buttons[1] = {
            methodName: propertyKey,
        };
    };
}
