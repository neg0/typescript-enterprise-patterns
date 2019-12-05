import Enricher from "./Enricher";
import RegularTransactionEnrichment from "./RegularTransactionEnrichment";
import MortgageEnrichment from "./MortgageEnrichment";

export class BankTransactionEnrichment implements Enricher {
    public identifyMortgagePayment(mortgageEnrichment: MortgageEnrichment): void {
        mortgageEnrichment.enrichTransactionWithMortgageAnalysis()
    }

    public identifyRegularPayment(regularTransactionEnrichment: RegularTransactionEnrichment): void {
        regularTransactionEnrichment.identifyRegularTransactions()
    }
}
