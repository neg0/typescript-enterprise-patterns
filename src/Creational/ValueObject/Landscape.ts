import { Address } from "./Address/Address";
import { Coordinate } from "./Coordinate/Coordinate";

export class Landscape {
  public constructor(
    public name: string,
    public address: Address,
    public Coordinate: Coordinate
  ) {}
}
