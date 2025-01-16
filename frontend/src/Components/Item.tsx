import { IArtwork } from '../Models/IArtwork';
import styles from './item.module.css';
import ImageLink from './ImageLink.tsx';
export const Item = ({ artwork }: { artwork: IArtwork }) => {
  const img: string = `../drawings/${artwork.imageUrlSmall}`;
  const regExFormat = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
  return (
    <div className={styles.card}>
      <ImageLink
        href={`/artworks/${artwork.id}`}
        imageSrc={img}
        altText={artwork.title}
      />
      <div className={styles['card-body']}>
        <h5>{artwork.title}</h5>
        <small className={styles.text}>
          {regExFormat(artwork.price)}
          kr
        </small>
      </div>
    </div>
  );
};
