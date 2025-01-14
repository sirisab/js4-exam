import { NavLink } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <div className='register-container'>
      <h3>Kassa</h3>
      <p>
        Utvecklaren bakom sidan har inte lärt sig att skriva fungerande
        lösningar för shopping än.
      </p>
      <p>
        Men skriv gärna en rad till{' '}
        <a href='mailto:siri@siriahmedbackstrom.com'>Siri</a> så kan ni komma
        överens om ett köp!
      </p>
      <p>
        <NavLink to='/artworks'>Återvänd till pastellerna.</NavLink>
      </p>
    </div>
  );
};
