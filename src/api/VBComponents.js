"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VBComponents = void 0;
var xvba_com_1 = require("xvba-com");
var VBComponent_1 = require("./VBComponent");
var VBComponents = /** @class */ (function (_super) {
    __extends(VBComponents, _super);
    function VBComponents(prop) {
        return _super.call(this, prop) || this;
    }
    Object.defineProperty(VBComponents.prototype, "Count", {
        get: function () {
            this._Count = this.GetNumbValue("Count");
            return this._Count;
        },
        enumerable: false,
        configurable: true
    });
    VBComponents.prototype.Item = function (value) {
        return this.CallMethodToGetObject("Item", VBComponent_1.VBComponent, value);
    };
    return VBComponents;
}(xvba_com_1.XvbaCOM));
exports.VBComponents = VBComponents;
