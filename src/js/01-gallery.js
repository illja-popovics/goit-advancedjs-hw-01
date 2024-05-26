// 01-gallery.js
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Create gallery items markup
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}).join('');

galleryContainer.innerHTML = galleryMarkup;

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
