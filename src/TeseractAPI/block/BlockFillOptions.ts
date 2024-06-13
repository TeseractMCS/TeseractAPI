import BlockPermutation from "./BlockPermutation";

export default interface BlockFillOptions {
    /**
     * @remarks
     * When specified, the fill operation will only apply to blocks
     * that match this description.
     *
     */
    matchingBlock?: BlockPermutation;
}
