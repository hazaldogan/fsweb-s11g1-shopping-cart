import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("s11G1Cart", []);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    const newCard = [...cart, item];
    setCart(newCard);
  };

  function removeItem(itemIndex) {
    const newCart = cart.filter((item, idx) => {
      return idx !== itemIndex;
    });
    setCart(newCart);
  }
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
