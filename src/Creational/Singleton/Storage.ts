export namespace Cache {
  export class Storage {
    private static instance: Storage;

    private constructor() {}

    public static sharedInstance() {
      return Storage.instance ? Storage.instance : Storage.instance = new Storage();
    }
  }
}
