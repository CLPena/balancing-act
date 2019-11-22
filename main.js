var popup = document.querySelector('.popup');

popup.addEventListener('click', closePopup);

function closePopup(event) {
    if (event.target.classList.contains('x')) {
    event.target.parentNode.parentNode.remove();
    }
  }
