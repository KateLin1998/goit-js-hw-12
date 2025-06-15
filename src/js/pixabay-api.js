import axios from 'axios';

export async function getPictures(searchStr, params) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '43977888-797e6fb137e01a7a14a4faad2';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchStr.replace(/\s+/g, '+'),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: params.currentPage,
    per_page: params.per_page,
  });

  try {
    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.statusText);
  }
}