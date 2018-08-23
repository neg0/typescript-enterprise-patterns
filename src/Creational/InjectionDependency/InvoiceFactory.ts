import { Invoice } from "./Invoice";
import { User } from "./User";
import { Factory } from "./Factory";

export class InvoiceFactory extends Factory {
  public static create(...args) {
    const user = new User(args.name, args.address);
    return new Invoice(user);
  }
}
