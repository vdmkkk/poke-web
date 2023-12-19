import React from "react";
import AdminDropdown from "./AdminDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import cart from "./images/cart.png";

const NavBar = ({ token, setToken, user }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem('pokemon-shopper-token');
    setToken("");
    setUser(null);
  };
  return (
    <nav className='nav'>
      <div className='ui blue inverted menu'>
        <NavLink to='/' className=' item'>
          Начало
        </NavLink>
        <NavLink to='/cards' className='item'>
          Карточки
        </NavLink>
        {user.isAdmin ? (<AdminDropdown className='item'/>) : null }
        {token ? (
          <>
            <NavLink to='/orders' className='item'>
              История заказов
            </NavLink>
            <Link className='item' onClick={handleLogout}>
              Выйти
            </Link>
            <NavLink to='/account' className='item'>
              Профиль
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to='/register' className='item'>
              Регистрация
            </NavLink>
            <NavLink to='/login' className='item'>
              Войти
            </NavLink>
          </>
        )}
        <NavLink to='/cart' className='item float right'>
          <img src={cart} className='ui large shopping cart icon' />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
