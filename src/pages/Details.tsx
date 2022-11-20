import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useParams } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Rating from '../components/Rating';
import { useProduct } from '../hooks/useProduct';

const Details = () => {
  const { id } = useParams();
  const { data } = useProduct(Number(id));

  return (
    <main className="w-screen h-screen">
      <div className="flex h-full flex-col justify-center items-center lg:flex-row">
        <section className="mb-20 lg:mr-20 ">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{
              clickable: true,
            }}
            className="w-[800px] h-[800px] flex items-center justify-center">
            {data?.images?.map((img: string) => {
              return (
                <SwiperSlide
                  className="flex justify-center items-center"
                  key={img}>
                  <img
                    className="block w-3/4 h-3/4 object-contain"
                    key={img}
                    src={img}
                    alt={img}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>

        <section>
          <div className="flex justify-between items-center">
            <h1 className="text-dark-text text-5xl font-semibold w-72 overflow break-words">
              {data.title}
            </h1>
            <div className="flex items-center">
              <Rating rating={Number(data.rating)} />
              <span className="text-2xl font-bold ml-2">{data.rating}</span>
            </div>
          </div>
          <p className="font-medium text-xl w-[400px] my-5">
            {data.description}
          </p>
          <ul>
            <li className="text-item-color text-xl font-medium mb-2">
              Stock: {data.stock}
            </li>
            <li className="text-item-color text-xl font-medium mb-2">
              Brand: {data.brand}
            </li>
            <li className="text-item-color text-xl font-medium mb-2">
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
            <button className="bg-black text-white text-2xl font-semibold px-14 h-14 rounded-full">
              Add to cart
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Details;
