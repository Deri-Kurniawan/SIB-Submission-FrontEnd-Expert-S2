import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="restaurant-favorite"></div>
    `;
  },

  async afterRender() {
    const { restaurants } = await RestaurantSource.restaurantList();
    const restaurantFavoriteElement = document.querySelector('.restaurant-favorite');
    const pageTitleElement = document.querySelector('#pageTitle');

    restaurants.forEach((restaurant) => {
      restaurantFavoriteElement.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    pageTitleElement.innerHTML = 'Favorite Restaurants';
  },
};

export default Favorite;
