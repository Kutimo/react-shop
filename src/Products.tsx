import { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
// import { storedValue, setValue } from "./hooks/useLocalStorage";
import { useLocalStorage } from "./hooks/useLocalStorage";

import { useQuery } from "react-query";

// // components
import Item from "./components/cart/Item";
import Cart from "./components/cart/Cart";
import cartIcon from "./assets/icons/cartIcon.svg";

// explicit definition of types as variable
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const Products = () => {
  // Use states for cart open and close, and cart item state value and function to update it
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const [storedCartItems, setStoredCartItems] = useLocalStorage("cartItems", [] as CartItemType[]);

  useEffect(() => {
    setCartItems(storedCartItems);
  }, [storedCartItems]);

  // useEffect(() => setValue.products);
  // useEffect(() => {
  //   useLocalStorage.setValue("cartItem", JSON.stringify(cartItems));
  // }, [cartItems]);

  // useRef hook to access state of side menu
  const cartRef = useRef(null);
  useOnClickOutside(cartRef, () => setCartOpen(false));

  // use query for display data, display data or error message
  const { data, isLoading, error } = useQuery<CartItemType[]>("products", getProducts);

  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0);

  // Adds products to cart
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((previous) => {
      // 1. is the item already in the cart?
      const isItemInCart = previous.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return previous.map((item) => (item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item));
      }
      // first time item is added
      return [...previous, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((previous) =>
      previous.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };
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
