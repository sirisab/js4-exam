import { Outlet } from 'react-router-dom';
import Navbar from '../Components/UI/Navbar';
import Footer from '../Components/UI/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
