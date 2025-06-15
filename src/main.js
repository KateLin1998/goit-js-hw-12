import { fetchImages } from './js/pixabay-api';
import {
  renderImages,
  showLoader,
  hideLoader,
  showError,
  clearGallery,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
let query = '';
let page = 1;
const perPage = 15;

document.addEventListener('DOMContentLoaded', () => {
  hideLoader();
  loadMoreBtn.style.display = 'none';
});

form.addEventListener('submit', async event => {
  event.preventDefault();
  const newQuery = event.target.elements['search-text'].value.trim();

  if (!newQuery) {
    showError('Enter search query');
    return;
  }

  if (newQuery !== query) {
    query = newQuery;
    page = 1;
    clearGallery();
  }
  showLoader();
  loadMoreBtn.style.display = 'none';

  try {
    const images = await fetchImages(query, page, perPage);

    if (images.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderImages(images);
      loadMoreBtn.style.display = 'block';
    }
  } catch (error) {
    showError('Something went wrong. Please try again!');
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const images = await fetchImages(query, page, perPage);

    if (images.length === 0) {
      loadMoreBtn.style.display = 'none';
      showError("We're sorry, but you've reached the end of search results.");
    } else {
      renderImages(images);
      smoothScroll();

      if (images.length < perPage) {
        loadMoreBtn.style.display = 'none';
        showError("We're sorry, but you've reached the end of search results.");
      }
    }
  } catch (error) {
    showError('Something went wrong. Please try again!');
  } finally {
    hideLoader();
  }
});

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const cardHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}