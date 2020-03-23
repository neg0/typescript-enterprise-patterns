import httpsGet from './Todos'

describe('httpsGet', () => {
    test('can make http call and return a status code `200`', async () => {
        const sut = await httpsGet('https://jsonplaceholder.typicode.com/todos')
        console.log(sut.data)
        expect(sut.statusCode).toEqual(200)
    })
})
