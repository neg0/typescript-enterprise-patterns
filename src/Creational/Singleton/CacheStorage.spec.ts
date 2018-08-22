import { CacheStorage } from "./CacheStorage";

describe("Testing Cache Singleton", () => {
  const sut: CacheStorage = CacheStorage.sharedInstance;

  it("should have one instance of Cache", () => {
    expect(sut instanceof CacheStorage).toBe(true);
  });
});
