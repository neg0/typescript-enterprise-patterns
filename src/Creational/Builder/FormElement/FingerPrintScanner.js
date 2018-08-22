"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FingerPrintScanner = /** @class */ (function () {
    function FingerPrintScanner(name) {
        this.name = name;
    }
    FingerPrintScanner.prototype.create = function () {
        return ("<iframe name='" +
            this.name +
            "' src='//finger-print-api-detection'></iframe>");
    };
    return FingerPrintScanner;
}());
exports.FingerPrintScanner = FingerPrintScanner;
