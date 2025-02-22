import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId); // http://localhost:1234/restaurants/43836
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  if (resInfo !== null || 'cards' in resInfo) {
    const restaurantInfo = resInfo?.cards[2];
    const { name, cuisines, costForTwoMessage } =
      restaurantInfo?.card?.card?.info;

    const { itemCards } =
      resInfo?.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    return (
      <div>
        <h1>{name}</h1>
        <h2>
          {cuisines.join(', ')} - {costForTwoMessage}
        </h2>
        <div>
          <h3>Menu: </h3>
          <ul>
            {itemCards.map((item) => (
              <li>
                {item.card.info.name} - Rs. {item.card.info.price / 100}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
