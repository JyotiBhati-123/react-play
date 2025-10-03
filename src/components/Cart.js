import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCardInMenu";
import { clearItem } from "../../utils/cartSlice.js";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="w-6/12 m-auto">
      <div className="flex justify-between  mt-8">
        <h1 className="font-bold">Checkout</h1>
        <button
          className="bg-green-600 w-25 p-2 rounded-2xl cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItem.length === 0 && (
        <h1>Your cart is empty, please add some items.</h1>
      )}
      <ItemCard items={cartItem} />
    </div>
  );
};

export default Cart;
