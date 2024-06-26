import { world, ItemTypes } from "@minecraft/server";
import Player from "@teseract/api/entity/Player";
export const commandPrefix = "-";
export class Command {
    data: {
        permission?: any;
        callback?: any;
        description?: any;
        name: string;
        arguments: any[];
        subCommands: {};
    };
    static cache: any;
    
    constructor(info) {
        this.data = {
            name: "",
            arguments: [],
            subCommands: {},
        };
        this.data.name = info.name.toLowerCase();
        this.data.description = info.description;
        this.data.permission = info.permission ?? (() => true);
        this.data.callback = info.callback;
    }
    
    static register(command) {
        this.cache[command.data.name] = command.data;
    }
    
    addArgument(type, callback) {
        
        return (this.data.arguments[this.data.arguments.length] = new Argument(
            type,
            false,
            callback,
        ));
    }
    
    addOptionalArgument(type, callback) {
        return (this.data.arguments[this.data.arguments.length] = new Argument(
            type,
            true,
            callback,
        ));
    }
    
    addSubCommand(command) {
        
        this.data.subCommands[command.data.name] = command.data;
        return this;
    }
}
Command.cache = {};
export class Argument {
    type: any;
    optional: boolean;
    callback: any;
    nextArg: any;
    
    constructor(type, optional = false, callback) {
        this.type = type;
        this.optional = optional;
        this.callback = callback;
    }
    
    chainArgument(type, optional = false, callback) {
        if (this.optional && !optional) optional = true;
        
        return (this.nextArg = new Argument(type, optional, callback));
    }
    
    execute(player, arg, other, prevResult) {
        try {
            const handleOptionalError = () => {
                if (!this.nextArg) {
                    
                    this.callback?.(
                        player,
                        prevResult ? [...prevResult] : null,
                    );

                    return true;
                }

                let nextArg = this.nextArg;

                const results = prevResult ? [...prevResult] : [null];

                while (true) {
                    if (!nextArg.nextArg) return;
                    nextArg = nextArg.nextArg;
                    results.push(null);
                    break;
                }

                nextArg.callback(player, results);

                return true;
            };

            if (!arg || arg === "") {
                if (this.optional) {
                    return handleOptionalError();
                }

                return false;
            }

            
            const [result, args] = argTypes[this.type](arg, other, player) ?? [
                undefined,
                undefined,
            ];

            if (!args) {
                if (this.optional) {
                    return handleOptionalError();
                }
                return false;
            }
            if (this.nextArg) {
                return this.nextArg.execute(
                    player,
                    args.shift(),
                    args,
                    prevResult ? [...prevResult, result] : [result],
                );
            }
            
            this.callback?.(
                player,
                prevResult ? [...prevResult, result] : result,
            );

            return true;
        } catch (e) {
            console.warn(e, e.stack);
        }
    }
}
const argTypes = {};
world.beforeEvents.chatSend.subscribe(async (ev) => {
    if (!ev.message.startsWith(commandPrefix)) return;
    ev.cancel = true;
    let ctrl = 0;
    const player = ev.sender;
    const [name, ...args] = ev.message
        .slice(commandPrefix.length)
        .trim()
        .split(/\s+/g);
    await null;
    let data = Command.cache[name.toLowerCase()];
    if (data?.callback) {
        data.callback(player, args);
        ctrl++;
    }
    let nextArg = args.shift();
    if (!data)
        return player.sendMessage([
            { text: "§c" },
            {
                translate: "commands.generic.unknown",
                with: [name.toLowerCase()],
            },
        ]);
    if (data.permission != undefined && !data.permission(player))
        return player.sendMessage([
            { text: "§c" },
            {
                translate: "commands.generic.unknown",
                with: [name.toLowerCase()],
            },
        ]);
    const end = () => {
        // const keys = Object.keys(data.subCommands);
        // const argthing = (arg, prevType = "") => {
        //   
        //   if (arg.nextArg) return argthing(arg.nextArg, prevType + arg.type + "-");
        //   return prevType + arg.type;
        // };
        
        const thing = [nextArg, ...args].join(" ");
        player.sendMessage([
            { text: "§c" },
            {
                translate: "commands.generic.syntax",
                with: [`${data.name} `, thing.length === 0 ? "" : thing],
            },
        ]);
    };
    while (true) {
        const sub = data.subCommands?.[nextArg ?? ""];
        if (sub) {
            if (sub.permission != undefined && !sub.permission(player))
                return player.sendMessage([
                    { text: "§c" },
                    {
                        translate: "commands.generic.unknown",
                        with: [sub.name.toLowerCase()],
                    },
                ]);
            data = sub;
            nextArg = args.shift();
            continue;
        }
        let found = false;

        if (
            data.arguments.length === 0 &&
            Object.keys(data.subCommands).length === 0
        ) {
            if (!!data.callback && ctrl == 0) {
                data.callback(player);
            }
            return;
        }
        for (const arg of data.arguments) {
            
            const worked = arg.execute(
                player,
                nextArg,
                args.map((v) => v),
            );
            if (!worked) continue;
            found = true;
            break;
        }
        if (!found) end();
        break;
    }
});

