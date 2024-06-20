import Player from "@teseract/api/entity/Player";
import Response from "@teseract/api/ui/Response";
import Form from "@teseract/api/ui/Form";
@Form.Action()
export class ButtonForm {
    @Form.title()
    title = "Form Title";

    @Form.body()
    body = "Form Body";
    @Form.button("boton 1")
    button1(player: Player) {
        player.sendMessage("Seleccionaste el boton 1 mi bro");
        this.bindTest(player);
    }

    @Form.button("suicidarse")
    suicidarse(player: Player) {
        player.sendMessage("Seleccionaste el boton de suicidio mi bro");
        player.kill();
    }

    bindTest(player: Player) {
        player.getInventory().setMainHandItemStack();
    }
}

// @Form.Message()
// export class ChoiceForm {
//     @Form.title()
//     title = "Form Title";

//     @Form.body()
//     body = "Form Body";

//     @F()
//     choice1(player: Player) {
//         player.sendMessage("You made a choice: 1")
//     }

//     @secondChoice()
//     choice2(player: Player) {
//         player.sendMessage("You made a choice: 2")
//     }
// }

// @messageForm()
// export class MessageForm {
//     @formTitle()
//     title = "Message Title";

//     @formBody()
//     body = "This is a message form";
// }
