import Teseract from "TeseractAPI/Teseract";
import TeseractPlugin from "TeseractAPI/plugin/TeseractPlugin";
import CustomComponentRegistry from "TeseractAPI/custom_component/CustomComponentRegistry";
import OnUse from "./component/OnUse";
import eventListener from "TeseractAPI/event/EventListener";
import { system } from "@minecraft/server";
// import ItemUseEvent from "TeseractAPI/event/item/ItemUse";
import { ItemMaterial } from "TeseractAPI/material/ItemMaterial";
import Events from "TeseractAPI/event/Events";
import UseTest from "./event/UseTest";
import ItemEventsTest from "./event/item/ItemTest";

// import UseTest from "./event/UseTest";

export default class UHC extends TeseractPlugin {
    public override onEnabled(
        componentRegistry: CustomComponentRegistry
    ): void {
        componentRegistry.registerItemComponent("cib:test", new OnUse());
    }

    public override onLoaded(): void {
        this.getEventManager().registerEventHandler(new ItemEventsTest());
    }
}
