import MortgageEnrichment from './MortgageEnrichment'
import RegularTransactionEnrichment from './RegularTransactionEnrichment'

export default interface Enricher {
    identifyMortgagePayment(mortgageEnrichment: MortgageEnrichment): void
    identifyRegularPayment(
        regularTransactionEnrichment: RegularTransactionEnrichment
    ): void
}
