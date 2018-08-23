"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Invitation = /** @class */ (function () {
    function Invitation(type) {
        this.type = type;
    }
    Invitation.getInvitee = function (type) {
        // Lazy initialization takes place here
        if (undefined === Invitation.types[type]) {
            Invitation.types[type] = new Invitation(type);
        }
        return Invitation.types[type];
    };
    Invitation.getAllInvitees = function () {
        return {
            list: Invitation.types,
            count: Object.getOwnPropertyNames(Invitation.types).length
        };
    };
    Invitation.types = {};
    return Invitation;
}());
exports.Invitation = Invitation;
