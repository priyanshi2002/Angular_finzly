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
exports.Square = void 0;
var day4A_1 = require("./day4A");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(s) {
        var _this = _super.call(this) || this;
        _this.side = s;
        _this.area = 0;
        return _this;
    }
    Square.prototype.myArea = function () {
        this.area = this.side * this.side;
    };
    Square.prototype.display = function () {
        console.log("\n           \n                Side  :: ".concat(this.side, "\n                Area    :: ").concat(this.area, "\n            "));
    };
    return Square;
}(day4A_1.Shape));
exports.Square = Square;
