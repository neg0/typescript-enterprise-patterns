import { Command } from './Command'
import { User } from './User'

export class UpdateUserBalanceCommand implements Command {
    public constructor(private user: User, private newBalance: number) {}

    public Execute(): void {
        this.user.balance = this.newBalance
    }
}
