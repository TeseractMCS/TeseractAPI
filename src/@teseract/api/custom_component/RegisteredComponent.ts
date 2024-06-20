import { CustomComponentType } from "./CustomComponentType";
import { CustomComponents } from "./CustomComponents";

export interface RegisteredComponent {
    componentId: string;
    componentType: CustomComponentType;
    callback: CustomComponents[RegisteredComponent["componentType"]];
}