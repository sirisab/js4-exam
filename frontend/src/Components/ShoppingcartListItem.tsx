import { FaTrash } from 'react-icons/fa';
import { IArtwork } from '../Models/IArtwork';
import styles from './ShoppingcartListItem.module.css';
import { DeleteFromShoppingcart } from '../Utilities/DeleteFromShoppingcart';
import ImageLink from './ImageLink';
import { LoadArtworks } from '../Utilities/LoadArtworks';
import { NavLink } from 'react-router-dom';

export const ShoppingcartListItem = ({
  cartItem,
  setCurrentCartItems,
  updateCartBadge,
}: {
  cartItem: IArtwork;
  setCurrentCartItems: React.Dispatch<React.SetStateAction<IArtwork[]>>;
  updateCartBadge: () => void;
}) => {
  const handleClick = async (id: number) => {
    try {
      await DeleteFromShoppingcart(id);

      const updatedCartItems = await LoadArtworks('/shoppingcart');
      setCurrentCartItems(updatedCartItems);

      updateCartBadge();
    } catch (error) {
      console.error('Error updating cart items:', error);
    }
  };

  const regExFormat = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <>
      <div key={cartItem?.id} className={styles['cart-item']}>
        <button
          type='button'
          className={styles['delete-btn']}
          onClick={() => handleClick(cartItem.id)}
        >
          <FaTrash size='16px' color='red' />
        </button>
        <ImageLink
          href={`/artworks/${cartItem.id}`}
          imageSrc={`../drawings/${cartItem.imageUrlThumbnail}`}
          altText={cartItem.title}
        />
        <div className={styles['cart-title']}>
          <NavLink to={`/artworks/${cartItem.id}`}>{cartItem?.title}</NavLink>{' '}
        </div>
        <div className={styles['cart-price']}>
          {' '}
          {regExFormat(cartItem?.price)} kr
        </div>
      </div>
    </>
  );
};
