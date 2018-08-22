import { FranchisePrototype } from "./FranchisePrototype";

export abstract class FranchiseFactory {
  abstract createFranchise(brand): FranchisePrototype;
}
