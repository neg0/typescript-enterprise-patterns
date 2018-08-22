import { Guest } from "./Guest";
import { Manager } from "./Manager";
import { Member } from "./Member";
import { FactoryInterface } from "./FactoryInterface";
import { UserType } from "./UserType";
import { User } from "./User";

export class UserFactory implements FactoryInterface {
  public static ERROR_MSG: string = "Undefined/Unsupported User Type";

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
      case UserType.MEMBER:
          return this.createMember();
      case UserType.MANAGER:
        return this.createManager();
      default:
        throw new Error(UserFactory.ERROR_MSG);
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
