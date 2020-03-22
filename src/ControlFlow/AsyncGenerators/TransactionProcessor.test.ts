import TransactionProcessor from "./TransactionProcessor";
import TransactionIterator from "./TransactionIterator";

describe('TransactionProcessor', () => {
    let sut: TransactionProcessor

    let transactionIteratorMock: jest.Mock<TransactionIterator>

    beforeEach(() => {
        transactionIteratorMock = jest.fn();
        transactionIteratorMock.mockImplementation((): TransactionIterator => {
            return {
                async *getAllTransactions(): AsyncGenerator<string> {
                    const mockTrxs = [
                        'Tesco',
                        'Sainsburys',
                        'PS Network',
                        'Netflix',
                        'Spotify',
                    ];

                    for await (const trx of mockTrxs) {
                        yield trx;
                    }
                }
            };
        });

        sut = new TransactionProcessor(new transactionIteratorMock());
    })

    afterEach(() => {
        transactionIteratorMock.mockReset()
    })

    it('should process all transactions', async () => {
       expect(await sut.process()).toHaveLength(5)
    });
})
