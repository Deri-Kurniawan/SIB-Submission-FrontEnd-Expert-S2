import RestaurantSource from '../../data/restaurant-source';
import createRestaurantItemTemplate from '../../templates/template-creator';

const main = async () => {
  const { restaurants } = await RestaurantSource.restaurantList();
  const restaurantElement = document.querySelector('.restaurant-list');

  restaurants.forEach((restaurant) => {
    restaurantElement.innerHTML += createRestaurantItemTemplate(restaurant);
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
