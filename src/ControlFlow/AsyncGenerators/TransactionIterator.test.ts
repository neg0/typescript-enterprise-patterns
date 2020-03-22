import TransactionIterator from './TransactionIterator'

describe('TransactionIterator', () => {
    let sut: TransactionIterator

    beforeEach(() => {
        sut = new TransactionIterator()
    })

    it('should equal to the first transaction in the list', async () => {
        expect((await sut.getAllTransactions().next())?.value).toEqual(
            'dadasdsadadsdadasdas',
        )
    })
})
