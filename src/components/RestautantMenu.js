import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null || resInfo?.cards === undefined) return <Shimmer />;

  if (resInfo !== null) {
    console.log('Inside: ' + resInfo.cards);
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
