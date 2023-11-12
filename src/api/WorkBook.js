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
exports.WorkBook = void 0;
var xvba_com_1 = require("xvba-com");
var VBProject_1 = require("./VBProject");
var WorkBook = /** @class */ (function (_super) {
    __extends(WorkBook, _super);
    function WorkBook(prop) {
        var _this = _super.call(this, prop) || this;
        _this.FullName = function () { return _this.GetStrValue("FullName"); };
        return _this;
    }
    Object.defineProperty(WorkBook.prototype, "VBProject", {
        get: function () {
            if (this._VBProject == undefined) {
                this._VBProject = this.CreateObject(VBProject_1.VBProject);
                return this._VBProject;
            }
            else {
                return this._VBProject;
            }
        },
        set: function (ss) {
            this._VBProject = ss;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkBook.prototype, "Activate", {
        get: function () {
            return this.GetNumbValue("Activate");
        },
        enumerable: false,
        configurable: true
    });
    return WorkBook;
}(xvba_com_1.XvbaCOM));
exports.WorkBook = WorkBook;
