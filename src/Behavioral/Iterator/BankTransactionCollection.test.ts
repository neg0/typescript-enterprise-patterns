import BankTransactionCollection from './BankTransactionCollection'

describe('BankTransactionCollection', () => {
    let sut: BankTransactionCollection,
        transactionMockOne: jest.Mock<BankTransaction>,
        transactionMockTwo: jest.Mock<BankTransaction>,
        transactionMockThree: jest.Mock<BankTransaction>

    beforeEach(() => {
        transactionMockOne = jest.fn()
        transactionMockOne.mockImplementation(() => {
            return {
                description: 'Sony Playstation Network',
                amount: 39.95,
            }
        })

        transactionMockTwo = jest.fn()
        transactionMockTwo.mockImplementation(() => {
            return {
                description: 'Netflix',
                amount: 11.99,
            }
        })

        transactionMockThree = jest.fn()
        transactionMockThree.mockImplementation(() => {
            return {
                description: 'Starbucks Liverpool St',
                amount: 6.70,
            }
        })

        sut = new BankTransactionCollection(
            new transactionMockOne(),
            new transactionMockTwo(),
            new transactionMockThree()
        )
    })

    afterEach(() => {
        transactionMockOne.mockReset()
        transactionMockTwo.mockReset()
        transactionMockThree.mockReset()
    })

    it('should be instantiable', () => {
        console.debug(sut.currentItem().amount)
        expect(sut.count()).toBe(3)
    })
})
