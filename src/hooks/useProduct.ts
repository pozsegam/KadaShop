import { useQuery } from 'react-query';

import { fetchProduct } from '../api/fetchProducts';

export const useProduct = (id: number) => {
  return useQuery(['product', id], () => fetchProduct(id));
};
