import ClientAuthentication from './ClientAuthentication'

export default class HSBCAuthentication extends ClientAuthentication {
    public authenticate(): boolean {
        return (
            this.confirmToken() &&
            this.createClientToken() &&
            this.validateClientId()
        )
    }

    protected confirmToken(): boolean {
        return false
    }

    protected createClientToken(): boolean {
        return false
    }

    protected validateClientId(): boolean {
        return false
    }
}
