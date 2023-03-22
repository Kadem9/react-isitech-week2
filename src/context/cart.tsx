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
      const newItem = {
        ...action.payload,
        id: action.payload.id + "-" + Math.random().toString(36).substr(2, 9) // id unique
      };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
      case "CLEAR_CART":
        return {
          ...state,
          items: [],
          total: 0,
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