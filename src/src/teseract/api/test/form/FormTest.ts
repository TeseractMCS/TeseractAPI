import Player from "TeseractAPI/entity/Player";
import Response from "TeseractAPI/form/Response";
import {
    buttonForm,
    choiceForm,
    firstChoice,
    formBody,
    formButton,
    formTitle,
    messageForm,
    secondChoice,
} from "TeseractAPI/form/data/Form";
@buttonForm()
export class ButtonForm {
    @formTitle()
    title = "Form Title";

    @formBody()
    body = "Form Body";
    @formButton()
    button1(player: Player) {
        player.sendMessage("Seleccionaste el boton 1 mi bro");
        this.bindTest(player);
    }

    @formButton()
    suicidarse(player: Player) {
        player.sendMessage("Seleccionaste el boton de suicidio mi bro");
        player.kill();
    }

    bindTest(player: Player) {
        player.getInventory().setMainHandItemStack();
    }
}

@choiceForm()
export class ChoiceForm {
    @formTitle()
    title = "Form Title";

    @formBody()
    body = "Form Body";

    @firstChoice()
    choice1(player: Player) {
        player.sendMessage("You made a choice: 1")
    }

    @secondChoice()
    choice2(player: Player) {
        player.sendMessage("You made a choice: 2")
    }
}

@messageForm()
export class MessageForm {
    @formTitle()
    title = "Message Title";

    @formBody()
    body = "This is a message form";
}
