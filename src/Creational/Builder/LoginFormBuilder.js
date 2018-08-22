"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginFormBuilder = /** @class */ (function () {
    function LoginFormBuilder(username, password, submit, captcha, fingerPrint) {
        this.username = username;
        this.password = password;
        this.submit = submit;
        this.captcha = captcha;
        this.fingerPrint = fingerPrint;
    }
    return LoginFormBuilder;
}());
exports.LoginFormBuilder = LoginFormBuilder;
