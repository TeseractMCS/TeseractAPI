"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BlockEventBase_block;
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = require("TeseractAPI/block/Block");
var Teseract_1 = require("TeseractAPI/Teseract");
var BlockEventBase = /** @class */ (function () {
    function BlockEventBase(data) {
        _BlockEventBase_block.set(this, void 0);
        __classPrivateFieldSet(this, _BlockEventBase_block, new Block_1.default(data.block), "f");
    }
    BlockEventBase.prototype.getBlock = function () {
        try {
            return __classPrivateFieldGet(this, _BlockEventBase_block, "f");
        }
        catch (error) {
            Teseract_1.default.log(error, error.stack);
        }
    };
    return BlockEventBase;
}());
_BlockEventBase_block = new WeakMap();
exports.default = BlockEventBase;
