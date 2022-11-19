import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper styles
import { useParams } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Rating from '../components/Rating';
import { useProduct } from '../hooks/useProduct';

const Details = () => {
  const { id } = useParams();
  const { data } = useProduct(Number(id));

  return (
    <main className="w-screen h-screen">
      <div className="flex h-full flex-col justify-center items-center lg:flex-row">
        <section className="mr-20">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation
            className="w-[600px] h-[480px]">
            {data?.images?.map((img: string) => {
              return (
                <SwiperSlide
                  className="flex justify-center items-center"
                  key={img}>
                  <div className="w-[500px] h-[480px] rounded-md overflow-hidden">
                    <img
                      className="block w-full h-full object-cover "
                      key={img}
                      src={img}
                      alt={img}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>

        <section className="p-1">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-dark-text text-5xl font-semibold w-72">
              {data.title}
            </h1>
            <div className="flex items-center">
              <Rating rating={Number(data.rating)} />
              <span className="font-bold">{data.rating}</span>
            </div>
          </div>
          <p className="w-[300px]">{data.description}</p>
          <ul className="mt-3 mb-6">
            <li className="text-item-color font-medium mb-1">
              Stock: {data.stock}
            </li>
            <li className="text-item-color font-medium mb-1">
              Brand: {data.brand}
            </li>
            <li className="text-item-color font-medium mb-1">
              Category: {data.category}
            </li>
          </ul>
          <div className="mt-6 mb-2">
            <span className="text-white text-xl font-semibold bg-main-purple px-6 py-2 rounded-3xl">
              -{data.discountPercentage}%
            </span>
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-dark-text text-[64px] font-semibold">
              {data.price}$
            </h1>
            <button className="bg-black text-white text-2xl font-semibold px-9 h-12 rounded-3xl">
              Add to cart
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Details;
