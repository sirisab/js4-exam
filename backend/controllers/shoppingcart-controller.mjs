import { fetchData } from '../utilities/httpClient.mjs';

export const addToShoppingcart = async (req, res) => {
  try {
    const newArticle = req.body;

    const response = await fetchData('shoppingcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    });

    res.status(201).json({
      success: true,
      message: 'Item added to shopping cart',
      data: req.body,
    });
  } catch (error) {
    console.error('Error occurred:', error);

    res.status(500).json({ success: false, message: error });
  }
};

export const deleteFromShoppingcart = async (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ success: false, message: 'Invalid ID' });
  }

  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: 'ID saknas i request-bodyn' });
  }

  try {
    await fetchData(`shoppingcart/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const updatedData = await fetchData('shoppingcart');
    res.status(200).json({ success: true, data: updatedData });
    return;
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
