export const fetchGroceries = async (query) => {
	const response = await fetch(`https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=YOUR_SPOONACULAR_KEY`);
	const data = await response.json();
	return data.results;
};
