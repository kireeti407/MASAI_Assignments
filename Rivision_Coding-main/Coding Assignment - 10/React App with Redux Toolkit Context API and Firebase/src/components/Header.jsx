
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const { user, isLoggedIn, logoutUser } = useContext(FirebaseContext);
  const cartItems = useSelector(state => state.cart.items);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <span>{user.email}</span>
              </li>
              <li>
                <Link to="/cart">Cart ({cartItems.length})</Link>
              </li>
              <li>
                <button onClick={logoutUser}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
