import { useState, useRef, useEffect } from "react";

// Cart Types:
import { CartItemType } from "../components/cart/types/CartItemTypes";

// Hooks
import { useOnClickOutside } from "usehooks-ts";

import { useLocalStorage } from "../components/cart/hooks/useLocalStorage";

import useCart from "../components/cart/hooks/useCart";

import { useQuery } from "react-query";

// components
import Item from "../components/cart/Item";
import Cart from "../components/cart/Cart";

//Icons
import cartIcon from "../assets/icons/cartIcon.svg";


const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const Products = () => {
  // Use states for cart open and close, and cart item state value and function to update it
  const [cartOpen, setCartOpen] = useState(false);

  const { cartItems, setCartItems, handleAddToCart, handleRemoveFromCart } = useCart();

  // Get the stored cart items from local storage using useLocalStorage hook
  const [storedCartItems, setStoredCartItems] = useLocalStorage<CartItemType[]>("cartItems", []);

  // Update the cart items state with the stored cart items on mount
  useEffect(() => {
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  // Update the stored cart items on every change in the cartItems state
  useEffect(() => {
    setStoredCartItems(cartItems);
  }, [cartItems, setStoredCartItems]);

  // useRef hook to access state of side menu
  const cartRef = useRef(null);
  useOnClickOutside(cartRef, () => setCartOpen(false));

  // use query for display data, display data or error message
  const { data, isLoading, error } = useQuery<CartItemType[]>("products", getProducts);

  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0);


  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Something went wrong..</div>;
  // TODO: console
  // console.log(cartItems);
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Something went wrong..</div>;
  return (
    <div className="m-10">
      {cartOpen && (
        <div ref={cartRef}>
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </div>
      )}
      <div className="fixed top-1 right-1 m-2">
        <button onClick={() => setCartOpen(true)}>
          <img src={cartIcon} />
          <div
            className={`${
              getTotalItems(cartItems) > 0 ? "block" : "hidden"
            } absolute bottom-0 right-0 bg-red-600 px-2.5 pb-0.5 text-white font-medium rounded-full`}>
            {getTotalItems(cartItems)}
          </div>
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {data?.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
export default Products;
