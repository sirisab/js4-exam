import { useState } from 'react';
import { IArtwork } from '../Models/IArtwork';
import styles from './ArtworkDetails.module.css';

const ArtworkDetails = ({ artwork }: { artwork: IArtwork }) => {
  const [buttonClass, setButtonClass] = useState<string>('active-btn');
  const [buttonText, setButtonText] = useState<string>('Lägg i varukorgen');

  const handleClick = () => {
    setButtonClass(
      buttonClass === 'active-btn' ? 'inactive-btn' : 'active-btn'
    );
    setButtonText(
      buttonClass === 'active-btn' ? 'Ligger i varukorgen' : 'Lägg i varukorgen'
    );
  };

  return (
    <>
      <section className='details'>
        <div>
          <img
            src={`http://localhost:5173/drawings/${artwork?.imageUrlLarge}`}
            alt={artwork?.title}
            className='details-image'
          />
        </div>
        <div className='details-info'>
          <h2>{artwork?.title}</h2>
          <p className='text-muted'>{artwork?.description}</p>
          <p className='text-muted'>{artwork?.dimensions}</p>
          <p>{artwork?.price} kr</p>
          <button className={styles[`${buttonClass}`]} onClick={handleClick}>
            {buttonText}
          </button>
        </div>
      </section>
    </>
  );
};
export default ArtworkDetails;
