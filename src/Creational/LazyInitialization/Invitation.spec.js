"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Invitation_1 = require("./Invitation");
describe('Testing Invitation (Lazy Initialisation)', function () {
    var sut;
    it('should add invitee to the object', function () {
        Invitation_1.Invitation.getInvitee('Hadi');
        Invitation_1.Invitation.getInvitee('John');
        // expect(Invitation.getAllInvitees()).toContain({count: 2});
        console.log('hereee', Invitation_1.Invitation.getAllInvitees());
    });
});
