import { Cache } from "./Storage";

describe("Testing Cache Singleton", () => {
  const sut: Cache.Storage = Cache.Storage.sharedInstance();

  it("should have one instance of Cache", () => {
    expect(sut instanceof Cache.Storage).toBe(true);
  });
});
