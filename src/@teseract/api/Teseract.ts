import * as MinecraftServer from "@minecraft/server";
import Dimension from "./Dimension";
import TeseractPlugin from "./plugin/TeseractPlugin";
import MersenneTwister from "./MersenneTwister";
import Player from "./entity/Player";
import CustomComponentRegistry from "./custom_component/CustomComponentRegistry";
import EventManager from "./event/EventManager";

MinecraftServer.system.beforeEvents.watchdogTerminate.subscribe(
    (arg) => (arg.cancel = true),
);

interface PluginObject<T extends TeseractPlugin> {
    identifier: string;
    pluginInstance: T;
}

const Plugins: PluginObject<TeseractPlugin>[] = [];

class _Dimension extends Dimension {
    constructor(data: MinecraftServer.Dimension) {
        super(data);
    }
}

const Dimensions: Record<string, Dimension> = {
    "minecraft:overworld": new _Dimension(
        MinecraftServer.world.getDimension("minecraft:overworld"),
    ),
    "minecraft:nether": new _Dimension(
        MinecraftServer.world.getDimension("minecraft:nether"),
    ),
    "minecraft:the_end": new _Dimension(
        MinecraftServer.world.getDimension("minecraft:the_end"),
    ),
};

let ComponentRegistry: CustomComponentRegistry;

export default abstract class Teseract {
    private constructor() {}

    public static getEventManager() {
        try {
            return EventManager.getInstance();
        } catch (error) {
            this.log(error, error.stack);
        }
    }

    public static getComponentRegistry() {
        return ComponentRegistry;
    }

    /**
     * @remarks
     * Logs the given objects to console.
     * @param logs Objects to log.
     */
    static log(...logs: any) {
        console.warn(...logs);
    }

    /**
     * @remarks
     * Sends a message to all the players in the world, even if they are in different dimensions.
     * @param message Message to send to all the players, this message can be an string or a RawMessage
     */
    public static broadcastMessage(
        message:
            | string
            | MinecraftServer.RawMessage
            | (string | MinecraftServer.RawMessage)[],
    ): void {
        try {
            MinecraftServer.world.sendMessage(message);
        } catch (error: any) {
            this.log(error);
        }
    }

    /**
     * TODO: JSDoc
     * @param gamerule
     * @returns
     */
    public static getGamerule<T extends keyof MinecraftServer.GameRules>(
        gamerule: T,
    ): MinecraftServer.GameRules[T] {
        try {
            return MinecraftServer.world.gameRules[gamerule];
        } catch (error: any) {
            this.log(error);
        }
    }

    /**
     * TODO: JSDoc
     * @param gamerule
     * @param value
     * @returns
     */
    public static setGamerule<T extends keyof MinecraftServer.GameRules>(
        gamerule: T,
        value: MinecraftServer.GameRules[T],
    ) {
        try {
            MinecraftServer.world.gameRules[gamerule] = value;
            return MinecraftServer.world.gameRules[gamerule];
        } catch (error: any) {
            this.log(error);
        }
    }

    /**
     * The World and System events unified in a brand new manager provided by TeseractTS
     */
    //   public static getEventManager() {
    //     try {
    //       return eventManager;
    //     } catch (error: any) {
    //       Teseract.log(error, error.stack)
    //     }
    //   }

