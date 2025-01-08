import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h3>Något gick fel!</h3>
      <p>
        OJ! Något gick fel.{' '}
        <NavLink to='/artworks'>Återvänd till pastellerna.</NavLink>
      </p>
    </div>
  );
};
export default NotFoundPage;
