import { User } from "../Command/User";

export abstract class UserCommand {
    protected constructor(protected user: User) {}

    public abstract Execute(): void
}
