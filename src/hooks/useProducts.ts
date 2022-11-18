import { useQuery } from 'react-query';

import { fetchProducts } from '../api/fetchProducts';

export const useProducts = () => {
  return useQuery(["products"], fetchProducts);
};
