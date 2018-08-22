import { Coordinates } from "./Coordinates";

describe("Testing Value Object (Coordinates)", () => {
  let sut: Coordinates;
  const lat = 1;
  const lng = 2;

  beforeEach(() => {
    sut = new Coordinates(lat, lng);
  });

  afterEach(() => {
    sut = undefined;
  });

  it("should be instantiable", () => {
    expect(sut instanceof Coordinates).toBe(true);
  });

  it("should have latitude", function() {
    expect(sut.latitude).toBe(lat);
  });

  it("should have longitude", function() {
    expect(sut.longitude).toBe(lng);
  });
});
