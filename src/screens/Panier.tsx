import { useContext } from "react"
import { CartContext } from "../context/cart"

export const Panier = () => {
const { cartState } = useContext(CartContext) // Accéder à l'état du panier
const { items } = cartState // Récupérer la propriété "items" de l'état du panier
        return (
            <main>
                <h1>Mon panier</h1>
                {items.map(item => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Prix: {item.price} €</p>
                    </div>
                ))}
            </main>
        )
}