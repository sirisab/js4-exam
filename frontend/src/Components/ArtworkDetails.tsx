import { NavLink } from 'react-router-dom';
import { IArtwork } from '../Models/IArtwork';
import { PostToShoppingcart } from '../Utilities/PostToShoppingcart';
import styles from './ArtworkDetails.module.css';
import { RiPlayLargeFill } from 'react-icons/ri';
import { RiPlayReverseLargeFill } from 'react-icons/ri';

const ArtworkDetails = ({
  artwork,
  updateCartBadge,
}: {
  artwork: IArtwork;
  updateCartBadge: () => void;
}) => {
  const handleClick = () => {
    try {
      postToCart(artwork);
      updateCartBadge();
    } catch (error) {
      console.error('Misslyckades med att uppdatera badgen:', error);
    }
  };

  const postToCart = (item: IArtwork) => {
    PostToShoppingcart(item);
  };

  return (
    <>
      <div className={styles.details}>
        <img
          src={`../drawings/${artwork?.imageUrlLarge}`}
          alt={artwork?.title}
          className={styles['details-image']}
        />

        <div className={styles['details-info']}>
          <div className={styles['arrows-div']}>
            {artwork?.id > 1 && (
              <NavLink to={`/artworks/${+artwork?.id - 1}`}>
                <RiPlayReverseLargeFill className='arrow' size={20} />
              </NavLink>
            )}

            {artwork?.id < 9 && (
              <NavLink to={`/artworks/${+artwork?.id + 1}`}>
                <RiPlayLargeFill className='arrow' size={20} />
              </NavLink>
            )}
          </div>
          <h3>{artwork?.title}</h3>
          <p>{artwork?.description}</p>
          <p>{artwork?.dimensions}</p>
          <p>{artwork?.price} kr</p>
          <p>{artwork?.inStock} i lager</p>
          <button className={styles['add-to-cart-btn']} onClick={handleClick}>
            Lägg i varukorgen
          </button>
        </div>
      </div>
    </>
  );
};
export default ArtworkDetails;
