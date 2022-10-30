document.querySelector('.load-btn').addEventListener('click', async (evt) => {
  evt.target.disabled = true;

  const {imageLink, name, city, country, postcode} = await loadRandomPerson();
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img class="card-image" src="${imageLink}" alt="card-image">
    <div class="card-entry">Name:&nbsp;<span>${name}</span></div>
    <div class="card-entry">City:&nbsp;<span>${city}</span></div>
    <div class="card-entry">Country:&nbsp;<span>${country}</span></div>
    <div class="card-entry">Postcode:&nbsp;<span>${postcode}</span></div>
  `
  document.querySelector('.cards').append(card);

  evt.target.disabled = false;
});

async function loadRandomPerson() {
  const response = await fetch('https://randomuser.me/api/');
  const {results: [person]} = await response.json();
  return {
    imageLink: person.picture.large,
    name: `${person.name.first} ${person.name.last}`,
    city: person.location.city,
    country: person.location.country,
    postcode: person.location.postcode
  };
}
