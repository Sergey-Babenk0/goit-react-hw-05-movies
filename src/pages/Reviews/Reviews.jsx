import { fetchReviewsById } from 'services/The-movie-database-API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  ReviewList,
  ReviewItem,
  ReviewText,
  ReviewSpan,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchReviewsById(id).then(({ data }) => setReviews(data.results));
  }, [id]);

  return (
    <>
      {reviews.length < 1 && <p>We don't have any reviews for this movie.</p>}
      <ReviewList>
        {reviews.map(({ author, content }, index) => (
          <ReviewItem key={index}>
            <ReviewSpan> Author:</ReviewSpan> {author}
            <ReviewText>{content}</ReviewText>
          </ReviewItem>
        ))}
      </ReviewList>
    </>
  );
};

export default Reviews;
