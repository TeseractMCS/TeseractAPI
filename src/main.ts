import { system } from "@minecraft/server";
import Teseract from "TeseractAPI/Teseract";
import Player from "TeseractAPI/entity/Player";
import UHC from "src/teseract/api/test/UHC";
const uhc = new UHC()
Teseract.registerPlugin(uhc, "cib:uhc")
// class EventManager {
//     private static instance: EventManager;
//     private eventHandlers: { [key: string]: Function[] } = {};

//     private constructor() {}
//     public registerEventHandlers(target: any) {
//         const handlers = target.__eventHandlers;
//         if (handlers) {
//             for (const { eventType, handler } of handlers.get(target) || []) {
//                 EventManager.getInstance().registerEvent(
//                     eventType,
//                     handler.bind(target)
//                 );
//             }
//         }
//     }

//     public static getInstance(): EventManager {
//         if (!EventManager.instance) {
//             EventManager.instance = new EventManager();
//         }
//         return EventManager.instance;
//     }

//     public registerEvent(eventType: string, handler: Function) {
//         if (!this.eventHandlers[eventType]) {
//             this.eventHandlers[eventType] = [];
//         }
//         this.eventHandlers[eventType].push(handler);
//         console.warn("Event registered:", eventType);
//     }

//     public dispatchEvent(eventType: string, event: any) {
//         if (this.eventHandlers[eventType]) {
//             for (const handler of this.eventHandlers[eventType]) {
//                 handler(event);
//             }
//         }
//     }
// }

// class UseTest {
//     // @eventListener("ItemUseEvent")
//     method(data: any) {
//         console.warn("Event triggered:", data.item);
//         Teseract.broadcastMessage("Omg esta vaina ta funcionando....");
//         this.bindTest(Teseract.getPlayer("NxmbersCib"))
//     }
//     bindTest(player: Player) {
//         player.sendMessage("Es confuso... verdad?");
//         system.runTimeout(() => {
//             player.setOnFire(20 * 10, true);
//         }, 10);
//     }
// }

// EventManager.getInstance().registerEventHandlers(UseTest);

// system.runTimeout(() => {
//     // Dispatch an event
//     EventManager.getInstance().dispatchEvent("ItemUseEvent", {
//         item: "ExampleItem",
//     });
// }, 20 * 5);

/*


DIS GUORKS PERFEKTT!%"klfsklt
gASKFJAKLSF


>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>"
class EventManager {
    private static instance: EventManager;
    private eventHandlers: { [key: string]: Function[] } = {};

    private constructor() {}

    public static getInstance(): EventManager {
        if (!EventManager.instance) {
            EventManager.instance = new EventManager();
        }
        return EventManager.instance;
    }

    public registerEvent(eventType: string, handler: Function) {
        if (!this.eventHandlers[eventType]) {
            this.eventHandlers[eventType] = [];
        }
        this.eventHandlers[eventType].push(handler);
        console.warn("Event registered:", eventType);
    }

    public dispatchEvent(eventType: string, event: any) {
        if (this.eventHandlers[eventType]) {
            for (const handler of this.eventHandlers[eventType]) {
                handler(event);
            }
        }
    }
}

const eventListener = (eventType: string): any => {
    return (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        if (!target.constructor.__eventHandlers) {
            target.constructor.__eventHandlers = [];
        }
        target.constructor.__eventHandlers.push({
            eventType,
            handler: descriptor.value,
        });
    };
};
class EventAware {
    constructor() {
        if (this.constructor.__eventHandlers) {
            for (const { eventType, handler } of this.constructor.__eventHandlers) {
                EventManager.getInstance().registerEvent(eventType, handler.bind(this));
            }
        }
    }
}

class Person extends EventAware {
    @eventListener("ItemUseEvent")
    method(data: any) {
        console.warn("Event triggered:", data.item);
        this.soyGay();
    }

    soyGay() {
        console.warn("Soygay");
    }
    @eventListener("ItemUseEvent")
    method2(data:any) {
        Teseract.getPlayer("NxmbersCib").sendMessage("JEJE" + data.item)
    }
}

// Instancia la clase Person para que los eventos se registren
const p = new Person();

// Dispatch an event
EventManager.getInstance().dispatchEvent("ItemUseEvent", {
    item: "ExampleItem",
});
*/
// class EventManager {
//     private static instance: EventManager;
//     private eventHandlers: { [key: string]: Function[] } = {};

