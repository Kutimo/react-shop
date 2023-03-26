import CartItem from "./CartItem";
// Types
import { CartItemType } from "../../Products";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

// Shopping cart 
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  // TODO: if more then 5 items in cart change the look
  // carousel like hm?
  return (
    <div className="w-96 h-fit p-5 absolute top-0 right-0 z-10 bg-gray-300 flex flex-col items-center justify-between">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>No items in cart.</p>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <div className="w-full items-end flex justify-between">
        <h2>Total:</h2>
        <h2>${calculateTotal(cartItems).toFixed(2)}</h2>
      </div>
    </div>
  );
};
export default Cart;
