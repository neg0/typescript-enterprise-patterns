import { Axis } from "./Axis";

describe("Testing Axis (Immutable Object Pattern", () => {
  const xPos: number = 192.2;
  const yPos: number = 52.82;

  let sut: Axis;

  beforeEach(() => {
    sut = new Axis(xPos, yPos);
  });

  it("should be able to get x position after instantiation", () => {
    expect(typeof sut.getX()).toEqual("number");
  });

  it("should be able to get y position after instantiation", () => {
    expect(typeof sut.getY()).toEqual("number");
  });
});
