import { Outlet } from 'react-router-dom';
import Navbar from '../Components/UI/Navbar';
import Footer from '../Components/UI/Footer';
import { useEffect, useState } from 'react';
import { LoadArtworks } from '../Utilities/LoadArtworks';

const MainLayout = () => {
  const [itemCount, setItemCount] = useState(0);

  const updateCartBadge = async () => {
    const data = await LoadArtworks('/shoppingcart');

    setItemCount(data.length);
  };

  useEffect(() => {
    updateCartBadge();

    const interval = setInterval(updateCartBadge, 10000);

    return () => clearInterval(interval);
  }, ['/shoppingcart']);

  return (
    <div id='root'>
      <Navbar itemCount={itemCount} />
      <main>
        <section>
          <Outlet context={{ updateCartBadge }} />
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
