import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { LoadArtworks } from '../../Utilities/LoadArtworks';
import { ShoppingcartList } from '../ShoppingcartList';
import { useEffect, useState } from 'react';
import { IArtwork } from '../../Models/IArtwork';

const Navbar = () => {
  const [itemCount, setItemCount] = useState(0);

  const updateCartBadge = async () => {
    const data = await LoadArtworks('/shoppingcart');
    console.log('Polling data:', data); // Logga data för att se vad som hämtas

    setItemCount(data.length);
  };

  useEffect(() => {
    updateCartBadge();

    const interval = setInterval(updateCartBadge, 10000);

    return () => clearInterval(interval);
  }, ['/shoppingcart']);

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
