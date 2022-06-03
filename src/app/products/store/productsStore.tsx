import { useQuery } from "react-query";

import {
  fetchProduct,
  FetchProductPayload,
  fetchProducts,
  FetchProductsPayload,
} from "app/products/services/productsService";
import { Product } from "app/products/models/Product";

export type ProductsResponse = {
  items: Product[];
  links: {
    first: string;
    last: string;
    next: string;
    previous: string;
  };
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
};

const queryKeys = {
  all: ["products"] as const,
  products: (payload: FetchProductsPayload) =>
    [...queryKeys.all, "products-list", payload] as const,
  product: (productId: number) =>
    [...queryKeys.all, "product", productId] as const,
};

export const useProductsQuery = (payload: FetchProductsPayload) =>
  useQuery<ProductsResponse, Error>(queryKeys.products(payload), () =>
    fetchProducts(payload)
  );

export const useProductQuery = (payload: FetchProductPayload) =>
  useQuery(queryKeys.product(payload.productId), () => fetchProduct(payload));
