import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styles from './RatingStars.module.scss';

interface RatingStarsProps {
  rating: number | undefined;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating ?? 0);
  const halfStars = Math.ceil((rating ?? 0) - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<BsStarFill key={`star-${i}`} />);
  }

  for (let i = 0; i < halfStars; i++) {
    stars.push(<BsStarHalf key={`star-${fullStars + i}`} />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<BsStar key={`star-${fullStars + halfStars + i}`} />);
  }

  return <div className={styles.rating}>{stars}</div>;
};

export default RatingStars;
