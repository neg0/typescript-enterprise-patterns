export default abstract class ClientAuthentication {
    protected createJWTToken(): string {
        return 'SomeStringJWT'
    }

    protected saveClientToken(): boolean {
        return true
    }

    public abstract authenticate(): boolean

    protected abstract validateClientId(): boolean

    protected abstract confirmToken(): boolean
}
