// import { legacy_createStore as createStore } from "redux"

// const reducerFn = (state = { counter: 0 }, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return { counter: state.counter + 1 }
//         case 'DECREMENT':
//             return { counter: state.counter - 1 }
//         case 'RESET':
//             return { counter: 0 }
//         case 'ADD':
//             return { counter: state.counter + action.payload }
//         default:
//             return state
//     }
// }

// const store = createStore(reducerFn)

// export default store


import { configureStore, createSlice } from "@reduxjs/toolkit"

const counterSlise = createSlice({
    name: 'Counter',
    initialState: {
        counter: 0
    }
})