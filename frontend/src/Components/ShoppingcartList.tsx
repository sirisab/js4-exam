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
        {cartItems?.map((cartItem) => (
          <ShoppingcartListItem cartItem={cartItem} />
        ))}
      </div>
      <div className={styles['cart-list']}>
        Summa: {cartItems?.map((cartItem) => +cartItem.price)}
      </div>
    </>
  );
};
