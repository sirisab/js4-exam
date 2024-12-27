import { fetchData } from '../utilities/httpClient.mjs';

export const addToShoppingCart = async (req, res) => {
  try {
    const newArticle = req.body;
    const response = await fetchData('shoppingcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    });
    res.status(201).json({ success: true, data: newArticle });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const listCartItems = async (req, res) => {
  try {
    const result = await fetchData('shoppingcart');
    res.status(200).json({ success: true, data: result });
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
