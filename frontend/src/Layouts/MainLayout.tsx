import { Outlet } from 'react-router-dom';
import Navbar from '../Components/UI/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
};
export default MainLayout;
