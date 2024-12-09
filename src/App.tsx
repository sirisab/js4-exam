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
import { HomePage } from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/artworks' element={<ArtworksPage />} />
      <Route path='/artworks/:id' element={<ArtworkPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
