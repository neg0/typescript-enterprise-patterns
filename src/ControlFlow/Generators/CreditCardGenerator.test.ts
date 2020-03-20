import CreditCardGenerator from './CreditCardGenerator'

describe('CreditCardGenerator', () => {
    let sut: CreditCardGenerator

    beforeEach(() => {
        sut = new CreditCardGenerator();
    })

    it('should ', () => {
        const getCard = sut.getSupportedCards();

        expect(getCard.next()?.value).toEqual('Mastercard');
        expect(getCard.next()?.value).toEqual('Visa');
    });
})
