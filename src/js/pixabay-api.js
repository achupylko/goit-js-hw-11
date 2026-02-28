import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_KEY;

function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

export default getImagesByQuery;
