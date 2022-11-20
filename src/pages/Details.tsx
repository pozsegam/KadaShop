import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Rating from '../components/Rating';
import { useProduct } from '../hooks/useProduct';
import { ROUTE } from '../navigation/routes';

const Details = () => {
  const { id } = useParams();
  const { data } = useProduct(Number(id));

  return (
    <>
      <Helmet>
        <title>{`${data.title} on sale! | KadaShop`} </title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={`${ROUTE.PRODUCT_DETAILS}/${id}`} />
      </Helmet>
      <main className="w-screen h-screen">
        <div className="flex h-full flex-col justify-center items-center lg:flex-row">
          <section className="mb-10 lg:mr-20 ">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{
                clickable: true,
              }}
              className="flex items-center justify-center h-[300px] w-[400px] md:w-[600px] md:h-[500px]">
              {data?.images?.map((img: string) => {
                return (
                  <SwiperSlide
                    className="flex justify-center items-center"
                    key={img}>
                    <img
                      className="block  w-3/4 h-3/4 object-contain overflow-hidden"
                      key={img}
                      src={img}
                      alt={img}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>

          <section className="ml-8 md:ml-0 ">
            <div className="flex flex-col text-left md:flex-row  items-center">
              <h1 className="text-dark-text text-5xl font-semibold break-words w-72 text-center md:mr-6 md:text-left ">
                {data.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-0">
                <Rating rating={Number(data.rating)} />
                <span className="text-2xl font-bold ml-2">{data.rating}</span>
              </div>
            </div>
            <p className="font-medium text-xl my-5 break-words w-[400px] text-center md:text-left">
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

            <div className="flex justify-start  items-center md:justify-between">
              <span className="text-dark-text text-[64px] font-semibold mr-8">
                {data.price}$
              </span>
              <button className="bg-black text-white text-2xl font-semibold px-7 h-14 rounded-full md:px-14">
                Add to cart
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Details;
