import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const onlineStatus = useOnlineStatus();
  // State Variable
  const [btnNameReact, setBtnNameReact] = useState('Login');
  return (
    <div className="header bg-orange-100 flex justify-between items-center">
      <div className="logo">
        <img className="w-24" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="px-4 hover:underline">
            {' '}
            Online Status: {onlineStatus ? '🟢' : '🔴'}
          </li>
          <li className="px-4 hover:underline">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4 hover:underline">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:underline">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:underline">Cart</li>
          <li className="px-4 hover:underline">
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
