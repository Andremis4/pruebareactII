import React from "react";
import NavBar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Detalle() {
  const { id } = useParams();
  const { pizzas, agregarCarrito } = useContext(PizzaContext);

  const navigate = useNavigate()
  console.log(pizzas);

  const pizza = pizzas[pizzas.findIndex((pizzas) => pizzas.id === id)];

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img src={pizza.img} alt={pizza.desc} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{pizza.name}</h2>
            <hr />
            <p>{pizza.desc}</p>
            <h3>Ingredientes:</h3>
            <ul>
              {pizza.ingredients.map((i, index) => (
                <li key={index}>🍕 {i}</li>
              ))}
            </ul>
            <h2>Precio: {pizza.price}</h2>
            <button className="btn btn-primary me-2" onClick={() => agregarCarrito(pizza)}>Añadir al carrito</button>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>Volver</button>
          </div>
        </div>
      </div>
    </>
  );
}



/* import React from "react";
import NavBar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';


export default function Detalle() {
  const { id } = useParams();
  const { pizzas, agregarCarrito } = useContext(PizzaContext);

  const navigate = useNavigate()
  console.log(pizzas);

  const pizza = pizzas[pizzas.findIndex((pizzas) => pizzas.id === id)];

  return (
    <>
      <NavBar></NavBar>
      <div className="rowcontainer">
        <div>
          <img src={pizza.img} alt={pizza.desc}></img>
        </div>
        <div>
          <h2>{pizza.name}</h2>
          <hr></hr>
          <p>{pizza.desc}</p>
          <h3>Ingredientes:</h3>
          <ul>
            {pizza.ingredients.map((i) => {
              return <li>🍕 {i}</li>;
            })}
          </ul>
          <p> Precio: {pizza.price}</p>
          <button onClick={() => agregarCarrito(pizza)}>Añadir al carrito</button>
          <button onClick={() => navigate(-1)}>Volver</button>
        </div>
      </div>
    </>
  );
}
 */