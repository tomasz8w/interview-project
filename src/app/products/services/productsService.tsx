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

export const fetchProducts = async ({
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

  return await request(queryString, "GET");
};

export const fetchProduct = async ({ productId }: FetchProductPayload) => {
  const queryString = `/products/${productId}`;

  return await request(queryString, "GET");
};
