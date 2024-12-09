import axios from 'axios';
import { IArtwork } from '../Models/IArtwork';

export const FindArtwork = async (endpoint: string): Promise<IArtwork> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const url = `${baseUrl}${endpoint}`;
  const result = await axios.get(url);

  return result.data.data;
};
