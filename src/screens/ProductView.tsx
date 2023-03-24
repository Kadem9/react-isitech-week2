import { useParams } from "react-router-dom";
import products from "../models/Products.json";
import { CartContext } from '../context/cart';
import { useState, useEffect, useContext } from "react";

export interface Product {
  id: number;
  model: string;
  name: string;
  description: string;
  img: string;
  price: number;
}

export const ProductView = () => {
  const { cartState, cartdispatch } = useContext(CartContext); // Accéder au contexte du panier

  const handleAddToCart = (product) => {
      // Ajouter l'article au panier
      cartdispatch({
          type: "ADD_ITEM",
          payload: product,
      });
  };
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const tProducts: Product[] = products;
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (id !== null) {
      const safeId: string = id ? id : "";
      if (safeId === "") {
      }
      const product: Product | undefined = tProducts.find(
        (p: Product) => parseInt(safeId) === p.id
      );
      setCurrentProduct(product ? product : null);
    }
  });
  // J'ai trouvé le CSS du produit sur ce lien : https://tailwindcomponents.com/component/product-detail
  return (
    <>
      {currentProduct && (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={currentProduct.img}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Nouveau model
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {currentProduct.name}
                </h1>

                <p className="leading-relaxed">{currentProduct.description}</p>

                <div className="flex mt-8">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {currentProduct.price} €
                  </span>
                  <button onClick={() => handleAddToCart(currentProduct)} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!currentProduct && <h1>Produit introuvable</h1>}
    </>
  );
};
