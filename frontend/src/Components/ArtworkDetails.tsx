import { NavLink } from 'react-router-dom';
import { IArtwork } from '../Models/IArtwork';
import { PostToShoppingcart } from '../Utilities/PostToShoppingcart';
import styles from './ArtworkDetails.module.css';
import { RiPlayLargeFill } from 'react-icons/ri';
import { RiPlayReverseLargeFill } from 'react-icons/ri';

const ArtworkDetails = ({ artwork }: { artwork: IArtwork }) => {
  // const [buttonClass, setButtonClass] = useState<string>('active-btn');
  // const [buttonText, setButtonText] = useState<string>('Lägg i varukorgen');

  // const handleClick = () => {
  //   setButtonClass(
  //     buttonClass === 'active-btn' ? 'active-btn' : 'inactive-btn'
  //   );
  //   setButtonText(
  //     buttonClass === 'active-btn' ? 'Ligger i varukorgen' : 'Lägg i varukorgen'
  //   );
  // };

  // useEffect(() => {
  //   console.log(buttonClass); // Loggar det nya värdet efter att det har ändrats
  // }, [buttonClass]);

  return (
    <>
      <section className={styles.details}>
        <img
          src={`http://localhost:5173/drawings/${artwork?.imageUrlLarge}`}
          alt={artwork?.title}
          className={styles['details-image']}
        />

        <div className={styles['details-info']}>
          <h3>{artwork?.title}</h3>
          <p>{artwork?.description}</p>
          <p>{artwork?.dimensions}</p>
          <p>{artwork?.price} kr</p>
          <button>Lägg i varukorgen</button>
        </div>

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
      </section>
    </>
  );
};
export default ArtworkDetails;
