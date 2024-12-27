import { IArtwork } from '../Models/IArtwork';
import styles from './ShoppingcartList.module.css';
interface ShoppingcartListProps {
  cartItems: IArtwork[];
}

export const ShoppingcartList = ({ cartItems }: ShoppingcartListProps) => {
  return (
    <>
      <h4>Lista:</h4>

      {cartItems?.map((cartItem) => (
        <section>
          <div key={cartItem?.id}>
            <img
              src={`http://localhost:5173/drawings/${cartItem.imageUrlThumbnail}`}
            />
            {cartItem?.title} {cartItem?.price}
          </div>
        </section>
      ))}
    </>
  );
};
