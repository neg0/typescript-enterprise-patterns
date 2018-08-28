export namespace Cache {
  export class Storage {
    private static instance: Storage;

    private constructor() {}

    static get sharedInstance() {
      if (Storage.instance) {
        return Storage.instance;
      }
      return (Storage.instance = new Storage());
    }
  }
}
