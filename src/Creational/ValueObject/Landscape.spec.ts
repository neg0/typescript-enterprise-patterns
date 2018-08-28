import { Landscape } from "./Landscape";
import { Address } from "./Address/Address";
import { Coordinate } from "./Coordinate/Coordinate";

describe("Testing Landscape Entity with two value object Address and Coordinate", () => {
  const address: Address = jasmine.createSpyObj("Coordinate", [""]);
  const coordinate: Coordinate = jasmine.createSpyObj("Coordinate", [""]);
  let sut: Landscape;

  beforeEach(() => {
    sut = new Landscape("Washington Monument", address, coordinate);
  });

  it("should have a name", () => {
    expect(sut.name.length).toBeGreaterThan(0);
  });

  it("should have an Address object value", () => {
    expect(Object.getOwnPropertyNames(sut.address).length).toBeGreaterThan(0);
  });

  it("should have a Coordinate object value", () => {
    expect(Object.getOwnPropertyNames(sut.address).length).toBeGreaterThan(0);
  });
});
