const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 pb-8 m-2 border-gray-300 border-b-2 flex flex-col justify-center items-center"
        >
          <div className="p-2 font-semibold text-lg text-gray-700">
            <span>{item.card.info.name}</span>
            <span>
              - ₹{' '}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p className="text-md text-gray-700">{item.card.info.description}</p>
          <button className="self-end w-fit px-2 py-1 text-center font-semibold bg-blue-200 border-2 rounded-md border-gray-600 hover:bg-blue-300  cursor-pointer transition">
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
