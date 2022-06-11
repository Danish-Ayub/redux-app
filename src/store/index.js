import { legacy_createStore as createStore } from 'redux'

const reducerFn = (state = { counter: 10 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 }
        case 'DECREMENT':
            return { counter: state.counter - 1 }
        default:
            return state
    }
}

const store = createStore(reducerFn)

export default store