import { UpdateUserBalanceCommand } from './UpdateUserBalanceCommand'
import { User } from '../Command/User'

describe('UpdateUserBalanceCommand', () => {
    let sut: UpdateUserBalanceCommand,
        userMock: jest.Mock<User>,
        userInstance: User

    beforeEach(() => {
        userMock = jest.fn()
        userMock.mockImplementation(() => {
            return {
                name: 'John Doe',
                balance: 8.5,
            }
        })

        userInstance = new userMock()
        sut = new UpdateUserBalanceCommand(userInstance, 19.95)
        sut.Execute()
    })

    it('should assign a new balance to user', () => {
        expect(sut.newUserBalance()).toEqual(19.95)

    })
})
