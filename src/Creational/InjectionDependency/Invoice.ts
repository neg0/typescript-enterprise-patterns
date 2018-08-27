import { User } from "./User";

export class Invoice {
  private amount: number = 45;
  private currencySymbol: string = "£";

  public constructor(private user: User) {}

  public create(): { name: string, address: string, total: string } {
    return {
      name: this.user.name,
      address: this.user.address,
      total: this.currencySymbol + " " + this.amount
    };
  }
}
