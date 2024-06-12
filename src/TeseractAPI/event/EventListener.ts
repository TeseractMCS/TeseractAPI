import EventManager from "./EventManager";
import { EventType } from "./EventType";

/**
 * @remarks
 * Decorator for tagging the methods that will be processed as event handlers by the {@link EventManager} 
 * @remarks
 * The class containing methods tagget with {@link eventListener} need to be registered via {@link EventManager.registerEventHandlers}  
 */
export default function eventListener (eventType: EventType): any {
    return (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        console.warn("Listener tagged")
        if (!target.constructor.__eventHandlers) {
            target.constructor.__eventHandlers = new Map();
        }
        const handlers = target.constructor.__eventHandlers;
        if (!handlers.has(target.constructor.name)) {
            handlers.set(target.constructor.name, []);
        }
        handlers.get(target.constructor.name)?.push({
            eventType,
            handler: descriptor.value.bind(target),
        });
    };
};