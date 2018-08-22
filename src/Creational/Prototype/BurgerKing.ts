import { FranchisePrototype } from "./FranchisePrototype";

export class BurgerKing implements FranchisePrototype {
  clone(): FranchisePrototype {
    return new BurgerKing();
  }
}
