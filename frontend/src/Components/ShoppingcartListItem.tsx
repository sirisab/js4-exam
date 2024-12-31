import { FaTrash } from 'react-icons/fa';
import { IArtwork } from '../Models/IArtwork';
import styles from './ShoppingcartListItem.module.css';
import { DeleteFromShoppingcart } from '../Utilities/DeleteFromShoppingcart';
import ImageLink from './ImageLink';

export const ShoppingcartListItem = ({ cartItem }: { cartItem: IArtwork }) => {
  const handleClick = async (id: number) => {
    await DeleteFromShoppingcart(id);
  };

  return (
    <div key={cartItem?.id} className={styles['cart-item']}>
      <button
        type='button'
        className='styles[delete-btn]'
        onClick={() => handleClick(cartItem.id)}
      >
        <FaTrash size='14px' color='red' />
      </button>
      <ImageLink
        href={`/artworks/${cartItem.id}`}
        imageSrc={`http://localhost:5173/drawings/${cartItem.imageUrlThumbnail}`}
        altText={cartItem.title}
      />
      {/* className={styles['cart-img']}
        src={`http://localhost:5173/drawings/${cartItem.imageUrlThumbnail}`}
      /> */}
      {/* <img
        className={styles['cart-img']}
        src={`http://localhost:5173/drawings/${cartItem.imageUrlThumbnail}`}
      /> */}
      <div className={styles['cart-title']}>{cartItem?.title} </div>
      <div className={styles['cart-price']}>{cartItem?.price} kr</div>
    </div>
  );
};
