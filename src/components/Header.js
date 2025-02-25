import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const onlineStatus = useOnlineStatus();
  // State Variable
  const [btnNameReact, setBtnNameReact] = useState('Login');
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li> Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === 'Login'
                  ? setBtnNameReact('Logout')
                  : setBtnNameReact('Login');
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
