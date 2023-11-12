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
exports.VBComponent = void 0;
var xvba_com_1 = require("xvba-com");
var VBComponent = /** @class */ (function (_super) {
    __extends(VBComponent, _super);
    function VBComponent(param) {
        return _super.call(this, param) || this;
    }
    Object.defineProperty(VBComponent.prototype, "Name", {
        get: function () {
            if (this._Name == undefined) {
                this._Name = this.GetStrValue("Name");
            }
            return this._Name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VBComponent.prototype, "Type", {
        get: function () {
            if (this._Type == undefined) {
                this._Type = this.GetNumbValue("Type");
            }
            return this._Type;
        },
        enumerable: false,
        configurable: true
    });
    VBComponent.prototype.Export = function (compFilePath) {
        return this.CallMethodToGetNumber("Export", compFilePath);
    };
    return VBComponent;
}(xvba_com_1.XvbaCOM));
exports.VBComponent = VBComponent;
