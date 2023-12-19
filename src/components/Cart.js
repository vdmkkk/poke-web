import React, {useState, useEffect} from "react";
import { getUserCart } from "../api";
import { useNavigate } from 'react-router-dom'
import {default as CartItem} from './CartItem'

const Cart = ({user, token}) => {
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0)

  const navigate = useNavigate()
  const cartItems = async () => {
    if(token){
      const response = await getUserCart(token);
      if (response) {
        setCart(response.cart)
        setCost(response.totalCost)
      }
    }
  }
  
  const handleCheckout = () => {
    navigate('/checkout')
  }
  useEffect(() => {
    cartItems();
  },[token])


  return (
    <div className="cartPage">
      <h1 className='cart-header'>Cart</h1>
      <div  className="cart-container">
      {cart.length ? cart.map((eachCard) => 
    <CartItem cartItems={cartItems} token={token} eachCard={eachCard} /> ) 
      : 
      <div className="emptyCart">
      <h1>Ой-ой! Ваша корзина пуста!</h1>
    <img src='https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892134-054psyduck.png'/>
  </div>
      }
      </div>
      <div className="container checkout">

        <h4>Цена всех товаров: {cost}₽</h4>
        {cart.length ?
        <><h2>Итого: <span className="subTotal">{cost}₽</span></h2>
        <button className="ui button"

          onClick={() => {
          handleCheckout();
          }}>
            Оплата
        </button></>: null}
      </div>
    </div>
  );
};

export default Cart;
