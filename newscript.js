const closemodal = document.querySelector('.close-modal');
const openmodal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const x = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const y = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < openmodal.length; i++)
  openmodal[i].addEventListener('click', x);
closemodal.addEventListener('click', y);
overlay.addEventListener('click', y);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    y();
  }
});
