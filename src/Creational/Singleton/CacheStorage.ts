export class CacheStorage {
  private static instance: CacheStorage;

  private constructor() {}

  static get sharedInstance() {
    if (CacheStorage.instance) {
      return CacheStorage.instance;
    }
    return CacheStorage.instance = new CacheStorage();
  }
}
