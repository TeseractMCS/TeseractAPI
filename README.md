Here's a README.md for your TeseractAPI project:

---

# TeseractAPI

TeseractAPI is an advanced Minecraft Bedrock Edition scripting API designed to simplify custom event handling, entity management, and form interactions. Built on top of the official Minecraft Bedrock scripting API, it offers a robust and extensible framework for developers.

## Features

<!-- - **Custom Event Dispatchers**: Seamlessly manage custom events with decorator-based dispatchers. -->

-   **Rebranded Event Dispatcher**: Handle events such as player death, block placement, and block breaking, etc... That occur in the Minecraft environment
-   **Inventory Management**: Enhanced inventory handling, without the need to get a component and then a container, like in Minecraft Bedrock Scripting API
-   **Dimension Wrapping**: Easy manipulation of dimensions and locations, as well as vanilla methods.
-   **Entity Caching**: Efficiently manage entities with a caching system to prevent loosing acces to decaying Entity objects
-   **Form Handling**: Simplified form creation and handling using decorators.
-   **Command Dispatching**: Advanced command creation and dispatching using decorators. _Coming soon!_

## Installation

To install TeseractAPI, clone the repository and install the necessary dependencies:

```sh
git clone https://github.com/TeseractMCS/TeseractAPI.git
cd TeseractAPI
npm install
```

## Usage

### Custom Event Handling

Create and dispatch custom events using decorators. Here's an example of handling a player death event:

```typescript
import Teseract from "TeseractAPI/Teseract";
import PlayerDieEvent from "TeseractAPI/event/PlayerDieEvent";
import eventListener from "TeseractAPI/EventListener";

class MyPlayerDeathHandler {
    @eventListener("PlayerDieEvent")
    onPlayerDie(event) {
        Teseract.broadcastMessage(`${event.getPlayer().getName()} has died!`);
    }
}
```

### Form Creation

Easily create and handle forms using the form decorators:

```typescript
import { buttonForm, formTitle, formBody, formButton } from "TeseractAPI/forms/Forms";

@buttonForm()
class MyForm {
    @formTitle()
    title = "Welcome Form";

    @formBody()
    body = "Please press a button.";

    @formButton()
    handleButtonPress(player) {
        player.sendMessage("You pressed a button!");
    }
}
```

<!-- ### Inventory Management

Manage player inventories and containers with extended methods:

```typescript

``` -->

## Changelog

-   Custom dispatchers support (for internally handling complex events)
-   Form decorator-based wrapper added (base)
-   PlayerEvents: Postmortal, Die, PlaceBlock, BreakBlock
-   EntityEvents: Die
-   ItemEvents debugged
-   Inventory & PlayerInventory class refactor
-   Combined vanilla Container and InventoryComponent classes
-   Added dropItemStack to Inventory
-   Added dropArmorItemStack to PlayerInventory
-   Added EntityCache for possible decaying EntityObjects (projectiles & exploding entities, TODO: projectiles cache registering)
-   TODO: EntityCache automatic decaying
-   TODO: Decorator-based command dispatcher
-   Finished dimension wrapping
-   Added NativeParser util
-   Refactored Dimension and DimensionLocation constructors
-   TODO: Finish the NativeVec3 wrapping all over the API
-   Exposed showForm method in Player class
-   Added isCachedEntity method to Entity and CachedEntity classes
-   Finished Block class wrapping
-   Added BlockPermutation wrapped class
-   Added getNativeHandle to all wrapped classes, for getting vanilla class instances
-   Wrapped Raycast interfaces
-   Wrapped various "Options" vanilla interfaces
-   Added early implementation of onConsume custom component event

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For more information and examples, please refer to the source code and the documentation within the repository.
