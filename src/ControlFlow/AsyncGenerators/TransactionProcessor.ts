import TransactionIterator from './TransactionIterator'

export default class TransactionProcessor {
    public constructor(private transactionIterator: TransactionIterator) {}

    public async process(): Promise<string[]> {
        try {
            const reversedTransactions = []
            const transactions = await this.transactionIterator.getAllTransactions()
            for await (const transaction of transactions) {
                reversedTransactions.push(
                    transaction
                        .split('')
                        .reverse()
                        .join(''),
                )
            }

            return reversedTransactions
        } catch (e) {
            throw new Error(e)
        }
    }
}
