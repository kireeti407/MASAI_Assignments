import { useState } from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </>
  )
}

export default App
