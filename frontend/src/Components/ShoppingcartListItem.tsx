import { IArtwork } from '../Models/IArtwork';
import styles from './ShoppingcartListItem.module.css';

export const ShoppingcartListItem = ({ cartItem }: { cartItem: IArtwork }) => {
  return (
    <div key={cartItem?.id} className={styles['cart-item']}>
      <img
        src={`http://localhost:5173/drawings/${cartItem.imageUrlThumbnail}`}
      />
      <div className={styles['cart-detail']}>{cartItem?.title} </div>
      <div className={styles['cart-detail']}>{cartItem?.price} kr</div>
    </div>
  );
};
