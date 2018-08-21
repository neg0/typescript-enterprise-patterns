import { User } from "./User";

export class Manager extends User {
  constructor(
    public firstName: string,
    public lastName: string,
    public birthday: object,
    public location: string,
    public userName: string,
    public password: string,
    public branch: string,
    public accessCode: string
  ) {
    super(firstName, lastName, birthday, location);
  }
}
