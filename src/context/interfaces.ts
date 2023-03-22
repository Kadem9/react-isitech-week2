import { Product } from "../models/Product";

export interface Cart  {
    id: number;
    items: Product[];
    total: number;
}

export interface CartContextType {
    cart: {
      items: any[];
      id: number;
      total: number;
  };
    dispatch: React.Dispatch<any>;
}

