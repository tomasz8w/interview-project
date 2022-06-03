import request from "services/apiService";

export type FetchProductsPayload = {
  limit: number;
  search?: string;
  page?: number;
  promo?: boolean;
  active?: boolean;
};

export type FetchProductPayload = {
  productId: number;
};

export const fetchProducts = <TResponse,>({
  limit,
  search,
  page = 1,
  promo,
  active,
}: FetchProductsPayload) => {
  const queryString = `/products?page=${page}&limit=${limit}`
    .concat(promo ? "&promo=true" : "")
    .concat(active ? "&active=true" : "")
    .concat(search ? `&search=${search}` : "");

  return request<TResponse, undefined>(queryString, "GET");
};

export const fetchProduct = <TResponse,>({
  productId,
}: FetchProductPayload) => {
  const queryString = `/products/${productId}`;

  return request<TResponse, undefined>(queryString, "GET");
};
