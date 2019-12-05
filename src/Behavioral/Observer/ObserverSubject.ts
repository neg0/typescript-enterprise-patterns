export default interface ObserverSubject {
    attach(): void
    detach(): void
    notify(): void
}
