import type { CustomComponents } from "./CustomComponents";


export enum CustomComponentType {
    Block = "block",
    Item = "item",
}

export type CustomComponentTypeMap = keyof typeof CustomComponentType;