    /**
     * Register a new API plugin for modifying the Minecraft environment
     * @param plugin Registered plugin instance
     * @param pluginName Registered plugin name
     */
    public static registerPlugin<T extends TeseractPlugin>(
        plugin: T,
        pluginName: string,
    ): void {
        try {
            Plugins.push({
                pluginInstance: plugin,
                identifier: pluginName,
            });
            if (typeof plugin?.onLoaded === "function") {
                plugin?.onLoaded();
            }
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * Gets a World Dynamic Property
     * @param propertyName Dynamic property to get
     */
    public static getProperty(
        propertyName: string,
    ): string | boolean | number | MinecraftServer.Vector3 | undefined {
        try {
            return MinecraftServer.world.getDynamicProperty(propertyName);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * Sets a World Dynamic Property to the desired value or undefined if there is no value.
     * @param propertyName Property to set.
     * @param propertyValue Value to set the property.
     */
    public static setProperty(
        propertyName: string,
        propertyValue:
            | string
            | boolean
            | number
            | MinecraftServer.Vector3
            | undefined,
    ) {
        try {
            MinecraftServer.world.setDynamicProperty(
                propertyName,
                propertyValue,
            );
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * TODO: Refactor scheduler
     */
    //   public static getScheduler(): Scheduler {
    //     try {
    //       return TaskScheduler;
    //     } catch (error: any) {
    //       Teseract.log(error, error.stack)
    //     }
    //   }

    /**
     * @remarks
     * Returns a {@link Dimension} object.
     * @param dimensionName Name of the dimension. ("overworld", "nether" or "the_end")
     * @returns The desired dimension
     */
    public static getDimension(dimensionName: string): Dimension {
        try {
            MinecraftServer.world.getDimension;
            const dim = Dimensions[dimensionName];
            return dim;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Returns the {@link Dimension} object of every dimension.
     * @returns All the existing dimensions
     */
    public static getDimensions(): Dimension[] {
        try {
            const dim: any = Object.values(Dimensions);
            return dim;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * TODO: JSDoc
     * @param filter
     * @returns
     */
    public static filterPlayers(filter: (player: Player) => boolean): Player[] {
        try {
            const players: Player[] = this.getPlayers().filter((p) =>
                filter(p),
            );
            return players;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * TODO: JSDoc
     * @param playerUUID
     * @returns
     */
    public static getPlayerWithID(playerUUID: string): Player | undefined {
        return this.filterPlayers((p) => p.getUUID() == playerUUID)?.[0];
    }

    /**
     * TODO: JSDoc
     * @param playerName
     * @returns
     */
    public static getPlayer(playerName: string): Player | undefined {
        return this.filterPlayers((p) => p.getName() == playerName)?.[0];
    }

    /**
     * TODO: JSDoc
     * @param options
     * @returns
     */
    public static getPlayers(
        options?: MinecraftServer.EntityQueryOptions,
    ): Player[] {
        try {
            const players: Player[] = MinecraftServer.world
                .getPlayers(options)
                .map((p) => new Player(p));
            return players;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * TODO: JSDoc
     * @param command
     * @param dimension
     * @returns
     */
    public static runCommand(
        command: string,
        dimension?: Dimension,
    ): MinecraftServer.CommandResult | MinecraftServer.CommandError {
        try {
            if (!dimension) {
                return Dimensions["minecraft:overworld"].runCommand(command);
            } else {
                return Dimensions[dimension.getIdentifier()].runCommand(
                    command,
                );
            }
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
    //     public static async runCommandAsync(
    //         command: string,
    //         dimension?: Dimension,
    //     ): Promise<MinecraftServer.CommandResult | MinecraftServer.CommandError> {
    //         try {
    //             if (!dimension) {
    //                 return VANILLA_DIMENSIONS["minecraft:overworld"].runCommandAsync(command);
    //             } else {
    //                 return VANILLA_DIMENSIONS[dimension.getName()].runCommandAsync(command);
    //             }
    //         } catch (error: any) {
    //             Teseract.log(error, error.stack)
    //         }
    //     }

    /**
     * Returns a mersenne twister instance based on the received seed
     * @param seed Twister seed
     * @returns Mersenne twister instance
     */
    public static getMersenneTwister(seed?: number): MersenneTwister {
        try {
            return new MersenneTwister(seed);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * Queues a generator to run until completion. The generator will be given a time slice each tick, and will be run until it yields or completes.
     * @param instance The instance of the generator to run.
     * @returns An opaque handle that can be used with * System.clearJob to stop the run of this generator.
     */
    public static runJob(instance: Generator<void, void, void>) {
        try {
            return MinecraftServer.system.runJob(instance);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks — Cancels the execution of a job queued via * Teseract.runJob.
     * @param jobId — The job ID returned from System.runJob.
     */
    public static clearJob(jobId: number) {
        try {
            return MinecraftServer.system.clearJob(jobId);
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}

MinecraftServer.world.beforeEvents.worldInitialize.subscribe(async (arg) => {
    const ComponentRegistry = new CustomComponentRegistry(
        arg.itemComponentRegistry,
        arg.blockTypeRegistry,
    );
    await null;
    for (const plugin of Plugins) {
        plugin.pluginInstance.onEnabled(ComponentRegistry);
    }
});

console.log = console.warn;
