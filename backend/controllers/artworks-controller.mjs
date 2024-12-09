import { fetchData } from '../utilities/httpClient.mjs';

export const listArtworks = async (req, res) => {
  try {
    const result = await fetchData('artworks');
    res.status(200).json({ success: true, data: result });
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const findArtworks = async (req, res) => {
  const param = req.params.id;

  try {
    const result = await fetchData(`artworks/${param}`);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
