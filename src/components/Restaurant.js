import { LOGO_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, delivery_time, star_ratings, cost, image_url } =
    resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-loog" src={LOGO_URL} />
      <h3>{name}</h3>
      <p>{cuisines}</p>
      <p>Rs. {cost}</p>
      <p>{star_ratings} stars</p>
      <p>{delivery_time}</p>
    </div>
  );
};

export default RestaurantCard;
