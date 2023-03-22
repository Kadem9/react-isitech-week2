// Mon type pour les "produits", j'indique que l'id sera un nombre, que le name sera un string etc..
// Exemple d'un produit : id: 4, name: "Iphone 12", description: "Iphone 12", price: 1200, model: "Iphone 12 64GB"
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    model: string;
}