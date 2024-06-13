import Entity from "TeseractAPI/entity/Entity";

export default interface ExplosionOptions {
    allowUnderwater?: boolean;
    breaksBlocks?: boolean;
    causesFire?: boolean;
    source?: Entity;
}
