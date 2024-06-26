import Entity from "@teseract/api/entity/Entity";

export default interface EntityRaycastHit {
    /**
     * @remarks
     * Distance from ray origin to entity bounds.
     *
     */
    distance: number;
    
    /**
     * @remarks
     * Entity that was hit.
     *
     */
    entity: Entity;
}