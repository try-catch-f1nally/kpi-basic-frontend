const ffffffInDecimal = 15 + 15 * 16 + 15 * 16 ** 2 + 15 * 16 ** 3 + 15 * 16 ** 4 + 15 * 16 ** 5;

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * ffffffInDecimal).toString(16);
}

function setRandomBackgroundAndTextColor(elem) {
  elem.style.background = getRandomHexColor();
  elem.style.color = getRandomHexColor();
}

document.getElementById('change-background')?.addEventListener(
  'click', event => setRandomBackgroundAndTextColor(event.currentTarget)
);

document.querySelector('.change-background')?.addEventListener(
  'click', event => setRandomBackgroundAndTextColor(event.currentTarget)
);

const managedImgFigure = document.getElementById('managed-img');
const addImgBtn = document.getElementById('add-img');
const enlargeImgBtn = document.getElementById('enlarge-img');
const shrinkImgBtn = document.getElementById('shrink-img');
const removeImgBtn = document.getElementById('remove-img');

addImgBtn?.addEventListener('click', addImg);
enlargeImgBtn?.addEventListener('click', enlargeImg);
shrinkImgBtn?.addEventListener('click', shrinkImg);
removeImgBtn?.addEventListener('click', removeImg);

function addImg() {
  addImgBtn.disabled = true;
  enlargeImgBtn.disabled = false;
  shrinkImgBtn.disabled = false;
  removeImgBtn.disabled = false;

  const imgElem = document.createElement('img');
  imgElem.src = './img/web-programming-languages.webp';
  managedImgFigure.appendChild(imgElem);
}

function removeImg() {
  addImgBtn.disabled = false;
  enlargeImgBtn.disabled = true;
  shrinkImgBtn.disabled = true;
  removeImgBtn.disalbed = true;
  managedImgFigure.querySelector('img')?.remove()
}

function enlargeImg() {
  const imgElem = managedImgFigure.querySelector('img');
  if (parseInt(imgElem.style.width) > 1000) {
    enlargeImgBtn.disabled = true;
  }
  imgElem.style.width = imgElem.width + 20 + 'px';
  imgElem.style.height = imgElem.height + 20 + 'px';
  shrinkImgBtn.disabled = false;
}

function shrinkImg() {
  const imgElem = managedImgFigure.querySelector('img');
  if (parseInt(imgElem.style.width) < 50) {
    shrinkImgBtn.disabled = true;
  }
  imgElem.style.width = imgElem.width - 20 + 'px';
  imgElem.style.height = imgElem.height - 20 + 'px';
  enlargeImgBtn.disabled = false;
}
