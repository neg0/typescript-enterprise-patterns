import Enrichment from './Enrichment'
import { BankTransactionEnrichment } from './BankTransactionEnrichment'
import RegularTransactionEnrichment from './RegularTransactionEnrichment'
import MortgageEnrichment from './MortgageEnrichment'

export default class Client {
    private constructor(
        private enrichmentComponents: Enrichment[],
        private enrichmentService: BankTransactionEnrichment
    ) {}

    public static create() {
        const enrichmentComponents = [
            new RegularTransactionEnrichment(),
            new MortgageEnrichment(),
        ]

        const client = new Client(
            enrichmentComponents,
            new BankTransactionEnrichment()
        )

        for (let i in client.enrichmentComponents) {
            client.enrichmentComponents[i].accept(client.enrichmentService)
        }
    }
}
