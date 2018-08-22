import { FormBuilderInterface } from "./FormBuilderInterface";

export class Captcha implements FormBuilderInterface {
  constructor(private captchaCode: string) {}

  public create(): string {
    return (
      "<div>" +
      this.captchaCode +
      "</div>" +
      "<input type='text' name='captcha-code' />"
    );
  }
}
