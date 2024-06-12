import * as MinecraftServer from "@minecraft/server";
import type { EventType } from "./EventType";
import ItemEventMapping from "./mappings/ItemEventsMapping";

const EventMap: Record<string, any> = {
    ...ItemEventMapping,
};

export default class EventManager {
    private static instance: EventManager;
    private eventHandlers: { [key: string]: Function[] } = {};

    #InitializeDispatchers() {
        const beforeEvents = MinecraftServer.world.beforeEvents;
        const afterEvents = MinecraftServer.world.afterEvents;

        const eventKeys = [];

        for (const ev in beforeEvents) {
            const key = ev[0].toUpperCase() + ev.substring(1) + "Event";
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
            const key = ev[0].toUpperCase() + ev.substring(1) + "Event";

            if (!eventKeys.includes(key)) {
                eventKeys.push(key);
            }

            //@ts-ignore
            MinecraftServer.world.afterEvents[ev].subscribe((data) => {
                if (EventMap[key]) {
                    const eventData = new EventMap[key](data);
                    this.dispatchEvent(key as EventType, eventData);
                }
            });
        }
    }

    private constructor() {
        this.#InitializeDispatchers();
    }

    public registerEventHandler(target: any) {
        const handlers = target.constructor.__eventHandlers;
        console.warn(handlers.get(target.constructor.name));
        if (handlers) {
            for (const { eventType, handler } of handlers.get(
                target.constructor.name
            ) || []) {
                EventManager.getInstance().registerEvent(
                    eventType,
                    handler.bind(target)
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
        console.warn("Event registered:", eventType);
    }

    public dispatchEvent(eventType: EventType, event: any) {
        console.warn("Event dispatched: ", eventType);
        if (this.eventHandlers[eventType]) {
            for (const handler of this.eventHandlers[eventType]) {
                handler(event);
            }
        }
    }
}
