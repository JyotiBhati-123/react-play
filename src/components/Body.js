import { useContext, useEffect, useState } from "react";
import RestaurantCard, { PromotedRestaurants } from "./RestaurantCard";
import resData from "../../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { Button, FilterButton } from "./StyledComponents";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const RestaurantCardPromoted = PromotedRestaurants(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  // const arr = useState([]);
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1]

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.973321015576254&lng=77.76766131557325&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // Optional Chainning
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(restaurantList);
  };

  // const fetchMoreData = async () => {
  //   try {
  //     const postData = {
  //       lat: 12.973321015576254,
  //       lng: 77.76766131557325,
  //       nextOffset: `${offset}`,
  //       seoParams: {
  //         seoUrl: "https://www.swiggy.com",
  //         pageType: "FOOD_HOMEPAGE",
  //       },
  //       widgetOffset: {
  //         NewListingView_category_bar_chicletranking_TwoRows: "",
  //         NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
  //         Restaurant_Group_WebView_PB_Theme: "",
  //         Restaurant_Group_WebView_SEO_PB_Theme: "",
  //         collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: `${offset}`,
  //       },
  //       filters: {},
  //       page_type: "DESKTOP_WEB_LISTING",
  //       _csrf: "token",
  //     };
  //     const response = await fetch(
  //       "https://corsproxy.io/?/https://www.swiggy.com/dapi/restaurants/list/update",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(postData),
  //       }
  //     );
  //     if (!response.ok) {
  //       const errorText = `HTTP error! Status: ${response.status}`;
  //       throw new Error(errorText);
  //     }

  //     const json = await response.json();

  //     const newRestaurants =
  //       json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants || [];

  //     setListOfRestaurants((prev) => [...prev, ...newRestaurants]);
  //     // setFilteredRestaurant((prev) => [...prev, ...newRestaurants]);
  //     setOffset(json?.data?.pageOffset?.nextOffset || offset);
  //   } catch (err) {
  //     console.log("Error fetching more restaurants: ", err);
  //   }
  // };

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline! Please check your internet connection.</h1>
    );

  return !listOfRestaurants || listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between">
        <div className="flex justify-between items-center pl-4">
          <input
            data-testid="searchFilter"
            type="text"
            className="place-content-center block border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              const searchedRestro = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(searchedRestro);
            }}
          >
            Search
          </Button>

          <Button
            onClick={() => {
              setSearchText("");
            }}
          >
            Reset
          </Button>
          <input
            className="border border-black pl-2"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <FilterButton
          className="filter-btn"
          onClick={() => {
            const filteredresData = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            // console.log(filteredresData);
            setFilteredRestaurant(filteredresData);
          }}
        >
          Top Rated Restaurants
        </FilterButton>
      </div>
      <h3>{loggedInUser}</h3>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.avgRating > 4.5 ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
      {/* <button onClick={fetchMoreData}>Load more</button> */}
    </div>
  );
};

export default Body;
