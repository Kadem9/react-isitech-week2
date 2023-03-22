import Iphone12 from "../assets/products/iphone12.jpg";
import Iphone13 from "../assets/products/iphone13.png";
import Iphone13Pro from "../assets/products/iphone13pro.jpg";
import { FaShoppingCart } from "react-icons/fa";

type Products = {
  id: number;
  name: string;
  price: number;
  description?: string;
};

export const Products = () => {
  const products: Products[] = [
    {
      id: 1,
      name: "Iphone 13",
      price: 1199,
      description: "Puissance irrésistible. À prix irrésistible.",
    },
    {
      id: 2,
      name: "Iphone 13 Pro",
      price: 1199,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
    {
      id: 3,
      name: "Iphone 12",
      price: 999,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
  ];

  return (
    <main className="max-w-full mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
        Produits à la une
      </h1>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8"
          >
            <img
              className="w-full h-64 object-cover"
              src={product.id === 1 ? Iphone13 : product.id === 2 ? Iphone13Pro : Iphone12}
              alt={product.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-blue-700">{product.name}</div>
              <p className="text-gray-600 dark:text-gray-400 text-base mb-4">
                {product.description}
              </p>
              <p className="text-gray-700 dark:text-white font-bold text-xl mb-2">
                {product.price} €
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
                <FaShoppingCart className="mr-2" />
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
