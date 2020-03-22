import { readFile } from 'fs'
import { promisify } from 'util'

export default class TransactionIterator {
    public async *getAllTransactions(): AsyncGenerator<string> {
        try {
            const readFileContent = promisify(readFile)
            const allTransactions = await readFileContent(
                `${__dirname}/__mock__/transactions.txt`,
            )

            const contentsRecords = allTransactions.toString().split('\n')
            for (const record of contentsRecords) {
                yield record
            }
        } catch (e) {
            throw new Error(e)
        }
    }
}
