import { FranchisePrototype } from "./FranchisePrototype";

export class Subway implements FranchisePrototype {
  clone(): FranchisePrototype {
    return new Subway();
  }
}
