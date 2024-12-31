import axios from 'axios';

export const DeleteFromShoppingcart = async (id: number) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log('Deleteing from /api/shoppingcart');
  console.log('Item being deleted:', id); // Logga objektet du skickar

  if (!baseUrl) {
    throw new Error(
      'VITE_BASE_URL is not defined in the environment variables'
    );
  }
  const url = `${baseUrl}/shoppingcart/${id}`;
  console.log(`url: ${url}`);
  try {
    const response = await axios.delete(url, {
      data: { id },
    });
    console.log('Response from API:', response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.error(
      'Error deleting from shopping cart:',
      error.response?.data || error.message
    );
    throw error;
  }
};