function addArgument(type, callback) {
    
    argTypes[type] = callback;
}

addArgument("all", (nextArg, args) => {
    return [[nextArg, ...args].join(" "), []];
});

addArgument("string", (nextArg, args) => {
    if (nextArg.startsWith('"')) {
        
        const argsCopy = args.map((v) => v);
        let currentArg = nextArg,
            result = "";
        while (currentArg) {
            result += " " + currentArg;
            if (result.endsWith('"') && result !== ' "')
                return [result.slice(2, -1), argsCopy];
            currentArg = argsCopy.shift();
        }
    }
    return [nextArg, args];
});

addArgument("number", (nextArg, args) => {
    const v = Number(nextArg);
    if (!isNaN(v)) return [v, args];
});

addArgument("boolean", (nextArg, args) => {
    const v = nextArg.toLowerCase();
    if (!["true", "false"].includes(v)) return;
    return [v[0] === "t" ? true : false, args];
});

addArgument("player", (_nextArg, args) => {
    // addArgument("player", (_nextArg, args, player) => {
    let nextArg = _nextArg.replace("@", "");
    if (!nextArg.startsWith('"')) {
        const target = world.getPlayers({ name: nextArg })[0];
        if (target) return [new Player(target), args];
    }
    let currentArg = nextArg,
        result = "";
    while (currentArg) {
        result += " " + currentArg;
        if (result.endsWith('"')) {
            const target = world.getPlayers({ name: result.slice(2, -1) })[0];
            if (target) return [new Player(target), args];
        }
        currentArg = args.shift();
    }
});
// addArgument("offlinePlayer", (_nextArg, args, player) => {

addArgument("offlinePlayer", (_nextArg, args) => {
    let nextArg = _nextArg.replace("@", "");
    if (!nextArg.startsWith('"')) return [nextArg, args];
    let currentArg = nextArg,
        result = "";
    while (currentArg) {
        result += " " + currentArg;
        if (result.endsWith('"')) return [result.slice(2, -1), args];
        currentArg = args.shift();
    }
});
addArgument("item", (nextArg: string, args: any) => {
    const v = ItemTypes.get(nextArg);
    if (v) return [v, args];
});

addArgument("time", (nextArg, args) => {
    const lower = nextArg.toLowerCase();
    if (lower === "permanent" || lower === "perm") return ["permanent", args];
    let t = parseInt(lower),
        i = 1,
        unit = args[0]?.[0]?.toLowerCase();
    if (isNaN(t)) {
        i = 0;
        const v = /^(\d+)\s*(\w+)$/.exec(args[0]);
        if (!v) return;
        t = parseInt(v[1]);
        unit = v[2][0].toLowerCase();
    }
    if (isNaN(t)) return;
    
    const v = (num) => [Number(t) * num, args.slice(i)];
    if (unit === "s") return v(1000);
    if (unit === "m") return v(60000);
    if (unit === "h") return v(3600000);
    if (unit === "d") return v(86400000);
    if (unit === "w") return v(604800000);
    if (unit === "y") return v(220752000000);
});

//# sourceMappingURL=../../../_0-2Debug/command/Command.js.map