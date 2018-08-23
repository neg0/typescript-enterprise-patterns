export abstract class ObjectPool {
  protected static objects = {};

  protected constructor() {}

  public static push(poolObject: object): void {
    if (undefined === ObjectPool.objects[poolObject.constructor.name]) {
        ObjectPool.objects[poolObject.constructor.name] = poolObject;
    }
  }

  public static get(identifier: string): object {
      if (undefined !== ObjectPool.objects[identifier]) {
          return ObjectPool.objects[identifier];
      }
  }

  public static remove(identifier: string): void {
      if (undefined !== ObjectPool.objects[identifier]) {
          ObjectPool.objects[identifier] = undefined;
      }
  }
}
