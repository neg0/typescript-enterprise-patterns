"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginFormDirector = /** @class */ (function () {
    function LoginFormDirector(loginFormBuilder) {
        this.loginFormBuilder = loginFormBuilder;
    }
    LoginFormDirector.prototype.addFingerPrintSecurity = function (scanner) {
        this.loginFormBuilder.fingerPrint = scanner;
        return this.loginFormBuilder;
    };
    LoginFormDirector.prototype.addCaptcha = function (captcha) {
        this.loginFormBuilder.captcha = captcha;
        return this.loginFormBuilder;
    };
    LoginFormDirector.prototype.create = function () {
        return this.loginFormBuilder;
    };
    LoginFormDirector.prototype.output = function () {
        return JSON.stringify(this.loginFormBuilder);
    };
    return LoginFormDirector;
}());
exports.LoginFormDirector = LoginFormDirector;
