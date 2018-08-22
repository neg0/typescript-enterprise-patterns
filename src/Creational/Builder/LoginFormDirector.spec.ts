import { LoginFormDirector } from "./LoginFormDirector";
import { LoginFormBuilder } from "./LoginFormBuilder";

describe("Testing Login Form Director for Builder pattern", () => {
  const loginFormBuilder = jasmine.createSpyObj("LoginFormBuilder", ['']);
  const captcha = jasmine.createSpyObj("Captcha", [""]);
  const fingerPrint = jasmine.createSpyObj("FingerPrintScanner", [""]);
  let sut: LoginFormDirector = new LoginFormDirector(loginFormBuilder);

  it("should be instantiable", () => {
    expect(sut instanceof LoginFormDirector).toBe(true);
  });

  it("should add captcha to login form", () => {
      sut.addCaptcha(captcha);
  });

  it("should add Finger Scanner to login form", () => {
      sut.addFingerPrintSecurity(fingerPrint);
  });
});
