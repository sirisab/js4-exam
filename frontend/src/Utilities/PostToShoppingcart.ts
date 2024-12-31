import axios from 'axios';
import { IArtwork } from '../Models/IArtwork';

export const PostToShoppingcart = async (item: IArtwork): Promise<IArtwork> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log('Posting to /api/shoppingcart');
  console.log('Item being posted:', item); // Logga objektet du skickar

  if (!baseUrl) {
    throw new Error(
      'VITE_BASE_URL is not defined in the environment variables'
    );
  }
  const url = `${baseUrl}/shoppingcart`;

  try {
    const response = await axios.post<{ data: IArtwork }>(url, item);
    console.log('Response from API:', response.data);
    return response.data.data;
  } catch (error: any) {
    console.error(
      'Error posting to shopping cart:',
      error.response?.data || error.message
    );
    throw error;
  }
};