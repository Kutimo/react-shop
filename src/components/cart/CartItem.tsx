//types
import { CartItemType } from "../cart/types/CartItemTypes";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

// Functional component that displays the item inside the cart comp with a map method.
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div className="flex content-between border-b-2 border-l-indigo-400 my-2 bg-slate-200 w-full">
    <div className="flex-1 p-1.5">
      <h3>{item.title}</h3>
      <div className="flex justify-between">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <button
          className="bg-blue-400 p-2.5 text-white"
          onClick={() => removeFromCart(item.id)}>
          -
        </button>
        <p>{item.amount}</p>
        <button
          className="bg-blue-400 p-2.5 text-white"
          onClick={() => addToCart(item)}>
          +
        </button>
      </div>
    </div>
    <img
      className="w-24 object-cover"
      src={item.image}
      alt={item.title}
    />
  </div>
);
export default CartItem;
