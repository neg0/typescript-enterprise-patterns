import { ObjectPool } from "./ObjectPool";

export class SessionPool extends ObjectPool {
  private static instance;
  private storage = {};

  private constructor() {
    super();
  }

  public store(...args): void {
    this.storage[args[0]] = args[1];
  }

  public fetch(key: string): string {
    return this.storage[key];
  }

  public fetchAll(): string {
    return JSON.stringify(this.storage);
  }

  public clear(): void {
      this.storage = {};
  }

  public static create() {
    return SessionPool.instance ? SessionPool.instance : SessionPool.instance = new SessionPool();
  }
}
