const thumbs = document.querySelectorAll('.portfolio__card > img');
const modal = document.getElementById('modal');

const showModal = (ev) => {
  const clone = ev.target.cloneNode()
  modal.appendChild(clone);
  modal.showModal();
}

const hideModal = (ev) => {
  modal.removeChild(modal.children[0]);
  modal.close();
}

modal.addEventListener('click', hideModal);
thumbs.forEach((element) => element.addEventListener('click', showModal))