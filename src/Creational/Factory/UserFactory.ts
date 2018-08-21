import { Guest } from "./Guest";
import { Manager } from "./Manager";
import { Member } from "./Member";
import { FactoryInterface } from "./FactoryInterface";
import { UserType } from "./UserType";
import { User } from "./User";

export class UserFactory implements FactoryInterface {
  constructor(
    public firstName: string,
    public lastName: string,
    public birthday: object,
    public location: string,
    public userName: string | null,
    public password: string | null,
    public branch: string | null,
    public accessCode: string | null
  ) {}

  public create(type: string): User {
    switch (type) {
      case UserType.GUEST:
        return this.createGuest();
      case UserType.MANAGER:
        return this.createManager();
      case UserType.MEMBER:
        return this.createMember();
      default:
        throw new Error("Undefined/Unsupported User Type");
    }
  }

  public createGuest(): Guest {
    return new Guest(
      this.firstName,
      this.lastName,
      this.birthday,
      this.location
    );
  }

  public createMember(): Member {
    return new Member(
      this.firstName,
      this.lastName,
      this.birthday,
      this.location,
      this.userName,
      this.password
    );
  }

  public createManager(): Manager {
    return new Manager(
      this.firstName,
      this.lastName,
      this.birthday,
      this.location,
      this.userName,
      this.password,
      this.branch,
      this.accessCode
    );
  }
}
