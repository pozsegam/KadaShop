import 'swiper/css';

// Import Swiper styles
import { useParams } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Loading from '../components/Loading/Loading';
import { useProduct } from '../hooks/useProduct';

const Details = () => {
  const { id } = useParams();
  const { data, isLoading } = useProduct(Number(id));

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <p>IMAGES</p>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {data?.images?.map((img: any) => {
          return (
            <SwiperSlide>
              <img key={img} src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Details;
