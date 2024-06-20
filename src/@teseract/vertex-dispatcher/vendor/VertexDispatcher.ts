import "reflect-metadata";

class Player {
    sendMessage(message: string) {
        console.log(message);
    }
}


function parseArgument(arg: any, paramType: any) {
    if (paramType === Number) {
        const parsed = Number(arg);
        if (!isNaN(parsed)) {
            return parsed;
        } else {
            throw new Error(`Cannot parse argument ${arg} to Number`);
        }
    } else if (paramType === String) {
        return String(arg).replace(/"/g, "");
    } else if (paramType === Boolean) {
        if (arg === "true" || arg === "false") {
            return arg === "true";
        } else {
            throw new Error(`Cannot parse argument ${arg} to Boolean`);
        }
    } else {
        throw new Error(
            `Unsupported parameter type: ${
                paramType ? paramType.name : "unknown"
            }`,
        );
    }
}

function handleCommand(commandName: string, player: Player, ...args: any[]) {
    const commandClasses: any[] = [];
    for (const commandClass of commandClasses) {
        const aliases: string[] = Reflect.getMetadata(
            "command:alias",
            commandClass,
        );
        if (aliases.includes(commandName)) {
            const instance = new commandClass();
            const methods = Object.getOwnPropertyNames(
                commandClass.prototype,
            ).filter((method) => method !== "constructor");

            // Check for subcommands first
            for (const method of methods) {
                const subCommands: string[][] = Reflect.getMetadata(
                    "command:subCommand",
                    commandClass.prototype,
                    method,
                );
                if (subCommands) {
                    const subCommandAlias = args.slice(0, subCommands.length);
                    if (
                        subCommands.every((subCommandSet, index) =>
                            subCommandSet.includes(subCommandAlias[index]),
                        )
                    ) {
                        const parameterTypes =
                            Reflect.getMetadata(
                                "design:paramtypes",
                                commandClass.prototype,
                                method,
                            ) || [];
                        const optionalParameters: number[] =
                            Reflect.getMetadata(
                                "command:optionalParameters",
                                commandClass.prototype,
                                method,
                            ) || [];
                        try {
                            const params = [
                                player,
                                ...args
                                    .slice(subCommands.length)
                                    .map((arg, index) => {
                                        const paramType =
                                            parameterTypes[index + 1]; // Skip the first parameter (player)
                                        if (paramType) {
                                            if (
                                                optionalParameters.includes(
                                                    index + 1,
                                                )
                                            ) {
                                                return arg === undefined
                                                    ? undefined
                                                    : parseArgument(
                                                          arg,
                                                          paramType,
                                                      );
                                            } else if (arg === undefined) {
                                                throw new Error(
                                                    `Missing required argument at position ${
                                                        index + 1
                                                    }`,
                                                );
                                            }
                                            return parseArgument(
                                                arg,
                                                paramType,
                                            );
                                        } else {
                                            return arg; // If no paramType is defined, pass the argument as-is
                                        }
                                    }),
                            ];
                            if (
                                params.length - 1 <=
                                parameterTypes.length - 1
                            ) {
                                instance[method](...params);
                                return;
                            }
                        } catch (error: any) {
                            player.sendMessage(`Error: ${error.message}`);
                            return;
                        }
                    }
                }
            }

            // If no subcommand matches, check for default command
            for (const method of methods) {
                const isDefault = Reflect.getMetadata(
                    "command:default",
                    commandClass.prototype,
                    method,
                );
                if (isDefault) {
                    const parameterTypes =
                        Reflect.getMetadata(
                            "design:paramtypes",
                            commandClass.prototype,
                            method,
                        ) || [];
                    const optionalParameters: number[] =
                        Reflect.getMetadata(
                            "command:optionalParameters",
                            commandClass.prototype,
                            method,
                        ) || [];
                    try {
                        const params = [
                            player,
                            ...args.map((arg, index) => {
                                const paramType = parameterTypes[index + 1]; // Skip the first parameter (player)
                                if (paramType) {
                                    if (
                                        optionalParameters.includes(index + 1)
                                    ) {
                                        return arg === undefined
                                            ? undefined
                                            : parseArgument(arg, paramType);
                                    } else if (arg === undefined) {
                                        throw new Error(
                                            `Missing required argument at position ${
                                                index + 1
                                            }`,
                                        );
                                    }
                                    return parseArgument(arg, paramType);
                                } else {
                                    return arg; // If no paramType is defined, pass the argument as-is
                                }
                            }),
                        ];
                        if (params.length - 1 <= parameterTypes.length - 1) {
                            instance[method](...params);
                            return;
                        }
                    } catch (error: any) {
                        player.sendMessage(`Error: ${error.message}`);
                        return;
                    }
                }
            }
        }
    }
    player.sendMessage("Unknown command");
}
