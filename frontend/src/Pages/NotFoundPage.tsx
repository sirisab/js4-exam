import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h3>NotFoundPage</h3>
      <p>
        OJ! Något gick fel.{' '}
        <Link to='/artworks'>Återvänd till pastellerna.</Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
