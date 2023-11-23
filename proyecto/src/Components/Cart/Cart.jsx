import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../Item/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
 
  if (cart.length === 0) {
    return (
      <>
        <p>El carrito esta vacio</p>
        <Link to="/">Volver a los productos</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: $ {totalPrice()}</p>
   
      <Link to="/checkout">
        {' '}
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </>
  );
};

export default Cart;