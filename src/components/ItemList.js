const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2"
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
        </div>
      ))}
    </div>
  );
};

export default ItemList;
