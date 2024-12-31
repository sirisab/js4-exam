import { FaTrash } from 'react-icons/fa';
import { IArtwork } from '../Models/IArtwork';
import styles from './ShoppingcartListItem.module.css';
import { DeleteFromShoppingcart } from '../Utilities/DeleteFromShoppingcart';
import ImageLink from './ImageLink';
import { LoadArtworks } from '../Utilities/LoadArtworks';

export const ShoppingcartListItem = ({
  cartItem,
  setCurrentCartItems,
}: {
  cartItem: IArtwork;
  setCurrentCartItems: React.Dispatch<React.SetStateAction<IArtwork[]>>;
}) => {
  const handleClick = async (id: number) => {
    try {
      await DeleteFromShoppingcart(id);

      const updatedCartItems = await LoadArtworks('/shoppingcart');
      setCurrentCartItems(updatedCartItems);
    } catch (error) {
      console.error('Error updating cart items:', error);
    }
  };

  return (
    <div key={cartItem?.id} className={styles['cart-item']}>
      <button
        type='button'
        className='styles[delete-btn]'
        onClick={() => handleClick(cartItem.id)}
      >
        <FaTrash size='16px' color='red' />
      </button>
      <ImageLink
        href={`/artworks/${cartItem.id}`}
        imageSrc={`http://localhost:5173/drawings/${cartItem.imageUrlThumbnail}`}
        altText={cartItem.title}
      />
      <div className={styles['cart-title']}>{cartItem?.title} </div>
      <div className={styles['cart-price']}>{cartItem?.price} kr</div>
    </div>
  );
};
