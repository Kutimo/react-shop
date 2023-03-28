import { useState } from "react";
import { CartItemType } from "../types/CartItemTypes";

const useCart = () => {
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((previous) => {
      const isItemInCart = previous.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return previous.map((item) => (item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item));
      }

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

  return { cartItems, setCartItems, handleAddToCart, handleRemoveFromCart };
};

export default useCart;
