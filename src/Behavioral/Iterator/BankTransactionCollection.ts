import Iteration from './Iteration'
import IterationList from './IterationList'

export default class BankTransactionCollection
    implements IterationList, Iteration {
    private _index: number
    private readonly transactions: BankTransaction[]
    public constructor(...transactions: BankTransaction[]) {
        this._index = 0
        this.transactions = transactions
    }

    public get index() {
        return this._index
    }

    public add(transaction: BankTransaction): void {
        this.transactions.push(transaction)
    }

    public count(): number {
        return this.transactions.length
    }

    public remove(transaction: BankTransaction): boolean {
        let hasBeenRemoved = false
        for (const i in this.transactions) {
            if (transaction === this.transactions[i]) {
                delete this.transactions[i]
                hasBeenRemoved = true
            }
        }

        return hasBeenRemoved
    }

    public currentItem(): BankTransaction {
        return this.transactions[this.index]
    }

    public first(): BankTransaction {
        return this.transactions[0]
    }

    public next(): BankTransaction {
        this._index++
        return this.transactions[this.index]
    }

    public isDone(): boolean {
        return undefined === this.transactions[this.index]
    }
}
