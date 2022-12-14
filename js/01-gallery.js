import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainerEl.addEventListener('click', onGalleryItemClick);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`;
    })
    .join('');
}

function onGalleryItemClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  const instance = basicLightbox.create(
    `
        <img src="${event.target.dataset.source}" width="800">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscBtnClick);
      },

      onClose: instance => {
        window.removeEventListener('keydown', onEscBtnClick);
      },
    }
  );

  instance.show();

  function onEscBtnClick(event) {
    if (event.code === 'ESCAPE') {
      return;
    }

    instance.close();
  }
}
