import { useState } from 'react'
import { Provider } from 'react-redux'
import store  from './APP/store'
import './App.css'
import ProductItem from './components/ProductItem'

function App() {
  const [count, setCount] = useState(0)
  console.log(store.getState())
  return (
    <>
      <Provider store={store}>

          <ProductItem/>
      </Provider>
      
    </>
  )
}

export default App
