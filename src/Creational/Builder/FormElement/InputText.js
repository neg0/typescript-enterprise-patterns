"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InputText = /** @class */ (function () {
    function InputText(name) {
        this.name = name;
    }
    InputText.prototype.create = function () {
        return "<input type='text' name='" + this.name + "' />";
    };
    return InputText;
}());
exports.InputText = InputText;
