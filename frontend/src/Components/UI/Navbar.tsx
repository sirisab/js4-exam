import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { HiMiniShoppingBag } from 'react-icons/hi2';

const Navbar = ({ itemCount }: { itemCount: number }) => {
  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink to='/'>
          <h1>Pastellbutiken</h1>
        </NavLink>
      </div>

      <div>
        <div>
          <NavLink to='/shoppingcart'>
            <HiMiniShoppingBag size={30} />
          </NavLink>
        </div>
        <div
          className={`${styles.badge} ${
            itemCount === 0 ? 'styles.hidden' : ''
          }}`}
        >
          {itemCount}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
