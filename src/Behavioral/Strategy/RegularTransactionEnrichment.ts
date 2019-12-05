import Enrichment from "./Enrichment";

export default class RegularTransactionEnrichment implements Enrichment {
    public constructor(private transaction: BankTransaction[]) {}

    public enrich(): void {
        let coffeeRegularPaymentCounter = 0
        for (const i in this.transaction) {
            if (this.transaction[i].description.includes('coffee')) {
                coffeeRegularPaymentCounter++
            }
        }
    }
}
