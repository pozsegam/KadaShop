import { useNavigate } from 'react-router-dom';

import { ROUTE } from '../navigation/routes';

type CardProps = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
};

const ProductCard: React.FC<CardProps> = ({
  id,
  name,
  description,
  price,
  thumbnail,
  discountPercentage,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="container mx-auto"
      onClick={() => navigate(`${ROUTE.PRODUCT_DETAILS}/${id}`)}>
      <img src={thumbnail} alt={name} />
      <p>{price}$</p>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{discountPercentage}</p>
    </div>
  );
};

export default ProductCard;
