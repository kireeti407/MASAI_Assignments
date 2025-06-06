import { useState } from 'react'
import {Provider} from "react-redux"
import './App.css'
import { store } from './App/store'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </>
  )
}

export default App
