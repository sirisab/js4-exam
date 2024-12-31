import { NavLink } from 'react-router-dom';
import { IArtwork } from '../Models/IArtwork';
import styles from './ShoppingcartList.module.css';
import { ShoppingcartListItem } from './ShoppingcartListItem';
interface ShoppingcartListProps {
  cartItems: IArtwork[];
}

export const ShoppingcartList = ({ cartItems }: ShoppingcartListProps) => {
  return (
    <>
      <div className={styles['cart-list']}>
        {cartItems?.map((cartItem, i) => (
          <ShoppingcartListItem key={i} cartItem={cartItem} />
        ))}
        <div className={styles['cart-sum']}>
          Summa:{' '}
          {cartItems?.reduce((total, cartItem) => {
            return total + cartItem.price;
          }, 0)}{' '}
          kr
        </div>
        <div className={styles['to-register-btn']}>
          <NavLink to={`/register`}>
            <button>Till betalning</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