//     private constructor() {}

//     public static getInstance(): EventManager {
//         if (!EventManager.instance) {
//             EventManager.instance = new EventManager();
//         }
//         return EventManager.instance;
//     }

//     public registerEvent(eventType: string, handler: Function) {
//         if (!this.eventHandlers[eventType]) {
//             this.eventHandlers[eventType] = [];
//         }
//         this.eventHandlers[eventType].push(handler);
//         console.warn("Event registered:", eventType);
//     }

//     public dispatchEvent(eventType: string, event: any) {
//         if (this.eventHandlers[eventType]) {
//             for (const handler of this.eventHandlers[eventType]) {
//                 handler(event);
//             }
//         }
//     }
// }

// const eventListener = (eventType: string): any => {
//     return (
//         target: any,
//         propertyKey: string,
//         descriptor: PropertyDescriptor
//     ) => {
//         const originalMethod = descriptor.value;
//         if (typeof originalMethod === "function") {
//             // Register the method as an event handler for the specified event type
//             EventManager.getInstance().registerEvent(
//                 eventType,
//                 originalMethod.bind(target)
//             );

//             descriptor.value = function (...args: any[]) {
//                 return originalMethod.apply(this, args);
//             };
//         } else {
//             console.error(
//                 `RegisterEvent can only be applied to methods, but received ${typeof originalMethod}`
//             );
//         }
//     };
// };

// class Person {
//     @eventListener("ItemUseEvent")
//     method(data: any) {
//         console.warn("Event triggered:", data.item);
//         this.soyGay();
//     }

//     @eventListener("ItemUseEvent")
//     method2(data: any) {}

//     soyGay() {
//         Teseract.getPlayer("NxmbersCib").sendMessage("HASFJHASJFAHSFJK")
//         console.warn("Soygay");
//     }
// }

// // const p = new Person();

// // Dispatch an event
// EventManager.getInstance().dispatchEvent("ItemUseEvent", {
//     item: "ExampleItem",
// });
// import "./src/teseract/api/test/UHC";

// class EventManage {
//     private static instance: EventManage;
//     private eventHandlers: { [key: string]: { [key: string]: Function[] } } =
//         {};

//     private constructor() {}

//     public static getInstance(): EventManage {
//         if (!EventManage.instance) {
//             EventManage.instance = new EventManage();
//         }
//         return EventManage.instance;
//     }

//     public registerEvent(
//         eventType: string,
//         className: string,
//         handler: Function
//     ) {
//         if (!this.eventHandlers[eventType]) {
//             this.eventHandlers[eventType] = {};
//         }
//         if (!this.eventHandlers[eventType][className]) {
//             this.eventHandlers[eventType][className] = [];
//         }
//         this.eventHandlers[eventType][className].push(handler);
//         console.warn("Evento registrado")
//     }

//     public dispatchEvent(eventType: string, className: string, event: any) {
//         if (
//             this.eventHandlers[eventType] &&
//             this.eventHandlers[eventType][className]
//         ) {
//             for (const handler of this.eventHandlers[eventType][className]) {
//                 handler(event);
//             }
//         }
//     }
// }
// const eventListener = (eventType: string): any => {
//     return (
//         target: any,
//         propertyKey: string,
//         descriptor: PropertyDescriptor
//     ) => {
//         console.warn(target);
//         const originalMethod = descriptor.value;
//         if (typeof originalMethod === "function") {
//             const className = target.constructor.name;
//             // Asegúrate de que el método original se registre correctamente
//             EventManage.getInstance().registerEvent(
//                 eventType,
//                 className,
//                 originalMethod.bind(target)
//             );

//             descriptor.value = function (...args: any[]) {
//                 return originalMethod.apply(this, args);
//             };
//         } else {
//             console.error(
//                 `RegisterEvent can only be applied to methods, but received ${typeof originalMethod}`
//             );
//         }
//     };
// };

// class Person {
//     @eventListener("ItemUseEvent")
//     method(data: any) {
//         console.warn("Esgay", data.item)
//         this.soyGay()
//     }
//     soyGay() {
//         console.warn("Soygay")
//     }
// }

// const p = new Person()

// // Despachar un evento
// EventManage.getInstance().dispatchEvent("ItemUseEvent", "Person", {
//     item: "ExampleItem",
// });
