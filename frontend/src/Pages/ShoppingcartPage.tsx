import { useState, useEffect } from 'react';
import { IArtwork } from '../Models/IArtwork';
import { LoadArtworks } from '../Utilities/LoadArtworks';
import { ShoppingcartList } from '../Components/ShoppingcartList';

export const ShoppingcartPage = () => {
  const [cartItems, setCartItems] = useState<IArtwork[]>([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    setCartItems(await LoadArtworks('/shoppingcart'));
  };

  return (
    <>
      <h2>Varukorg</h2>
      <ShoppingcartList cartItems={cartItems} />
    </>
  );
};
