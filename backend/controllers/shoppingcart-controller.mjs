export const addToShoppingCart = async (req, res) => {
  const newArticle = req.body;
  const response = await fetch('http://localhost:3000/shoppingcart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newArticle),
  });
  res.status(201).json({ success: true, data: newArticle });
};
