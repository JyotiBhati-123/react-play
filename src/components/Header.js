import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [userStatus, setUserStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a selector
  const cartItem = useSelector((store) => store.cart.items);

  useEffect(() => {}, [userStatus]);

  return (
    <div className="flex justify-between bg-amber-200 border-b-blue-950 shadow-2xs lg:bg-gray-300 lg:bg-cyan-100">
      <div className="logo-container">
        <img className="w-35" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-14 hover:transform-border font-semibold">
          <li>Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="hover:bg-gray-400 rounded-xl p-1">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-400 rounded-xl p-1">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:bg-gray-400 rounded-xl p-1">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:bg-gray-400 rounded-xl p-1">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:bg-gray-400 rounded-xl p-1">
            <Link to="/cart">Cart-{cartItem.length}</Link>
          </li>
          <button
            className="login hover:bg-gray-400 rounded-xl p-1"
            onClick={() =>
              userStatus === "Login"
                ? setUserStatus("Logout")
                : setUserStatus("Login")
            }
          >
            {userStatus} - {loggedInUser}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
