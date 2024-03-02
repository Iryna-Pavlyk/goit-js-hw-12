import octagon from '../img/octagon.png';
import { gallery, request, page, loadMoreBtn, loader, input } from '../main';
import { createMarkup } from '../js/pixabay-api';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const select = {
  captionsData: 'alt',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('.image-gallery a', select);
let totalPages = 0;

export async function getImages(link) {
  await axios
    .get(link)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          backgroundColor: '#ef4040',
          theme: 'dark',
          iconUrl: octagon,
          iconColor: '#fafafb',
          messageSize: '16',
          closeOnEscape: true,
          maxWidth: '432',
          position: 'topRight',
        });

        gallery.innerHTML = '';
        return;
      }

      totalPages = Math.ceil(data.totalHits / request.per_page);

      if (page === totalPages) {
        iziToast.info({
          message: 'Sorry, there are no images',
          messageColor: '#fafafb',
          backgroundColor: '#2e2f42',
          theme: 'dark',
          messageSize: '16',
          closeOnEscape: true,
          maxWidth: '432',
          position: 'topRight',
        });

        loadMoreBtn.classList.add('is-hidden');
        return;
      }

      createMarkup(data);

      const scrollHight = gallery.getBoundingClientRect().height;

      window.scrollBy({
        top: scrollHight,
        behavior: 'smooth',
      });

      return lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('is-hidden');
      input.value = '';
    });
}
