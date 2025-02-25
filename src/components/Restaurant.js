import { LOGO_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, delivery_time, star_ratings, cost, image_url } =
    resData;
  return (
    <div className="m-2 p-2 w-72 flex flex-col items-center border-2 border-gray-300 hover:border-gray-400 hover:shadow-lg rounded-lg transition">
      <img className="w-56" alt="res-loog" src={LOGO_URL} />
      <h3 className="py-2 font-semibold text-gray-700 text-2xl ">{name}</h3>
      <p className="text-lg">{cuisines.join(', ')}</p>
      <p className="text-lg font-medium">Rs. {cost}</p>
      <p className="text-lg">⭐{star_ratings} stars</p>
      <p className="text-lg">{delivery_time}</p>
    </div>
  );
};

export default RestaurantCard;
