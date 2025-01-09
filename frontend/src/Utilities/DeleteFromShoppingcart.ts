import axios from 'axios';

export const DeleteFromShoppingcart = async (id: number) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      'VITE_BASE_URL is not defined in the environment variables'
    );
  }
  const url = `${baseUrl}/shoppingcart/${id}`;
  try {
    const response = await axios.delete(url, {
      data: { id },
    });
    return response.data.data;
  } catch (error: any) {
    console.error(
      'Error deleting from shopping cart:',
      error.response?.data || error.message
    );
    throw error;
  }
};
