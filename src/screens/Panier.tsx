import { useContext, useReducer } from "react"
import { CartContext } from "../context/cart"


export const Panier = () => {
    const { cartState, cartdispatch } = useContext(CartContext) // Accéder à l'état du panier
    const { items } = cartState // Récupérer la propriété "items" de l'état du panier

    const handleChange = (item) => {
        cartdispatch({
            type: "REMOVE_ITEM",
            payload: item.id,
        });
    };
    return (
        <main className="max-w-full mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Mon panier ({items.length})</h1>
            {items.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-md shadow-md p-4 mb-4 flex items-center"
                >
                    <img
                        src={item.img}
                        alt={item.name}
                        className="w-32 h-32 object-contain mr-4"
                    />
                    <div>
                        <h2 className="text-lg font-bold">{item.name}</h2>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="font-bold text-lg mb-2">{item.price} €</p>
                        <button
                            onClick={() => handleChange(item)}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                        >
                            Supprimer
                        </button>
                    </div>
                </div>
            ))}
        </main>
    );

}