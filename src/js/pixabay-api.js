import axios from 'axios';

const API_KEY = '49334882-a9a3b11390859b17c4f434c49';

console.log('API KEY:', API_KEY);

const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page, perPage) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Request error:', error);
    throw error;
  }
}