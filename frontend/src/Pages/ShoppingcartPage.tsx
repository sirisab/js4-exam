import { useState, useEffect } from 'react';
import { IArtwork } from '../Models/IArtwork';
import { LoadArtworks } from '../Utilities/LoadArtworks';
import { ShoppingcartList } from '../Components/ShoppingcartList';
import { useOutletContext } from 'react-router-dom';

type OutletContextType = {
  updateCartBadge: () => void; // Typen för de props som skickas via Outlet
};

export const ShoppingcartPage = () => {
  const { updateCartBadge } = useOutletContext<OutletContextType>();
  const [cartItems, setCartItems] = useState<IArtwork[]>([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    setCartItems(await LoadArtworks('/shoppingcart'));
  };

  return (
    <div className='shoppingCartContainer'>
      <h3>Varukorg</h3>
      <ShoppingcartList
        cartItems={cartItems}
        updateCartBadge={updateCartBadge}
      />
    </div>
  );
};
