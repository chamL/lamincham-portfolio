import { Product } from "../types/types";

/**
 * Returns random related products (excluding current)
 */
export function getRelatedProducts(
    currentId: number,
    products: Product[],
    count: number = 3
): Product[] {
    return products
        .filter((p) => p.id !== currentId)
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
}