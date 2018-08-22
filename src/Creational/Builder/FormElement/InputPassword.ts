import { FormBuilderInterface } from "./FormBuilderInterface";

export class InputPassword implements FormBuilderInterface {
  constructor(private name: string) {}

  public create(): string {
    return "<input type='password' name='" + this.name + "' />";
  }
}
