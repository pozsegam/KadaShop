import 'swiper/css';

// Import Swiper styles
import { useParams } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Loading from '../components/Loading/Loading';
import Star from '../components/Star';
import { useProduct } from '../hooks/useProduct';

const Details = () => {
  const { id } = useParams();
  const { data } = useProduct(Number(id));

  return (
    <main className="container flex">
      <Swiper spaceBetween={50} slidesPerView={1}>
        {data?.images?.map((img: any) => {
          return (
            <SwiperSlide key={img}>
              <img key={img} src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <section className="container w-1/2 bg-slate-200">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-dark-text text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center">
            <Star />
            <span className="font-bold">{data.rating}</span>
          </div>
        </div>
        <p className="w-[400px]">{data.description}</p>
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
        <div className="mt-6">
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
    </main>
  );
};

export default Details;
