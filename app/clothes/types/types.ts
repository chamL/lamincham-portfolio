export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
};

export type CartItem = Product & {
    quantity: number;
};
export type brands = {
    id: number;
    name: string;
    image: string;


};