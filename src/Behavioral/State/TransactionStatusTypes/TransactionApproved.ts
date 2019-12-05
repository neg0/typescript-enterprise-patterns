import { TransactionStatusNames } from './TransactionStatusNames'
import State from '../State'
import TransactionStatus from './TransactionStatus'

export default class TransactionApproved extends TransactionStatus
    implements State {
    public static readonly STATUS = TransactionStatusNames.APPROVED

    public handle(): void {
        this.status = TransactionApproved.STATUS
    }
}
