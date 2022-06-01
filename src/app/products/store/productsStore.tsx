import { useQuery } from "react-query";

import {
  fetchProduct,
  FetchProductPayload,
  fetchProducts,
  FetchProductsPayload,
} from "app/products/services/productsService";

const queryKeys = {
  all: ["products"] as const,
  products: (payload: FetchProductsPayload) =>
    [...queryKeys.all, "products-list", payload] as const,
  product: (productId: number) =>
    [...queryKeys.all, "product", productId] as const,
};

export const useProductsQuery = (payload: FetchProductsPayload) =>
  useQuery(queryKeys.products(payload), () => fetchProducts(payload));

export const useProductQuery = (payload: FetchProductPayload) =>
  useQuery(queryKeys.product(payload.productId), () => fetchProduct(payload));
