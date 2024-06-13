import * as MinecraftServer from "@minecraft/server";
import Teseract from "TeseractAPI/Teseract";
import Entity from "TeseractAPI/entity/Entity";

/**
 * Base class for entity-related events.
 */
export default class EntityEventBase {
    #entity: Entity;

    constructor(data: { entity: MinecraftServer.Entity }) {
        this.#entity = new Entity(data.entity);
    }

    /**
     * @remarks
     * Retrieves the entity associated with this event.
     * @returns The entity involved in the event, or undefined if an error occurs.
     */
    public getEntity(): Entity {
        try {
            return this.#entity;
        } catch (error: any) {
            Teseract.log(error, error.stack);
        }
    }
}
