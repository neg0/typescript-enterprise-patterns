import { ValidateUserAccount } from './ValidateUserAccount'
import { ValidateTransferAmount } from './ValidateTransferAmount'

export class BankTransactionAuthorisation {
    public constructor(
        private isUserValid: boolean = true,
        private isAmountValid: boolean = true,
    ) {}

    public async handle(): Promise<boolean> {
        try {
            await new ValidateUserAccount(this.isUserValid).handle()
            await new ValidateTransferAmount(this.isAmountValid,).handle()

            return true

            // for ES6+
            // return Promise.resolve(true)
        } catch (e) {
            throw new Error(e)

            // for ES6+
            // return Promise.reject(new Error(e))
        }
    }
}
