import { Invitation } from "./Invitation";

describe("Testing Invitation (Lazy Initialisation)", () => {
  let sut: Invitation;

  it("should add invitee to the object", function() {
    Invitation.getInvitee("Hadi");
    Invitation.getInvitee("John");
    expect(Invitation.getCount()).toEqual(2);
  });
});
