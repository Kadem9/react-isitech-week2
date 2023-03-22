import React, { createContext, useReducer } from "react";

import { Cart, CartContextType } from "./interfaces";

export const CartContext = createContext<CartContextType | null>(null);

type CartContextProviderProps = {
  children: React.ReactNode;
};

type Value = {
  cartState: Cart;
  cartdispatch: React.Dispatch<any>;
}

const initialState: Cart = {
  id: 0,
  items: [],
  total: 0,
};

const cartReducer = (state: Cart, action: any) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }: CartContextProviderProps): JSX.Element => {
  const [cartState, cartdispatch] = useReducer(cartReducer, initialState);
  const value: Value = {
    cartState,
    cartdispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;