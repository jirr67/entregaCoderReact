import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemlistContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
