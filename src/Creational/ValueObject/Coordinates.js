"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Coordinates = /** @class */ (function () {
    function Coordinates(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Coordinates.prototype, "vertical", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Coordinates.prototype, "horizontal", {
        get: function () {
            return this.y;
        },
        enumerable: true,
        configurable: true
    });
    return Coordinates;
}());
exports.Coordinates = Coordinates;
