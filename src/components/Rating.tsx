import Star from './Star';

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const numberOfFilledStars = Math.floor(rating);

  const filledStars = () => {
    return [...Array(numberOfFilledStars)].map(star => {
      return <Star fill={'#6100FF'} />;
    });
  };

  const blankStars = () => {
    return [...Array(5 - numberOfFilledStars)].map(star => {
      return <Star fill="#D9D9D9" />;
    });
  };

  return (
    <div className="flex">
      {filledStars()}
      {blankStars()}
    </div>
  );
};

export default Rating;
