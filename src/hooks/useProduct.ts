import { useQuery } from 'react-query';

import { fetchProduct } from '../api/fetchProducts';

export const useProduct = (id: number) => {
  return useQuery(['products'], () => fetchProduct(id));
};
