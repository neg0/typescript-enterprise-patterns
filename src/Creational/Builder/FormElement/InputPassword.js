"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InputPassword = /** @class */ (function () {
    function InputPassword(name) {
        this.name = name;
    }
    InputPassword.prototype.create = function () {
        return "<input type='password' name='" + this.name + "' />";
    };
    return InputPassword;
}());
exports.InputPassword = InputPassword;
