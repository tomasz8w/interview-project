import { useState, createContext, useContext, FC, useMemo } from "react";

type SearchParameters = {
  search?: string;
  active?: boolean;
  promo?: boolean;
};

type ProductSearchContext = {
  productSearchParameters: SearchParameters | undefined;
  setProductSearchParameters: React.Dispatch<
    React.SetStateAction<SearchParameters | undefined>
  >;
};

const ProductSearchContext = createContext<ProductSearchContext | undefined>(
  undefined
);

export const ProductSearchContextProvider: FC = ({ children }) => {
  const [productSearchParameters, setProductSearchParameters] = useState<
    SearchParameters | undefined
  >();

  const value = { productSearchParameters, setProductSearchParameters };

  return (
    <ProductSearchContext.Provider value={value}>
      {children}
    </ProductSearchContext.Provider>
  );
};

export const useProductSearchParameters = () => {
  const context = useContext(ProductSearchContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a ProductSearchContext");
  }

  return { context };
};
