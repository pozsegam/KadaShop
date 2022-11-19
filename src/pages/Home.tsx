import Loading from '../components/Loading/Loading';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

const Home = () => {
  const { data, isLoading, isError } = useProducts();
  return (
    <div className="container m-auto">
      <header>
        <h1 className="flex justify-center text-5xl font-bold m-12 text-center">
          See Products
        </h1>
      </header>
      <main>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 between:grid-cols-3 lg:grid-cols-4">
          {data?.products?.map((item: any) => {
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
          })}
        </div>
      </main>
    </div>
  );
};
export default Home;
