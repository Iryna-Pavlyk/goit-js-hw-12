import { getImages } from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('input[name=message]');
export const gallery = document.querySelector('.image-gallery');
export const loadMoreBtn = document.querySelector('.load-btn');
export const loader = document.querySelector('.loader');
const KEY = '42476589-1f9c9241784e75b96bc1ad3a5';
export let url = 'https://pixabay.com/api/';
let currentUrl = `${url}?key=${KEY}&`;

const request = {
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
};

let page;
let searchParam;
// let totalPage = 0;

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = null;
  loader.classList.remove('is-hidden');
  request.q = input.value;
  page = 1;
  searchParam = new URLSearchParams(request);
  currentUrl = `${currentUrl}${searchParam}&page=${page}`;
  getImages(currentUrl);
});

loadMoreBtn.addEventListener('click', () => {
  page += 1;
  currentUrl = `${currentUrl}${searchParam}&page=${page}`;
  getImages(currentUrl);
});
