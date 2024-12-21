import { useState, useEffect } from 'react';
import { Header } from '../Components/UI/Header';
import { IArtwork } from '../Models/IArtwork';
import { GridList } from '../Components/GridList';
import { LoadArtworks } from '../Utilities/LoadArtworks';

export const ArtworksPage = () => {
  const [artworks, setArtworks] = useState<IArtwork[]>([]);

  useEffect(() => {
    loadArtworks();
  }, []);

  const loadArtworks = async () => {
    setArtworks(await LoadArtworks('/artworks'));
  };

  return (
    <main>
      {/* <Header title='Pasteller' /> */}
      <GridList artworks={artworks} />
    </main>
  );
};
