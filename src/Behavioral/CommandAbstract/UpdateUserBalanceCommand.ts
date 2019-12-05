import { UserCommand } from './UserCommand'
import { User } from '../Command/User'

export class UpdateUserBalanceCommand extends UserCommand {
    public constructor(user: User, private newBalance: number) {
        super(user)
    }

    public Execute(): void {
        this.user.balance = this.newBalance
    }

    public newUserBalance(): number {
        return this.user.balance
    }
}
