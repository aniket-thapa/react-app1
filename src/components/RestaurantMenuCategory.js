import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantMenuCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-md">
        <div
          className="flex justify-between cursor-pointer transition-all"
          onClick={handleClick}
        >
          <span className="font-semibold text-xl text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantMenuCategory;
