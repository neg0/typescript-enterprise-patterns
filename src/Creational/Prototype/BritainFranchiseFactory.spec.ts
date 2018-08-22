import { BritainFranchiseFactory } from "./BritainFranchiseFactory";
import { Franchise } from "./Franchise";

describe("Testing Fanchise Factory", () => {
  const factory = new BritainFranchiseFactory();

  it("should create three franchises", () => {
    const prototypes = [
      Franchise.MCDONALDS,
      Franchise.SUBWAY,
      Franchise.BURGER_KING
    ].map(brand => {
      return factory.createFranchise(brand);
    });

    expect(prototypes.length).toEqual(3);
  });
});
