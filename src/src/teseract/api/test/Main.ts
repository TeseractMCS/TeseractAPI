import Teseract from "@teseract/api/Teseract";
import TeseractPlugin from "@teseract/api/plugin/TeseractPlugin";
import CustomComponentRegistry from "@teseract/api/custom_component/CustomComponentRegistry";
import GoldenHeadComponent from "./component/ComponentTest";
import PlayerEventsTest from "./event/player/PlayerTest";
import ItemEventsTest from "./event/item/ItemTest";
import BlockEventsTest from "./event/block/BlockTest";
import MyItemComponent from "./component/ComponentTest";

export default class Test extends TeseractPlugin {
    public override onEnabled(
        componentRegistry: CustomComponentRegistry,
    ): void {
        componentRegistry.registerItemComponent(
            "cib:my_component",
            new MyItemComponent(),
        );
    }

    public override onLoaded(): void {
        // this.getEventManager().registerEventHandler(new GoldenHeadComponent());
        this.getEventManager().registerEventHandler(new PlayerEventsTest());
        // this.getEventManager().registerEventHandler(new ItemEventsTest());
        this.getEventManager().registerEventHandler(new BlockEventsTest());
    }
}
