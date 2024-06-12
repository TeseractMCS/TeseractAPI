import * as MinecraftServer from "@minecraft/server";
import ItemEventBase from "./base/ItemEventBase";
import Block from "TeseractAPI/Block";
import Teseract from "TeseractAPI/Teseract";
import OptionalItemStack from "./base/OptionalItemStack";
import ItemUseOnEventBase from "./base/ItemUseOnEventBase";
import ItemCompleteUseEvent from "./ItemCompleteUseEvent";

//@ts-ignore
export default class ItemStartUseEvent extends ItemCompleteUseEvent {}
