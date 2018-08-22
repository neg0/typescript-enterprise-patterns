"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Captcha = /** @class */ (function () {
    function Captcha(captchaCode) {
        this.captchaCode = captchaCode;
    }
    Captcha.prototype.create = function () {
        return ("<div>" +
            this.captchaCode +
            "</div>" +
            "<input type='text' name='captcha-code' />");
    };
    return Captcha;
}());
exports.Captcha = Captcha;
