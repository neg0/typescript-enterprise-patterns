import Enrichment from './Enrichment'
import Enricher from './Enricher'

export default class RegularTransactionEnrichment implements Enrichment {
    public accept(enricher: Enricher): void {
        enricher.identifyRegularPayment(this)
    }

    public identifyRegularTransactions(): string {
        console.log('RegularTransaction')
        return 'RegularTransaction'
    }
}
