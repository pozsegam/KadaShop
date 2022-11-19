import { useCallback, useEffect, useRef } from 'react';

import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

const Home = () => {
  const observerElem = useRef(null);
  const { data, isError, hasNextPage, fetchNextPage } = useProducts();
  console.log(data);

  const handleObserver = useCallback(
    (entries: any) => {
      const [target] = entries;
      if (target.isIntersecting) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    const element: any = observerElem.current;
    const option = { threshold: 0 };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  return (
    <div className="container m-auto">
      <header>
        <h1 className="flex justify-center text-5xl font-bold m-12 text-center">
          See Products
        </h1>
      </header>
      <main>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 between:grid-cols-3 lg:grid-cols-4">
          {data?.pages.map((page): any =>
            page.products.map((item: any) => {
              return (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  discountPercentage={item.discountPercentage}
                  price={item.price}
                  description={item.description}
                  thumbnail={item.thumbnail}
                  name={item.title}
                />
              );
            }),
          )}
        </div>
      </main>
      <div className="w-full" ref={observerElem}></div>
    </div>
  );
};
export default Home;
