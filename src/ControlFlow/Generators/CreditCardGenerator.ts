export default class CreditCardGenerator {
    public static readonly supportedCards: string[] = [
        'Mastercard',
        'Visa',
        'Citibank',
        'Chase',
        'American Express',
        'Capital One',
        'Bank of America',
    ]

    public *getSupportedCards(): Generator<string> {
        for (const card of CreditCardGenerator.supportedCards) {
            yield card
        }
    }
}
