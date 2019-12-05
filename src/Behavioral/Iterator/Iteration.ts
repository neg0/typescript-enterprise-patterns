export default interface Iteration {
    index: number
    first(): any
    next(): any
    currentItem(): any
    isDone(): boolean
}
