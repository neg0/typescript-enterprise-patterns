import { Coordinate } from "./Coordinate";

describe("Testing Value Object (Coordinate)", () => {
  let sut: Coordinate;
  const lat = 1;
  const lng = 2;

  beforeEach(() => {
    sut = new Coordinate(lat, lng);
  });

  afterEach(() => {
    sut = undefined;
  });

  it("should be instantiable", () => {
    expect(sut instanceof Coordinate).toBe(true);
  });

  it("should have latitude", () => {
    expect(sut.lat).toBe(lat);
  });

  it("should have longitude", () => {
    expect(sut.lng).toBe(lng);
  });
});
