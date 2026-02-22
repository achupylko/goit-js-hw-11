import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', submitHendler);

function submitHendler(event) {
  event.preventDefault();

  const { 'search-text': searchInput } = event.target.elements;
  const query = searchInput.value.trim();

  if (!query) {
    return;
  }

  clearGallery();
  showLoader();

  const response = getImagesByQuery(query);

  response
    .then(data => {
      const images = data.hits;

      if (images.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FFFFFF',
          backgroundColor: '#ef4040',
          position: 'topRight',
          timeout: 3000,
          closeOnClick: true,
          drag: false,
          pauseOnHover: false,
          close: false,
          progressBar: false,
          animateInside: false,
          transitionIn: 'fadeIn',
          transitionOut: 'fadeOut',
          maxWidth: '432px',
        });
        return;
      }

      createGallery(images);
    })
    .catch(error => {
      console.log(error.message);
    })
    .finally(hideLoader);

  form.reset();
}
