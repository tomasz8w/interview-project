import axios, { AxiosError } from "axios";

const baseUrl = "https://join-tsh-api-staging.herokuapp.com";

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

export type Product = {
  active: boolean;
  description: string;
  id: number;
  image: string;
  name: string;
  promo: boolean;
  rating: number;
};

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

export const fetchProducts = async ({
  limit,
  search,
  page = 1,
  promo,
  active,
}: FetchProductsPayload) => {
  const queryString = `${baseUrl}/products?page=${page}&limit=${limit}`
    .concat(promo ? "&promo=true" : "")
    .concat(active ? "&active=true" : "")
    .concat(search ? `&search=${search}` : "");

  try {
    const res = await axios.get<ProductsResponse>(queryString, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.message);
    } else return Promise.reject("Unknown error");
  }
};

export const fetchProduct = async ({ productId }: FetchProductPayload) => {
  const queryString = `${baseUrl}/products/${productId}`;

  try {
    const res = await axios.get<Product>(queryString, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.message);
    } else return Promise.reject("Unknown error");
  }
};
