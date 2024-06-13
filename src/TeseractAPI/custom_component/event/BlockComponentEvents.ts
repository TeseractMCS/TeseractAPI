import {
    BlockComponentEntityFallOnEvent as MinecraftBlockComponentEntityFallOnEvent,
    BlockComponentOnPlaceEvent as MinecraftBlockComponentOnPlaceEvent,
    BlockComponentPlayerDestroyEvent as MinecraftBlockComponentPlayerDestroyEvent,
    BlockComponentPlayerInteractEvent as MinecraftBlockComponentPlayerInteractEvent,
    BlockComponentPlayerPlaceBeforeEvent as MinecraftBlockComponentPlayerPlaceBeforeEvent,
    BlockComponentRandomTickEvent as MinecraftBlockComponentRandomTickEvent,
    BlockComponentStepOffEvent as MinecraftBlockComponentStepOffEvent,
    BlockComponentStepOnEvent as MinecraftBlockComponentStepOnEvent,
    BlockComponentTickEvent as MinecraftBlockComponentTickEvent,
    ItemComponentUseEvent as MinecraftItemComponentUseEvent,
    BlockCustomComponent as MinecraftBlockCustomComponent,
    ItemCustomComponent as MinecraftItemCustomComponent,
    BlockEvent as MinecraftBlockEvent,
    system,
} from "@minecraft/server";
import * as MinecraftServer from "@minecraft/server";
import Block from "TeseractAPI/block/Block";
import Dimension from "TeseractAPI/Dimension";
import DimensionLocation from "TeseractAPI/DimensionLocation";
import Teseract from "TeseractAPI/Teseract";
import Entity from "TeseractAPI/entity/Entity";
import Player from "TeseractAPI/entity/Player";
import BlockPermutation from "TeseractAPI/block/BlockPermutation";

function DataEntity(entity: MinecraftServer.Entity | undefined) {
    return entity ? new Entity(entity) : undefined;
}

export class BlockEvent {
    #block: Block;
    #dimension: Dimension;

    constructor(data: MinecraftBlockEvent) {
        this.#dimension = Teseract.getDimension(data.dimension.id);
        this.#block = new Block(data.block);
    }

    /**
     * @remarks
     * Block impacted by this event.
     */
    public getBlock(): Block {
        try {
            return this.#block;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Dimension that contains the block that is the subject of
     * this event.
     */
    public getDimension() {
        try {
            return this.#dimension;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class BlockComponentEntityFallOnEvent extends BlockEvent {
    #minecraft_data: { entity?: Entity; fallDistance: number };

    constructor(data: MinecraftBlockComponentEntityFallOnEvent) {
        super(data);
        this.#minecraft_data = {
            entity: DataEntity(data.entity),
            fallDistance: data.fallDistance,
        };
    }

    /**
     * @remarks
     * Entity involved in this event.
     */
    public getEntity() {
        try {
            return this.#minecraft_data.entity;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Distance the entity fell.
     */
    public getFallDistance() {
        try {
            return this.#minecraft_data.fallDistance;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class BlockComponentOnPlaceEvent extends BlockEvent {
    #minecraft_data: { previous_block: MinecraftServer.BlockPermutation };

    constructor(data: MinecraftBlockComponentOnPlaceEvent) {
        super(data);
        this.#minecraft_data = {
            previous_block: data.previousBlock,
        };
    }

    /**
     * @remarks
     * Previous block permutation before placement.
     */
    public getPreviousBlock(): BlockPermutation {
        try {
            return new BlockPermutation(this.#minecraft_data.previous_block);
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class BlockComponentPlayerDestroyEvent extends BlockEvent {
    #minecraft_data: {
        destroyedBlockPermutation: MinecraftServer.BlockPermutation;
        player?: Player;
    };

    constructor(data: MinecraftBlockComponentPlayerDestroyEvent) {
        super(data);
        this.#minecraft_data = {
            destroyedBlockPermutation: data.destroyedBlockPermutation,
            player: DataEntity(data.player) as Player,
        };
    }

    /**
     * @remarks
     * Block permutation that was destroyed.
     */
    public getDestroyedBlockPermutation(): BlockPermutation {
        try {
            return new BlockPermutation(
                this.#minecraft_data.destroyedBlockPermutation
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Player involved in this event.
     */
    public getPlayer(): Player | undefined {
        try {
            return this.#minecraft_data.player;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class BlockComponentPlayerInteractEvent extends BlockEvent {
    #minecraft_data: {
        face: MinecraftServer.Direction;
        faceLocation: DimensionLocation;
        player?: Player;
    };

    constructor(data: MinecraftBlockComponentPlayerInteractEvent) {
        super(data);
        this.#minecraft_data = {
            face: data.face,
            faceLocation: data.faceLocation
                ? new DimensionLocation(
                      data.faceLocation.x,
                      data.faceLocation.y,
                      data.faceLocation.z,
                      this.getDimension()
                  )
                : undefined,
            player: DataEntity(data.player) as Player,
        };
    }

    /**
     * @remarks
     * Face of the block interacted with.
     */
    public getFace() {
        try {
            return this.#minecraft_data.face;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Location on the face where the interaction occurred.
     */
    public getFaceLocation(): DimensionLocation {
        try {
            return this.#minecraft_data.faceLocation;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Player involved in this event.
     */
    public getPlayer(): Player | undefined {
        try {
            return this.#minecraft_data.player;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    #minecraft_data;
    #bound_data;

    constructor(data: MinecraftBlockComponentPlayerPlaceBeforeEvent) {
        super(data);
        this.#bound_data = data;
        this.#minecraft_data = {
            face: data.face,
            permutationToPlace: data.permutationToPlace,
            player: DataEntity(data.player) as Player,
        };
    }

    /**
     * @remarks
     * Set the event to be canceled.
     * @param canceled - Boolean to set the cancellation state.
     */
    public setCanceled(canceled: true) {
        try {
            this.#bound_data.cancel = canceled;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Face of the block where the placement is occurring.
     */
    public getFace() {
        try {
            return this.#minecraft_data.face;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Block permutation to be placed.
     */
    public getPermutationToPlace() {
        try {
            return new BlockPermutation(
                this.#minecraft_data.permutationToPlace
            );
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }

    /**
     * @remarks
     * Player involved in this event.
     */
    public getPlayer(): Player | undefined {
        try {
            return this.#minecraft_data.player;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class BlockComponentRandomTickEvent extends BlockEvent {
    constructor(data: MinecraftBlockComponentRandomTickEvent) {
        super(data);
    }
}

export class BlockComponentStepOffEvent extends BlockEvent {
    #minecraft_data: { entity?: Entity };

    constructor(data: MinecraftBlockComponentStepOffEvent) {
        super(data);
        this.#minecraft_data = {
            entity: DataEntity(data.entity),
        };
    }

    /**
     * @remarks
     * Entity that stepped off the block.
     */
    public getEntity() {
        try {
            return this.#minecraft_data.entity;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class BlockComponentStepOnEvent extends BlockEvent {
    #minecraft_data: { entity?: Entity };

    constructor(data: MinecraftBlockComponentStepOnEvent) {
        super(data);
        this.#minecraft_data = {
            entity: DataEntity(data.entity),
        };
    }

    /**
     * @remarks
     * Entity that stepped on the block.
     */
    public getEntity() {
        try {
            return this.#minecraft_data.entity;
        } catch (error) {
            Teseract.log(error, error.stack);
        }
    }
}

export class BlockComponentTickEvent extends BlockEvent {
    constructor(data: MinecraftBlockComponentTickEvent) {
        super(data);
    }
}
