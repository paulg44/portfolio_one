// Modal's for project images
const showModals = document.getElementsByClassName('show-modal');
const modalArray = Array.from(showModals).entries();
const modals = document.getElementsByClassName('modal');
const closeModal = document.getElementsByClassName('close-modal');

for (let [index, showModals] of modalArray) {
  const toggleModal = () => {
    modals[index].classList.toggle('hidden');
  };
  showModals.addEventListener('click', toggleModal);
  closeModal[index].addEventListener('click', toggleModal);
}
