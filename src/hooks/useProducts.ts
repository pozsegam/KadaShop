import { useInfiniteQuery, useQuery } from 'react-query';

import { fetchProducts } from '../api/fetchProducts';

export const useProducts = () => {
  return useInfiniteQuery(
    ['products'],
    ({ pageParam = 0 }) => fetchProducts(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 10;
        return lastPage.length !== 0 ? nextPage : undefined;
      },
    },
  );
};
