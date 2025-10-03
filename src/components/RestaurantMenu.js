import Shimmer from "./Shimmer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfferCarousel from "./CarouselComp";
import { useParams } from "react-router";
import ExpandableBlock from "./ExpandableRestroData";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restroMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const groupedCard =
    restroMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCategories = groupedCard?.filter(
    (c) =>
      c?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  const toggleArrow = (index) => {
    setShowIndex(showIndex === index ? null : index);
  };
  if (restroMenu === null) return <Shimmer />;
  return (
    <>
      <div>
        <h1 className="font-bold my-10 text-2xl text-left w-6/12 m-auto">
          {restroMenu?.cards[2]?.card?.card?.info?.name}
        </h1>
        <div className="py-4 border-gray-400 w-6/12 m-auto border-2 rounded-2xl my-4 shadow-2xl">
          <div className="text-left bg-[grey-100] pl-4">
            <ul className="flex font-bold">
              <li className="pr-4">
                {restroMenu?.cards[2]?.card?.card?.info?.avgRating}(
                {restroMenu?.cards[2]?.card?.card?.info?.totalRatingsString})
              </li>
              <li className="">
                {restroMenu?.cards[2]?.card?.card?.info?.costForTwoMessage}
              </li>
            </ul>

            <p>{restroMenu?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
            <ul>
              <li>Outlet {restroMenu?.cards[2]?.card?.card?.info?.areaName}</li>
              <li>
                {restroMenu?.cards[2]?.card?.card?.info?.sla?.slaString.toLowerCase()}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-6/12 m-auto">
          {" "}
          <OfferCarousel restroDeal={restroMenu} key={resId} />
        </div>
        {itemCategories?.map((category, index) => (
          <ExpandableBlock
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItem={showIndex === index}
            onClick={() => toggleArrow(index)}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
