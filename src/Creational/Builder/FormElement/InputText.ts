import { FormBuilderInterface } from "./FormBuilderInterface";

export class InputText implements FormBuilderInterface {
  constructor(private name: string) {}

  public create(): string {
    return "<input type='text' name='" + this.name + "' />";
  }
}
