export class ValidateUserAccount {
    public constructor(private isValid: boolean = true) {}

    public handle(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!this.isValid) {
                reject('error connecting to http API Card issuer')
            }

            setTimeout(() => {
                resolve(true)
            }, 200)
        })
    }
}
