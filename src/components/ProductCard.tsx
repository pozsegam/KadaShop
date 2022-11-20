import { useNavigate } from 'react-router-dom';

import { Product } from '../models/Product';
import { ROUTE } from '../navigation/routes';

const ProductCard: React.FC<Product> = ({
  id,
  title,
  description,
  price,
  thumbnail,
  discountPercentage,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`${ROUTE.PRODUCT_DETAILS}/${id}`)}
      className="container w-72 h-80 mx-auto bg-white py-2.5 px-3  rounded-md border border-[#DBDBDB] cursor-pointer">
      <div className="container relative overflow-hidden h-36 rounded-md">
        <span className="absolute right-2 top-2 text-white text-sm font-semibold bg-main-purple px-4 py-1 rounded-2xl">
          -{discountPercentage}%
        </span>
        <img
          className="block object-cover h-full w-full"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className="container items-baseline flex justify-between mt-2">
        <h1 className="text-dark-text text-xl font-semibold">
          {title?.length > 15 ? `${title.substring(0, 15)}...` : title}
        </h1>
        <h1 className="text-dark-text text-2xl font-semibold">{price}$</h1>
      </div>
      <p className="mb-3.5">{description.substring(0, 50)}</p>
      <button className="text-white text-base font-semibold py-3 w-full rounded-3xl transition ease-in-out delay-150  bg-black hover:-translate-y-1 hover:scale-105 hover:bg-main-purple duration-300">
        See details
      </button>
    </div>
  );
};

export default ProductCard;
