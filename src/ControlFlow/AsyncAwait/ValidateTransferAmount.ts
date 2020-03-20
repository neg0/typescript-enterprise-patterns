export class ValidateTransferAmount {
    public constructor(private isValid: boolean = true) {}

    public handle(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!this.isValid) {
                reject('user balance is not enough for requested amount')
            }

            setTimeout(() => {
                resolve(true)
            }, 300)
        })
    }
}
