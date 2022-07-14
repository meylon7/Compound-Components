import React from 'react'

export const CounterContext = React.createContext()

export function counterReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count + 1 }
        case "RESET":
            return { count: 0 }
        default:
            throw Error("Unknown action type")
    }
}

