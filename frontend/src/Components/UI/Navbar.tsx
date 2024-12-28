import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { HiMiniShoppingBag } from 'react-icons/hi2';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to='/'>
        <h1>Pastel shop</h1>
      </NavLink>

      <NavLink to='/shoppingcart'>
        <HiMiniShoppingBag className={styles.badge} size={30} />
      </NavLink>
    </nav>
  );
};
export default Navbar;
