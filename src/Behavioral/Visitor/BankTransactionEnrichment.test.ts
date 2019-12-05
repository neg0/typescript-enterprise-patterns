import { BankTransactionEnrichment } from './BankTransactionEnrichment'

describe('BankTransactionEnrichment', () => {
    let sut: BankTransactionEnrichment | undefined

    beforeEach(() => {
        sut = new BankTransactionEnrichment()
    })

    afterEach(() => {
        sut = undefined
    })

    it('should be instantiable', () => {
        expect(sut).toBeInstanceOf(BankTransactionEnrichment)
    })
})
