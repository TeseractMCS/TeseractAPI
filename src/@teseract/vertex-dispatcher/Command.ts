import { Command } from "./vendor/Command";

function CommandAlias(alias: string): any {
    return function (constructor: any) {
        constructor.__commandData["aliases"] = alias
            .split("|")
            .map((a) => a.trim());
    };
}

function Description(description: string): any {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        if (!descriptor) {
            if (!target.constructor.__commandData) {
                target.constructor.__commandData = new Command({})
            }
            target.constructor.__commandData["description"];
        } else {
        }
    };
}

function Permission(permission: string): any {
    return function (constructor: Function) {
        Reflect.defineMetadata("command:permission", permission, constructor);
    };
}

function Default(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    Reflect.defineMetadata("command:default", true, target, propertyKey);
}

function SubCommand(subCommand: string): any {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        const existingSubCommands =
            Reflect.getMetadata("command:subCommand", target, propertyKey) ||
            [];
        const newSubCommands = subCommand
            .split(" ")
            .map((cmd) => cmd.split("|").map((a) => a.trim()));
        Reflect.defineMetadata(
            "command:subCommand",
            [...existingSubCommands, ...newSubCommands],
            target,
            propertyKey,
        );
    };
}

function Optional(target: any, propertyKey: string, parameterIndex: number) {
    const existingOptionalParameters: number[] =
        Reflect.getMetadata(
            "command:optionalParameters",
            target,
            propertyKey,
        ) || [];
    existingOptionalParameters.push(parameterIndex);
    Reflect.defineMetadata(
        "command:optionalParameters",
        existingOptionalParameters,
        target,
        propertyKey,
    );
}
