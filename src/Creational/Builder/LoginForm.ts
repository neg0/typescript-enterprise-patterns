import { InputText } from "./FormElement/InputText";
import { InputPassword } from "./FormElement/InputPassword";
import { SubmitButton } from "./FormElement/SubmitButton";
import { Captcha } from "./FormElement/Captcha";
import { FingerPrintScanner } from "./FormElement/FingerPrintScanner";

export interface LoginForm {
  username: InputText;
  password: InputPassword;
  submit: SubmitButton;
  captcha?: Captcha;
  fingerPrint?: FingerPrintScanner;
}
