export class Cache {
  private static instance: Cache;

  private constructor() {}

  static get sharedInstance() {
    if (Cache.instance) {
      return Cache.instance;
    }
    return Cache.instance = new Cache();
  }
}
