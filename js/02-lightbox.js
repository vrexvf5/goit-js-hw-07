import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
