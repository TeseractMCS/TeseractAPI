import CustomComponentRegistry from "@teseract/api/custom_component/CustomComponentRegistry";
import TeseractPlugin from "@teseract/api/plugin/TeseractPlugin";
import ChatSendListener from "./event/ChatSendListener";

export default class TeseractSMP extends TeseractPlugin {
    public override onLoaded(): void {
        this.getEventManager().registerEventHandler(new ChatSendListener());
    }
}
