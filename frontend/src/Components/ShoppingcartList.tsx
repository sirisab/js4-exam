import { NavLink } from 'react-router-dom';
import { IArtwork } from '../Models/IArtwork';
import styles from './ShoppingcartList.module.css';
import { ShoppingcartListItem } from './ShoppingcartListItem';
import { useEffect, useState } from 'react';

export const ShoppingcartList = ({
  cartItems,
  updateCartBadge,
}: {
  cartItems: IArtwork[];
  updateCartBadge: () => void;
}) => {
  const [currentCartItems, setCurrentCartItems] = useState<IArtwork[]>(
    cartItems || []
  );

  useEffect(() => {
    setCurrentCartItems(cartItems);
  }, [cartItems]);

  const regExFormat = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <>
      <div className={styles['cart-list']}>
        {currentCartItems?.map((cartItem, i) => (
          <ShoppingcartListItem
            key={i}
            cartItem={cartItem}
            setCurrentCartItems={setCurrentCartItems}
            updateCartBadge={updateCartBadge}
          />
        ))}
        {currentCartItems.length > 0 ? (
          <>
            <div className={styles['cart-sum']}>
              Summa:{' '}
              {regExFormat(
                currentCartItems?.reduce((total, cartItem) => {
                  return total + cartItem.price;
                }, 0)
              )}{' '}
              kr
            </div>
            <div className={styles['to-register-btn']}>
              <NavLink to={`/register`}>
                <button>Till betalning</button>
              </NavLink>
            </div>
          </>
        ) : (
          <p>
            Här är det tomt!{' '}
            <NavLink to='/artworks'>Återvänd till pastellerna.</NavLink>
          </p>
        )}
      </div>
    </>
  );
};
