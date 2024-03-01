import { getImages } from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('input[name=message]');
export const gallery = document.querySelector('.image-gallery');
export const loadMoreBtn = document.querySelector('.load-btn');
export const loader = document.querySelector('.loader');

const request = {
  key: '42476589-1f9c9241784e75b96bc1ad3a5',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
};

export let url = 'https://pixabay.com/api/?';
let currentUrl = '';
let page;
// let totalPage = 0;

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = null;
  // gallery.innerHTML = '<span class="loader"></span>';
  request.q = input.value;
  page = 1;
  currentUrl = url + new URLSearchParams(request) + `&page=${page}`;
  console.log(currentUrl);
  // input.value = '';
  getImages(currentUrl);
});

loadMoreBtn.addEventListener('click', () => {
  page += 1;
  currentUrl = url + new URLSearchParams(request) + `&page=${page}`;
  getImages(currentUrl);
});
