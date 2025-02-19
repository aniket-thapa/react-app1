import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 * - Logo
 * - Nav Items
 *
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Cards
 *     - Img
 *     - Name of Res, Star Raiting, Cuisine, delery tie
 *
 * Footer
 * - Copyright
 * - Links
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://i.pinimg.com/736x/08/3b/2f/083b2fe2646cd064e3a294bb716810f9.jpg"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-loog" src="/" />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.3 stars</h4>
      <h4>20 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Pizza Story"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
