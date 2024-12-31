export const fetchData = async (endpoint, options = {}) => {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error('BASE_URL är inte definierad i miljövariabeln.');
  }

  const url = `${process.env.BASE_URL}/${endpoint}`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      console.log(
        `Error in fetchData: ${response.status} ${response.statusText}`
      );

      throw new Error(
        `Det gick fel i fetchData för URL: ${url}, status: ${response.status}, ${response.statusText}`
      );
    }

    if (response.status !== 204) {
      const result = await response.json();
      return result;
    }

    return null;
  } catch (error) {
    console.error('Ett fel inträffade i fetchData:', error.mesage);
    throw new Error(
      `Ett fel inträffade i fetchData: ${endpoint} - ${error.message}`
    );
  }
};
