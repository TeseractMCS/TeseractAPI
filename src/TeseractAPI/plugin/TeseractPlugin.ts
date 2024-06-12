import {
    BlockCustomComponent,
    ItemCustomComponent,
    WorldInitializeBeforeEvent,
    world,
} from "@minecraft/server";
import Teseract from "TeseractAPI/Teseract";
import CustomComponentRegistry from "TeseractAPI/custom_component/CustomComponentRegistry";
import EventManager from "TeseractAPI/event/EventManager";

export default abstract class TeseractPlugin {
    public pluginInstance: TeseractPlugin = {} as TeseractPlugin;
    
    public log = Teseract.log

    public getEventManager() {
        try {
            return EventManager.getInstance()
        } catch (error) {
            this.log(error, error.stack);
        }
    }

    public onLoaded() {}

    public onEnabled(componentRegistry: CustomComponentRegistry) {}
}
