import { IArtwork } from '../Models/IArtwork';
import styles from './item.module.css';
export const Item = ({ artwork }: { artwork: IArtwork }) => {
  const img: string = `http://localhost:5173/public/drawings/${artwork.imageUrl}`;
  console.log(img);
  return (
    <section className={styles.card}>
      <img src={img} alt={artwork.title} />
      <div className={styles['card-body']}>
        <h5></h5>
        <small className={styles['text-muted']}>{artwork.price}</small>
      </div>
    </section>
  );
};
