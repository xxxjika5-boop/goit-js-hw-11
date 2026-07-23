import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import './css/loader.css';


import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const formEl = document.querySelector('.form');
const inputEl = formEl.elements['search-text'];

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const query = inputEl.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();

if (!data.hits || data.hits.length === 0) {

    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });

    return;
}




      createGallery(data.hits);
    })
    .catch(() => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    });

  // 🟢 ОЧИЩАЄМО ІНПУТ ПІСЛЯ ПОШУКУ
  formEl.reset();
  inputEl.focus();
}