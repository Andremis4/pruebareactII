import './App.css'
import Home from "./pages/Home"
import {Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Detalle from './pages/Detalle';
import Carrito from './pages/Carrito';



function App() {


  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pizza/:id" element={<Detalle/>}/>
     <Route path="/carrito" element={<Carrito/>}/>
    </Routes>
      
    </>
  )
}

export default App
