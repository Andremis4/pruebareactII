import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';


function Home() {
  const { pizzas, carrito, agregarCarrito } = useContext(PizzaContext);
  const navigate = useNavigate()
  

  return (
    <>
      <Navbar />
    
      <div className="container">
      <header className="bg-dark text-white text-center py-5">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </header>
        <div className="row">
          {pizzas.map((e, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img className="card-img-top" style={{width: "100%"}} src={e.img} alt="pizzas" />
                <div className="card-body">
                  <h5 className="card-title"> {e.name}</h5>
                  <p className="card-text">Ingredientes:</p>
                  <ul>
                    {e.ingredients.map((ingredient, idx) => (
                      <li key={idx}>🍕{ingredient}</li>
                    ))}
                  </ul>
                  <h2 className="card-text">Precio: {e.price}</h2>
                  <button
                    className="btn btn-primary"
                    onClick={() => agregarCarrito(e)}
                  >
                    Agregar al carrito
                  </button>
                  <button className="btn btn-secondary ml-2" onClick={() => navigate(`/pizza/${e.id}`)}>Detalles</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <footer className="bg-light text-center py-3">Que vuelva BTS</footer>
    </>
  );
}

export default Home;
