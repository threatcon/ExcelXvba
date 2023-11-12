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
exports.VBProject = void 0;
var xvba_com_1 = require("xvba-com");
var VBComponents_1 = require("./VBComponents");
var VBProject = /** @class */ (function (_super) {
    __extends(VBProject, _super);
    function VBProject(prop) {
        return _super.call(this, prop) || this;
    }
    Object.defineProperty(VBProject.prototype, "VBComponents", {
        get: function () {
            if (this._VBComponents == undefined) {
                this._VBComponents = this.CreateObject(VBComponents_1.VBComponents);
            }
            return this._VBComponents;
        },
        enumerable: false,
        configurable: true
    });
    return VBProject;
}(xvba_com_1.XvbaCOM));
exports.VBProject = VBProject;
