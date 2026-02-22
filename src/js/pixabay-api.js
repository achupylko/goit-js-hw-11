import axios from 'axios';

const API_KEY = '54679723-82f3546e98f06279d87186197';

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
      console.log(error);
    });
}

export default getImagesByQuery;
