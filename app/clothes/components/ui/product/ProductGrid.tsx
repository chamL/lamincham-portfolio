import ProductCard from "./productCards";
import { Product } from "../../../types/types";

type Props = {
    products: Product[];
    addToCart: (product: Product) => void;
};

export default function ProductGrid({ products, addToCart }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20 mt-16 pb-20">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
}