import { FranchisePrototype } from "./FranchisePrototype";
import { McDonalds } from "./McDonalds";
import { Subway } from "./Subway";
import { FranchiseFactory } from "./FranchiseFactory";
import { BurgerKing } from "./BurgerKing";
import { Franchise } from "./Franchise";

export class BritainFranchiseFactory extends FranchiseFactory {
  private brands: { [brand: string]: FranchisePrototype } = {};

  constructor() {
    super();
    this.brands[Franchise.MCDONALDS] = new McDonalds();
    this.brands[Franchise.SUBWAY] = new Subway();
    this.brands[Franchise.BURGER_KING] = new BurgerKing();
  }

  public createFranchise(brand: string): FranchisePrototype {
    const brandInstance: FranchisePrototype = this.brands[brand];

    return brandInstance.clone();
  }
}
