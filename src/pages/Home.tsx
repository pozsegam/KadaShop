import Loading from '../components/Loading/Loading';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

const Home = () => {
  const { data, isLoading } = useProducts();

  return isLoading ? (
    <Loading />
  ) : (
    <div className="container">
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
  );
};
export default Home;
