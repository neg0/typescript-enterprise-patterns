export class Coordinates {
  constructor(private lat: number, private lng: number) {}

  public get latitude() {
    return this.lat;
  }

  public get longitude() {
    return this.lng;
  }
}
