"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SubmitButton = /** @class */ (function () {
    function SubmitButton(name) {
        this.name = name;
    }
    SubmitButton.prototype.create = function () {
        return "<button type='submit'>" + this.name + "</button>";
    };
    return SubmitButton;
}());
exports.SubmitButton = SubmitButton;
