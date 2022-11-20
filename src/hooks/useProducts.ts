import { useInfiniteQuery, useQuery } from 'react-query';

import { fetchProducts } from '../api/fetchProducts';

export const useProducts = () => {
  return useInfiniteQuery(
    ['products'],
    ({ pageParam = 0 }) => fetchProducts(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log(lastPage);
        console.log(allPages);
        const nextPage = lastPage.skip + 10;
        return lastPage.skip !== 100 ? nextPage : undefined;
      },
    },
  );
};
