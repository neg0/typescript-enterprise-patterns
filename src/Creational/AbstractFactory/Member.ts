import { User } from "./User";

export class Member extends User {
  constructor(
    public firstName: string,
    public lastName: string,
    public birthday: object,
    public location: string,
    public userName: string,
    public password: string
  ) {
    super(firstName, lastName, birthday, location);
  }
}
