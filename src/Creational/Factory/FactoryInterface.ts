import { User } from "./User";

export interface FactoryInterface {
  create(type: string): User;
}
