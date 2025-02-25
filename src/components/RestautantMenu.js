import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router';
import Shimmer from './Shimmer';
import RestaurantMenuCategory from './RestaurantMenuCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null || resInfo?.cards === undefined) return <Shimmer />;

  if (resInfo !== null) {
    const restaurantInfo = resInfo?.cards[2];
    const { name, cuisines, costForTwoMessage } =
      restaurantInfo?.card?.card?.info;

    // const { itemCards } =
    //   resInfo?.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    const categories =
      resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.['card']?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
      );
    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-semibold text-lg">
          {cuisines.join(', ')} - {costForTwoMessage}
        </p>
        <div>
          {/* Categories Accordions */}
          {categories.map((category) => (
            <RestaurantMenuCategory
              key={category?.card?.card.title}
              data={category.card.card}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
