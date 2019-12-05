import ClientAuthentication from './ClientAuthentication'

export default class GoldmanSachsAuthentication extends ClientAuthentication {
    public authenticate(): boolean {
        return this.confirmToken() && this.validateClientId()
    }

    protected confirmToken(): boolean {
        return false
    }

    protected validateClientId(): boolean {
        return false
    }
}
