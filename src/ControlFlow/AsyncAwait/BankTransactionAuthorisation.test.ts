import { BankTransactionAuthorisation } from './BankTransactionAuthorisation'

describe('BankTransactionAuthorisation', () => {
    let sut: BankTransactionAuthorisation

    beforeEach(() => {
        sut = new BankTransactionAuthorisation()
    })

    it('should handle with both async done', async () => {
        await expect(sut.handle()).resolves.toBeTruthy()
    })

    describe('when user doesnt exist', () => {
        beforeEach(() => {
            sut = new BankTransactionAuthorisation(true, false)
        })

        it('should throw an error for error with user microservice', async () => {
            await expect(sut.handle()).rejects.toThrowError(
                'user balance is not enough for requested amount',
            )
        })
    })

    describe('when user doesnt have the requested amount for transfer', () => {
        beforeEach(() => {
            sut = new BankTransactionAuthorisation(false, true)
        })

        it('should throw an error for invalid amount', async () => {
            await expect(sut.handle()).rejects.toThrowError(
                'error connecting to http API Card issuer',
            )
        })
    })

    describe('when user doesnt exist', () => {
        beforeEach(() => {
            sut = new BankTransactionAuthorisation(false, false)
        })

        it('should throw an error for error with user microservice', async () => {
            await expect(sut.handle()).rejects.toThrowError(
                'error connecting to http API Card issuer',
            )
        })
    })
})
