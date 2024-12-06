import { IArtwork } from '../Models/IArtwork';
import styles from './item.module.css';
import ImageLink from './ImageLink.tsx';
export const Item = ({ artwork }: { artwork: IArtwork }) => {
  const img: string = `http://localhost:5173/drawings/${artwork.imageUrl}`;

  return (
    <section className={styles.card}>
      {/* <img src={img} alt={artwork.title} /> */}
      <ImageLink
        href={`${artwork.id}`}
        imageSrc={img}
        altText={artwork.title}
      />
      <div className={styles['card-body']}>
        <h5>{artwork.title}</h5>
        <small className={styles['text-muted']}>{artwork.price} kr</small>
      </div>
    </section>
  );
};
