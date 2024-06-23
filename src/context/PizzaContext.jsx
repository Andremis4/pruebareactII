import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export default function PizzaProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

async function getPizzas(){
    const response = await fetch("/pizzas.json");
    const data = await response.json();
    setPizzas(data) 
}

useEffect(() => {
getPizzas()
}, []);

function agregarCarrito({id, name, price, img}){
const producto = {id,name,price,img,cantidad:1}
const indicePizzas = carrito.findIndex((orden) => orden.id === id)
if (indicePizzas >= 0) {
    carrito[indicePizzas].cantidad++
    setCarrito([...carrito])
} else {
    setCarrito([...carrito, producto])
}
}

function quitarCarrito(pizza) { /* el indice de un elemento en un arreglo se hace con findeindex  */
   
    const indicePizzas = carrito.findIndex((orden) => orden.id === pizza.id);
    if (indicePizzas >= 0) {
      if (carrito[indicePizzas].cantidad > 1) {
        carrito[indicePizzas].cantidad--;
        setCarrito([...carrito]);
      } else {
        eliminarDelCarrito(pizza.id)
      }
    } else {
      console.log("borrado")

    }
  }

  function eliminarDelCarrito(id) {
    const newCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(newCarrito);
  }

  return (
    <>

      <PizzaContext.Provider value={{ pizzas, setPizzas, carrito, setCarrito, agregarCarrito, quitarCarrito, eliminarDelCarrito }}>
        {children}
      </PizzaContext.Provider>
    </>
  );
}
