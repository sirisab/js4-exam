import axios from 'axios';
import { IArtwork } from '../Models/IArtwork';

export const PostToShoppingcart = async (
  endpoint: string
): Promise<IArtwork[]> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const url = `${baseUrl}${endpoint}`;
  const result = await axios.post(`${url}`);

  return result.data.data;
};
