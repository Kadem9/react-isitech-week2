import products from '../models/Products.json';
import { CartContext } from '../context/cart';
import { useContext } from 'react';

export const Articles = () => {
    const { cartState, cartdispatch } = useContext(CartContext); // Accéder au contexte du panier

    const handleAddToCart = (product) => {
        // Ajouter l'article au panier
        cartdispatch({
            type: "ADD_ITEM",
            payload: product,
        });
    };

    return (
        <main className="container">
            <h1 className="text-4xl mt-4">Mes articles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
                        <img src={product.img} alt={product.name} className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                            <p className="text-gray-700 text-base">{product.description}</p>
                            <p className="text-gray-900 font-bold mt-2">{product.price} €</p>
                            <button className="bg-zinc-800 text-white p-2 rounded-sm hover:bg-black mt-2" onClick={() => handleAddToCart(product)}>Ajouter au panier</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};