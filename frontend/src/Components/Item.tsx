import { IArtwork } from '../Models/IArtwork';
import styles from './item.module.css';
import ImageLink from './ImageLink.tsx';
export const Item = ({ artwork }: { artwork: IArtwork }) => {
  const img: string = `http://localhost:5173/drawings/${artwork.imageUrlSmall}`;

  return (
    <section className={styles.card}>
      <ImageLink
        href={`/artworks/${artwork.id}`}
        imageSrc={img}
        altText={artwork.title}
      />
      <div className={styles['card-body']}>
        <h5>{artwork.title}</h5>
        <small className={styles.text}>{artwork.price} kr</small>
      </div>
    </section>
  );
};
