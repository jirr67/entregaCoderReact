import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemlistContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (

<>
      <NavBar />
      <ItemListContainer greeting={'¡Bienvenidos a la primera tienda de dinosaurios reales!'}  />
    </>
  )
}

export default App
