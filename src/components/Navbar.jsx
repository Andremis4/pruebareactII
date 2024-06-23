import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { PizzaContext } from '../context/PizzaContext';
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const { carrito } = useContext(PizzaContext);
 
  const totalAmount = carrito.reduce((total, pizza) => total + (pizza.price * pizza.cantidad), 0);

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">🍕 Pizzaria Mamma Mia!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <NavLink to="/carrito"> 🛒 {totalAmount.toLocaleString()}</NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
