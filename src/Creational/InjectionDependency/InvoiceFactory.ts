import { Invoice } from "./Invoice";
import { User } from "./User";
import { Factory } from "./Factory";

export class InvoiceFactory extends Factory {
  public static create(...args: Array<{ name: string, address: string }>): Invoice {
    const user = new User(args[0], args[1]);
    return new Invoice(user);
  }
}
