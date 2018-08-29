export abstract class ObjectPool {
  protected static objects = {};
  private static key: string;

  protected constructor() {}

  public static push(poolObject: object): void {
    ObjectPool.key = Object.getPrototypeOf(poolObject).constructor.name;
    if (undefined === ObjectPool.objects[ObjectPool.key]) {
      ObjectPool.objects[ObjectPool.key] = poolObject;
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

  public static lastInserted(): string | void {
    return ObjectPool.key ? ObjectPool.key : undefined;
  }
}
