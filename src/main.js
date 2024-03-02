import { getImages } from './js/render-functions';

const form = document.querySelector('.form');
export const input = document.querySelector('input[name=message]');
export const gallery = document.querySelector('.image-gallery');
export const loadMoreBtn = document.querySelector('.load-btn');
export const loader = document.querySelector('.loader');
const KEY = '42476589-1f9c9241784e75b96bc1ad3a5';

export const request = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
});

export let page;
let inputValue;
let currentUrl = `https://pixabay.com/api/?key=${KEY}&${request}`;

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = null;
  loader.classList.remove('is-hidden');
  loadMoreBtn.classList.add('is-hidden');
  inputValue = input.value;
  page = 1;
  currentUrl = `${currentUrl}&q=${input.value}&page=${page}`;
  getImages(currentUrl);
});

loadMoreBtn.addEventListener('click', () => {
  page += 1;
  currentUrl = `${currentUrl}&q=${inputValue}&page=${page}`;
  getImages(currentUrl);
});
