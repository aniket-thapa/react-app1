import RestaurantCard from './Restaurant';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  // Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');
  // useEffect() is called after component has been rendered
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://github.com/aniket-thapa/JSON-DATA/raw/refs/heads/main/restaurant-data.json'
    );
    const json = await data.json();
    setListOfRestaurants(json);
    setfilteredRestaurants(json);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>You are offline</h1>;
  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-1">
      <div className="m-4 flex justify-center gap-4">
        <input
          type="text"
          className="px-3 py-2 w-72 mr-6 border-2 border-gray-400 rounded-sm hover:border-gray-500 focus:ring-2 focus:ring-orange-300 focus:bg-orange-50 transition"
          placeholder="Search Restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-orange-200 py-2 px-5 border-2 border-gray-400 rounded-sm hover:border-gray-500  focus:ring-2 focus:ring-orange-300 transition"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
              restaurant.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="bg-orange-200 py-2 px-5 border-2 border-gray-400 rounded-sm hover:border-gray-500  focus:ring-2 focus:ring-orange-300 transition"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) => {
              return res.star_ratings > 4.5;
            });
            setfilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* Restaurant Container for all restaurants */}
      <div className="bg-pink-100 m-1 p-1 flex  flex-wrap justify-center ">
        {filteredRestaurants.map((restaurant) => (
          <Link to={'/restaurants/' + restaurant.id} key={restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
