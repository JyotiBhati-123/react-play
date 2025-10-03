import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../../utils/constant";
import { addItem } from "../../utils/cartSlice.js";

const ItemCard = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="border-b-2 text-left py-2 my-2 border-b-gray-400 flex justify-between"
        >
          <div className="py-2 font-bold w-9/12">
            <h2 className="text-gray-800">{item?.card?.info?.name}</h2>
            <h2 className="font-medium pt-1.5">
              ₹{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </h2>
            {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
              <p className="text-green-900 font-bold pt-2">
                ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating}
                <span className="text-gray-600">
                  ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </span>
              </p>
            ) : (
              <span className="text-gray-600">⭐ Not rated</span>
            )}
            <p className="text-gray-600 font-medium pt-2.5">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 relative">
            <button
              className="text-green-800 font-bold absolute p-2 bg-white rounded-xl w-38 bottom-1 left-10 cursor-pointer hover:bg-green-600 hover:text-amber-100"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>

            <img
              className="w-55 rounded-2xl pb-1.5"
              src={IMAGE_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
