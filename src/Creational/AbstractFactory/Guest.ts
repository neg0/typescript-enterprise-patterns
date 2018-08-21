import { User } from "./User";

export class Guest extends User {
  constructor(
    public firstName: string,
    public lastName: string,
    public birthday: object,
    public location: string
  ) {
    super(firstName, lastName, birthday, location);
  }
}
