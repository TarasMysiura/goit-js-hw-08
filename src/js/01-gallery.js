// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);
const listImg = document.querySelector('.gallery');

listImg.style['list-style'] = 'none';

listImg.insertAdjacentHTML('beforeend', createListImg(galleryItems));

function createListImg() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item" ;>
            <a class="gallery__link" href="${original}">
            <img class="gallery__image"
                src="${preview}" 
                alt="${description}" />
            </a></li>`;
    })
    .join('');
}

const galleryLightBox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
