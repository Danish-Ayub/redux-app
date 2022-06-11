import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  )
}

export default App
