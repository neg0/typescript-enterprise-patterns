import { Coordinates } from "./Coordinates";

describe("Testing Value Object (Coordinates)", () => {
  let sut: Coordinates;
  const x = 1;
  const y = 2;

  beforeEach(() => {
    sut = new Coordinates(x, y);
  });

  afterEach(() => {
    sut = undefined;
  });

  it("should be instantiated", () => {
    expect(sut instanceof Coordinates).toBe(true);
  });

  it("should have position x", function() {
    expect(sut.vertical).toBe(x);
  });

  it("should have position y", function() {
    expect(sut.horizontal).toBe(y);
  });
});
