import State from './State'

export default class Context implements State {
    constructor(private _state: State) {}

    public set state(state: State) {
        this._state = state
    }

    public get state(): State {
        return this._state
    }

    public handle() {
        this._state.handle()
    }
}
