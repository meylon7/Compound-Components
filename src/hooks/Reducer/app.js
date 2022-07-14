import React from 'react'
import Counter from './counter'
import { CounterContext } from './CounterContext'

const App = () => {
  return (
    <div>
        <CounterContext.Provider value={1}>
            <Counter />
        </CounterContext.Provider>
    </div>
  )
}

export default App