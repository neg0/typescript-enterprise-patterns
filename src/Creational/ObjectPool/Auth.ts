import {ObjectPool} from "./ObjectPool";

export class Auth extends ObjectPool {
    private static instance;
    private constructor(public id: number, public username: string, public email: string, public name?: string) {
        super();
    }

    public static create(id: number, username: string, email: string, name?: string) {
        return Auth.instance ? Auth.instance : Auth.instance = new Auth(id, username, email, name);
    }

    public autoLogin(): void {}

    public logOut(): void {}

    public fetchUserProfile(): string {
        return JSON.stringify(this);
    }
}
