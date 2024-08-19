import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { pictures } from './gallery_array';

const createGalleryCardTemplate = pictureInfo => {
  return `
   <li class="gallery__item">
    <a class="gallery__link" href="${pictureInfo.bannerUrl}">
      <img src="${pictureInfo.url}" alt="${pictureInfo.alt}" width="${pictureInfo.width}" height="${pictureInfo.height}"/>
    </a>
  </li>  `;
};

const galleryCardTemplate = pictures
  .map(imgInfo => createGalleryCardTemplate(imgInfo))
  .join('');

const galleryEl = document.querySelector('.js-gallery');

galleryEl.innerHTML = galleryCardTemplate;

const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
});
