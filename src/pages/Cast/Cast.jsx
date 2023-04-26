import { fetchCreditsById } from 'services/The-movie-database-API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCreditsById(id).then(({ data }) => {
      setCredits(data.cast);
    });
  }, [id]);

  return (
    <>
      {credits.length < 1 && <p>We don't have any casts for this movie.</p>}
      <CastList>
        {credits.map(({ character, profile_path, name }, index) => (
          <CastItem key={index}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original/${profile_path}`
                  : 'https://www.lasff.com/uploads/2/6/7/4/26743637/poster-not-available_orig.jpg'
              }
              alt={name}
              width="150"
            />
            {name}
            {character && <p>Character: {character}</p>}
          </CastItem>
        ))}
      </CastList>
    </>
  );
};

export default Cast;
