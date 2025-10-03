const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, locality, avgRating, costForTwo } =
    resData;

  // const syleCard = {
  //   backgroundColor: "#f0f7d4ff",
  // };
  return (
    <div
      data-testid="restaurantCards"
      className="m-4 p-4 w-[300px] rounded-2xl bg-amber-100 hover:bg-amber-200"
      // style={syleCard}
    >
      <img
        className="rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

//Higher Order Component
//input - RestaurantCard => RestaurantCardPromoted

export const PromotedRestaurants = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white ml-2 shadow-black">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
