export const fetchData = async (endpoint) => {
  const url = `${process.env.BASE_URL}/${endpoint}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`Det gick fel i fetchData: ${endpoint}`);
    }
  } catch (error) {
    console.log(error);
    throw new Error(`Ett fel inträffade i fetchData: ${endpoint}`);
  }
};
