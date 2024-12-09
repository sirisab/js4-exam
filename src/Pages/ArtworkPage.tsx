import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArtworkDetails from '../Components/ArtworkDetails';
import { FindArtwork } from '../Utilities/FindArtwork';
import { IArtwork } from '../Models/IArtwork';

export const ArtworkPage = () => {
  const [artwork, setArtwork] = useState<IArtwork>();

  const { id } = useParams();

  useEffect(() => {
    const getArtwork = async () => {
      const found = await FindArtwork(`/artworks/${id}`);
      setArtwork(found);
    };
    getArtwork();
  }, [id]);

  return (
    <main>
      <ArtworkDetails artwork={artwork!} />
    </main>
  );
};
