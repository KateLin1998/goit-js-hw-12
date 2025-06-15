import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/loader.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;
export function clearGallery() {
  gallery.innerHTML = '';
}
export function renderImages(images) {
  if (!gallery) {
    console.error('Gallery element not found!');
    return;
  }

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags = 'No description',
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><strong>Likes:</strong> ${likes}</p>
            <p><strong>Views:</strong> ${views}</p>
            <p><strong>Comments:</strong> ${comments}</p>
            <p><strong>Downloads:</strong> ${downloads}</p>
          </div>
        </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}

export function showLoader() {
  if (loader) {
    loader.style.display = 'block';
  }
}
export function hideLoader() {
  setTimeout(() => {
    if (loader) {
      loader.style.display = 'none';
      console.log('Loader hidden');
    }
  }, 500);
}
console.log(loader);
export function showError(message) {
  iziToast.error({ title: 'Error', message });
}