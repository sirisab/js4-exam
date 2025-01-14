import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArtworkDetails from '../Components/ArtworkDetails';
import { FindArtwork } from '../Utilities/FindArtwork';
import { IArtwork } from '../Models/IArtwork';
import { useOutletContext } from 'react-router-dom';

type OutletContextType = {
  updateCartBadge: () => void; // Typen för de props som skickas via Outlet
};

export const ArtworkPage = () => {
  const { updateCartBadge } = useOutletContext<OutletContextType>();
  const [artwork, setArtwork] = useState<IArtwork>();

  const { id } = useParams();

  useEffect(() => {
    const getArtwork = async () => {
      try {
        const found = await FindArtwork(`/artworks/${id}`);
        setArtwork(found);
      } catch (error) {
        console.error('Failed to fetch artwork:', error);
      }
    };
    getArtwork();
  }, [id]);

  return (
    <>
      <ArtworkDetails artwork={artwork!} updateCartBadge={updateCartBadge} />
    </>
  );
};
