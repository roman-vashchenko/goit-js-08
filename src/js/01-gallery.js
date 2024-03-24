import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
  </a>
</li>`
    )
    .join('');
}

gallery.innerHTML = createGalleryMarkup(galleryItems);

new SimpleLightbox('.gallery a', { captionDelay: 250 });
