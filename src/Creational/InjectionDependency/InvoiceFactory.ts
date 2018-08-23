import { Invoice } from "./Invoice";
import { User } from "./User";
import {Factory} from './Factory';

export class InvoiceFactory extends Factory {
  public static create(...args) {
      return new Invoice(new User(args.name, args.address));
  }
}
