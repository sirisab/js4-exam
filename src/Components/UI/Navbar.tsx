import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/artworks'>Artworks</NavLink>
      <NavLink to='/artworks/1'>Artwork 1</NavLink>
    </nav>
  );
};
export default Navbar;
