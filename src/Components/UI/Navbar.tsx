import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { HiMiniShoppingBag } from 'react-icons/hi2';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to='/'>Pastel shop</NavLink>
      <NavLink to='/shoppingcart'>
        <HiMiniShoppingBag size={30} />
      </NavLink>
    </nav>
  );
};
export default Navbar;
