import { IArtwork } from '../Models/IArtwork';

const ArtworkDetails = ({ artwork }: { artwork: IArtwork }) => {
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
          <p className='text-muted'>Info: {artwork?.description}</p>
          <p>{artwork?.price} kr</p>
          <button>Lägg i varukorgen</button>
        </div>
      </section>
    </>
  );
};
export default ArtworkDetails;
