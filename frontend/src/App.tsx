import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import './App.css';
import MainLayout from './Layouts/MainLayout';
import { ArtworksPage } from './Pages/ArtworksPage';
import { ArtworkPage } from './Pages/ArtworkPage';
import NotFoundPage from './Pages/NotFoundPage';
import { ShoppingcartPage } from './Pages/ShoppingcartPage';
import { RegisterPage } from './Pages/RegisterPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<ArtworksPage />} />
      <Route path='/artworks' element={<ArtworksPage />} />
      <Route path='/artworks/:id' element={<ArtworkPage />} />
      <Route path='/shoppingcart' element={<ShoppingcartPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
