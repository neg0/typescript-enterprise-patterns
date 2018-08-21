export class Coordinates {
  constructor(private x: number, private y: number) {}

  public get vertical() {
    return this.x;
  }

  public get horizontal() {
    return this.y
  }
}
