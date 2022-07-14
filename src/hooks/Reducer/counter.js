import React, { useContext, useReducer } from 'react'
import { CounterContext, counterReducer } from './CounterContext'

const Counter = () => {
    const initialCount = useContext(CounterContext)
    const [countState, dispatch] = useReducer(counterReducer, {
        count: initialCount
    })
    return (
        <div>
            count: {countState.count}
            <button onClick={() => dispatch({ type: "RESET"})}>Reset</button>
            <button onClick={() => dispatch({ type: "INCREMENT"})}> + </button>
            <button onClick={() => dispatch({ type: "DECREMENT"})}> - </button>
        </div>
    )
}

export default Counter