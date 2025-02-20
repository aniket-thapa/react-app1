import RestaurantCard from './Restaurant';
import { useState } from 'react';
import resList from '../utils/mockData';

const Body = () => {
  // Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterListOfRestaurants = listOfRestaurants.filter((res) => {
              return res.star_ratings > 4.5;
            });
            setListOfRestaurants(filterListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
