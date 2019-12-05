import Enrichment from './Enrichment'

export default class MortgageEnrichment implements Enrichment {
    public constructor(private transaction: BankTransaction[]) {}

    public enrich(): void {
        let mortgageCounter = 0
        for (const i in this.transaction) {
            if (this.transaction[i].description.includes('mortgage')) {
                mortgageCounter++
            }
        }
    }
}
