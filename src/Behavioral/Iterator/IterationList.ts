export default interface IterationList {
    count(): number
    add(iterable: any): void
    remove(iterable: any): boolean
}
