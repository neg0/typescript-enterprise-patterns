import { FormBuilderInterface } from "./FormBuilderInterface";

export class FingerPrintScanner implements FormBuilderInterface {
  constructor(private name: string) {}

  public create(): string {
    return (
      "<iframe name='" +
      this.name +
      "' src='//finger-print-api-detection'></iframe>"
    );
  }
}
