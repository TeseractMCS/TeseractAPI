import Teseract from "TeseractAPI/Teseract";
import TeseractPlugin from "TeseractAPI/plugin/TeseractPlugin";
import CustomComponentRegistry from "TeseractAPI/custom_component/CustomComponentRegistry";
import GoldenHeadComponent from "./component/ComponentTest";

export default class Test extends TeseractPlugin {
    public override onEnabled(
        componentRegistry: CustomComponentRegistry
    ): void {
        componentRegistry.registerItemComponent(
            "cib:golden_head",
            new GoldenHeadComponent()
        );
    }

    public override onLoaded(): void {
        this.getEventManager().registerEventHandler(new GoldenHeadComponent())
    }
}
