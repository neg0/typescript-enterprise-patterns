import State from '../State'
import TransactionStatus from './TransactionStatus'
import { TransactionStatusNames } from './TransactionStatusNames'

export default class TransactionPending extends TransactionStatus
    implements State {
    public static readonly STATUS = TransactionStatusNames.PENDING

    public handle(): void {
        this.status = TransactionPending.STATUS
    }
}
