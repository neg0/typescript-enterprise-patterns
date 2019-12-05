import { UpdateUserBalanceCommand } from './UpdateUserBalanceCommand'
import { User } from './User'

describe('UpdateUserBalanceCommand', () => {
    let sut: UpdateUserBalanceCommand,
        userMock: jest.Mock<User>,
        userInstance: User

    beforeEach(() => {
        userMock = jest.fn()
        userMock.mockImplementation(() => {
            return {
                name: 'Alice Doe',
                balance: 10.15,
            }
        })

        userInstance = new userMock()
        sut = new UpdateUserBalanceCommand(userInstance, 190)
        sut.Execute()
    })

    afterEach(() => {
        userMock.mockClear()
    })

    it('Should have a new balance', () => {
        expect(userInstance.balance).toEqual(190)
    })

    it('should have been called', () => {
        expect(userMock.mockName('balance')).toHaveBeenCalledTimes(1)
    })
})
