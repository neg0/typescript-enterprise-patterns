import { User } from "./User";

export class Guest implements User {
  constructor(
    public firstName: string,
    public lastName: string,
    public birthday: object,
    public location: string
  ) {}
}
