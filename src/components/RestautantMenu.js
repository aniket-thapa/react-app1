import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      'https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.27010559999999&lng=73.01693440000001&restaurantId=43836&submitAction=ENTER'
    );
    const json = await data.json();
    console.log(json.data.cards[2].card.card.info);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  if (resInfo !== null) {
    const restaurantInfo = resInfo?.cards[2];
    const { name, cuisines, costForTwoMessage } =
      restaurantInfo?.card?.card?.info;

    console.log(restaurantInfo);

    const { itemCards } =
      resInfo?.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    console.log('ItemCard');
    console.log(itemCards);
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
