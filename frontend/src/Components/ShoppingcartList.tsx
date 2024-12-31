import { NavLink } from 'react-router-dom';
import { IArtwork } from '../Models/IArtwork';
import styles from './ShoppingcartList.module.css';
import { ShoppingcartListItem } from './ShoppingcartListItem';
import { useEffect, useState } from 'react';

export const ShoppingcartList = ({ cartItems }: { cartItems: IArtwork[] }) => {
  const [currentCartItems, setCurrentCartItems] = useState<IArtwork[]>(
    cartItems || []
  );

  useEffect(() => {
    setCurrentCartItems(cartItems);
  }, [cartItems]);

  return (
    <>
      <div className={styles['cart-list']}>
        {currentCartItems?.map((cartItem, i) => (
          <ShoppingcartListItem
            key={i}
            cartItem={cartItem}
            setCurrentCartItems={setCurrentCartItems}
          />
        ))}
        <div className={styles['cart-sum']}>
          Summa:{' '}
          {currentCartItems?.reduce((total, cartItem) => {
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
