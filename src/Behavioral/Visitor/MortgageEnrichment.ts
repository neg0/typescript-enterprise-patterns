import Enrichment from './Enrichment'
import Enricher from './Enricher'

export default class MortgageEnrichment implements Enrichment {
    public accept(enricher: Enricher): void {
        enricher.identifyMortgagePayment(this)
    }

    public enrichTransactionWithMortgageAnalysis(): string {
        console.log('MortgageEnrichment')
        return 'MortgageEnrichment'
    }
}
