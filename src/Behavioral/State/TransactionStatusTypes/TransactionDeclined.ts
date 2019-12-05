import { TransactionStatusNames } from './TransactionStatusNames'
import State from '../State'
import TransactionStatus from './TransactionStatus'

export default class TransactionDeclined extends TransactionStatus
    implements State {
    public static readonly STATUS = TransactionStatusNames.DECLINED

    public handle(): void {
        this.status = TransactionDeclined.STATUS
    }
}
