import { LoginForm } from "./LoginForm";

export interface LoginFormBuilderInterface {
  create(): LoginForm;
}
