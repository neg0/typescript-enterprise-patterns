import { FranchisePrototype } from "./FranchisePrototype";

export class McDonalds implements FranchisePrototype {
  clone(): FranchisePrototype {
    return new McDonalds();
  }
}
