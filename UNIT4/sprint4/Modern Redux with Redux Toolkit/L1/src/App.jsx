import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Task from './components/Task'
import { store } from './App/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <Task/>
      </Provider>
    </>
  )
}

export default App
