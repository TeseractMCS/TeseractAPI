import * as MinecraftServer from "@minecraft/server";
import ItemEventBase from "./base/ItemEventBase";
import Block from "TeseractAPI/block/Block";
import Teseract from "TeseractAPI/Teseract";
import OptionalItemStack from "./base/OptionalItemStack";
import ItemUseOnEventBase from "./base/ItemUseOnEventBase";

//@ts-ignore
export default class ItemStartUseOnEvent
    extends ItemUseOnEventBase
    implements OptionalItemStack
{
}
