import { User } from "./User";

export class Member implements User {
  constructor(
    public firstName: string,
    public lastName: string,
    public birthday: object,
    public location: string,
    public userName: string,
    public password: string
  ) {}
}
