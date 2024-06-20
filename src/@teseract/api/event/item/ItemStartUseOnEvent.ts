import * as MinecraftServer from "@minecraft/server";
import ItemEventBase from "./base/ItemEventBase";
import Block from "@teseract/api/block/Block";
import Teseract from "@teseract/api/Teseract";
import OptionalItemStack from "./base/OptionalItemStack";
import ItemUseOnEventBase from "./base/ItemUseOnEventBase";

//@ts-ignore
export default class ItemStartUseOnEvent
    extends ItemUseOnEventBase
    implements OptionalItemStack
{
}
