import dataJSON from '../../DATA.json';

const main = () => {
  const { restaurants } = JSON.parse(JSON.stringify(dataJSON));

  const restaurantElement = document.querySelector('.restaurant-list');

  restaurants.forEach((restaurant) => {
    restaurantElement.innerHTML += `
      <div class="restaurant-item card" data-id="${restaurant.id}" tabindex="0">
          <img class="card-image" src="${restaurant.pictureId}" alt="${restaurant.name} restaurant image."/>
          <div class="card-body">
              <div class="icons">
                  <span aria-label="Rating ${restaurant.rating}."><i class="rating-icon fas fa-star fa-fw"></i> ${restaurant.rating}</span>
                  <span aria-label="Location at ${restaurant.city} City."><i class="location-icon fas fa-map-marker-alt fa-fw"></i> ${restaurant.city}</span>
              </div>
              <h3 class="card-title" aria-label="${restaurant.name} Restaurant.">${restaurant.name}</h3>
              <p class="card-description" aria-label="${restaurant.name} restaurant description. ${restaurant.description}">${restaurant.description}</p>
          </div>
      </div>
    `;
  });

  const menuToggleElement = document.querySelector('#menu-toggle');

  menuToggleElement.addEventListener('click', () => {
    const menuToggleIconElement = document.querySelector('#menu-toggle .icon');
    document.querySelector('.nav-menu').classList.toggle('menu-open');

    const replaced = menuToggleIconElement.classList.replace('fa-bars', 'fa-times');

    if (!replaced) {
      menuToggleIconElement.classList.replace('fa-times', 'fa-bars');
    }
  });

  document.getElementById('fullYear').innerText = new Date().getFullYear();
};

export default main;
