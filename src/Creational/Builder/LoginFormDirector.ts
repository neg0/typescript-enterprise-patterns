import { LoginFormBuilderInterface } from "./LoginFormBuilderInterface";
import { LoginFormBuilder } from "./LoginFormBuilder";
import { FingerPrintScanner } from "./FormElement/FingerPrintScanner";
import { LoginForm } from "./LoginForm";
import { Captcha } from "./FormElement/Captcha";

export class LoginFormDirector implements LoginFormBuilderInterface {
  constructor(private loginFormBuilder: LoginFormBuilder) {}

  public addFingerPrintSecurity(
    scanner: FingerPrintScanner
  ): LoginForm {
    this.loginFormBuilder.fingerPrint = scanner;
    return this.loginFormBuilder;
  }

  public addCaptcha(captcha: Captcha): LoginForm {
    this.loginFormBuilder.captcha = captcha;
    return this.loginFormBuilder;
  }

  public create(): LoginForm {
    return this.loginFormBuilder;
  }

  public output(): string {
    return JSON.stringify(this.loginFormBuilder);
  }
}
