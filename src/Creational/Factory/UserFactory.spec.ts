import { UserFactory } from "./UserFactory";
import { UserType } from "./UserType";
import { Guest } from "./Guest";
import { Member } from "./Member";
import { Manager } from "./Manager";
import { User } from "./User";

describe("Testing User Factory", () => {
  let sut: UserFactory;

  const fname = "Hadi";
  const lname = "Tajallaei";
  const birthday = new Date();
  const location = "London";
  const username = "username";
  const password = "password";
  const accessCode = "782S2";
  const branch = "London West";

  beforeEach(() => {
    sut = new UserFactory(
      fname,
      lname,
      birthday,
      location,
      username,
      password,
      branch,
      accessCode
    );
  });

  afterEach(() => {
    sut = undefined;
  });

  describe("should create Guest", () => {
    let guestUser: User;

    beforeEach(() => {
      guestUser = sut.create(UserType.GUEST);
    });

    it("should create Guest User", () => {
      expect(guestUser instanceof Guest).toBe(true);
    });
    // todo: maybe extend the test (adding more it) checking properties
  });

  describe("should create Member", () => {
    let memberUser: User;

    beforeEach(() => {
      memberUser = sut.create(UserType.MEMBER);
    });

    it("should create Member User", () => {
      expect(memberUser instanceof Member).toBe(true);
    });
    // todo: maybe extend the test (adding more it) checking properties
  });

  describe("should create Manager", () => {
    let managerUser: User;

    beforeEach(() => {
      managerUser = sut.create(UserType.MANAGER);
    });

    it("should create Manager User", () => {
      expect(managerUser instanceof Manager).toBe(true);
    });
    // todo: maybe extend the test (adding more it) checking properties
  });

  describe("should not create undefined type of user and throw an error", () => {
      it("should throw an error", () => {
          expect(() => { sut.create('NotDefined') }).toThrow(new Error(UserFactory.ERROR_MSG));
      });
  });
});
