import * as MinecraftServer from "@minecraft/server";
import type { EventType } from "./EventType";
import ItemEventsMapping from "./mappings/ItemEventsMapping";
import BlockEventsMapping from "./mappings/BlockEventsMapping";
import EntityEventsMapping from "./mappings/EntityEventsMapping";
import PlayerEventsMapping from "./mappings/PlayerEventsMapping";
import PlayerDieEvent from "./player/PlayerDieEvent";
import Events from "./Events";
import PlayerPostmortalEvent from "./player/PlayerPostmortalEvent";

const EventMap: Record<string, any> = {
    ...ItemEventsMapping,
    ...BlockEventsMapping,
    ...EntityEventsMapping,
    ...PlayerEventsMapping,
};

export default class EventManager {
    private static instance: EventManager;
    private eventHandlers: { [key: string]: Function[] } = {};

    #eventSkippers: Record<string, Function> = {
        EntityDieEvent: (data: MinecraftServer.EntityDieAfterEvent) => {
            return data?.deadEntity?.typeId === "minecraft:player";
        },
        PlayerDieEvent: (data: MinecraftServer.EntityDieAfterEvent) => {
            return data?.deadEntity?.typeId !== "minecraft:player";
        },
    };

    /**
     * Formats the event key to match the expected event class name.
     *
     * @param {string} eventName The original event name.
     * @returns {string} The formatted event class name.
     */
    private formatEventKey(eventName: string): string {
        return eventName[0].toUpperCase() + eventName.substring(1) + "Event";
    }

    #InitializeCustomComplexEvents() {
        const complexEvents = [Events.PlayerPostmortalEvent];
        
        for (const complexEvent of complexEvents) {
            EventMap[complexEvent].customDispatcher();
        }
    }

    #InitializeDispatchers() {
        const beforeEvents = MinecraftServer.world.beforeEvents;
        const afterEvents = MinecraftServer.world.afterEvents;

        const eventKeys = [];

        for (const ev in beforeEvents) {
            const key = this.formatEventKey(ev);
            eventKeys.push(key);

            //@ts-ignore
            MinecraftServer.world.beforeEvents[ev].subscribe((data) => {
                if (EventMap[key]) {
                    const eventData = new EventMap[key](data);
                    this.dispatchEvent(key as EventType, eventData);

                    data.cancel = eventData.isCanceled();
                }
            });
        }

        for (const ev in afterEvents) {
            const key = this.formatEventKey(ev);

            if (!eventKeys.includes(key)) {
                //@ts-ignore
                MinecraftServer.world.afterEvents[ev].subscribe((data) => {
                    // console.warn(this.#eventSkippers[key] && this.#eventSkippers[key]?.(data))
                    if (
                        this.#eventSkippers[key] &&
                        this.#eventSkippers[key]?.(data)
                    ) {
                        // console.warn("event skipped")
                        return;
                    }
                    if (EventMap[key]) {
                        const eventData = new EventMap[key](data);
                        this.dispatchEvent(key as EventType, eventData);
                    }
                });
                eventKeys.push(key);
            }
        }
        const customEvents: {
            [key: string]: any;
        } = {
            PlayerDieEvent: MinecraftServer.world.afterEvents.entityDie,
        };

        for (const ev in customEvents) {
            const key = ev as Events;
            customEvents[key].subscribe((data: any) => {
                if (
                    this.#eventSkippers[key] &&
                    this.#eventSkippers[key]?.(data)
                ) {
                    // console.warn("event skipped")
                    return;
                }
                if (EventMap[key]) {
                    const eventData = new EventMap[ev](data);
                    this.dispatchEvent(key, eventData);
                }
            });
        }

        this.#InitializeCustomComplexEvents();
    }

    private constructor() {
        this.#InitializeDispatchers();
    }

    public registerEventHandler(target: any) {
        const handlers = target.constructor.__eventHandlers;

        if (handlers) {
            for (const { eventType, handler } of handlers.get(
                target.constructor.name,
            ) || []) {
                EventManager.getInstance().registerEvent(
                    eventType,
                    handler.bind(target),
                );
            }
        }
    }

    public static getInstance(): EventManager {
        if (!EventManager.instance) {
            EventManager.instance = new EventManager();
        }
        return EventManager.instance;
    }

    public registerEvent(eventType: EventType, handler: Function) {
        if (!this.eventHandlers[eventType]) {
            this.eventHandlers[eventType] = [];
        }
        this.eventHandlers[eventType].push(handler);
        // console.warn("Event registered:", eventType);
    }

    public dispatchEvent(eventType: EventType, event: any) {
        // console.warn("Event dispatched: ", eventType);
        if (this.eventHandlers[eventType]) {
            for (const handler of this.eventHandlers[eventType]) {
                handler(event);
            }
        }
    }
}
