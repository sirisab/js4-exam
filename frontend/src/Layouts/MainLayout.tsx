import { Outlet } from 'react-router-dom';
import Navbar from '../Components/UI/Navbar';
import Footer from '../Components/UI/Footer';

const MainLayout = () => {
  return (
    <div id='root2'>
      <Navbar />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
