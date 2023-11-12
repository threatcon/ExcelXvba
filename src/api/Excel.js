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
exports.Excel = void 0;
var xvba_com_1 = require("xvba-com");
var Sheets_1 = require("./Sheets");
var WorkBooks_1 = require("./WorkBooks");
var Excel = /** @class */ (function (_super) {
    __extends(Excel, _super);
    function Excel() {
        var _this = _super.call(this, "Excel.Application") || this;
        _this.Visible = function () { return _this.SetBooleanValue("Visible", true); };
        _this.Name = function () { return _this.GetStrValue("Name"); };
        _this.Quit = function () { return _this.CallMethodToGetVoid("Quit"); };
        _this.WorkBooks = new WorkBooks_1.WorkBooks();
        return _this;
    }
    Object.defineProperty(Excel.prototype, "Sheets", {
        get: function () {
            if (this._Sheets == undefined) {
                this._Sheets = this.CreateObject(Sheets_1.Sheets);
                return this._Sheets;
            }
            else {
                return this._Sheets;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Excel;
}(xvba_com_1.XvbaCOM));
exports.Excel = Excel;
