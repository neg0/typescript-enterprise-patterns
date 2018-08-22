import { InputText } from "./FormElement/InputText";
import { InputPassword } from "./FormElement/InputPassword";
import { SubmitButton } from "./FormElement/SubmitButton";
import { Captcha } from "./FormElement/Captcha";
import { FingerPrintScanner } from "./FormElement/FingerPrintScanner";
import { LoginForm } from "./LoginForm";

export class LoginFormBuilder implements LoginForm {
  constructor(
    public username: InputText,
    public password: InputPassword,
    public submit: SubmitButton,
    public captcha?: Captcha,
    public fingerPrint?: FingerPrintScanner
  ) {}
}
