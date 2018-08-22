import { FormBuilderInterface } from "./FormBuilderInterface";

export class SubmitButton implements FormBuilderInterface {
  constructor(private name: string) {}

  public create(): string {
    return "<button type='submit'>" + this.name + "</button>";
  }
}
