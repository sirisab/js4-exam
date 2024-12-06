import { IArtwork } from '../Models/IArtwork';
import styles from './GridList.module.css';
import { Item } from './Item';
export const GridList = ({ artworks }: { artworks: IArtwork[] }) => {
  return (
    <section className={styles.grid}>
      {artworks.map((artwork) => (
        <Item key={artwork.id} artwork={artwork} />
      ))}
    </section>
  );
};
