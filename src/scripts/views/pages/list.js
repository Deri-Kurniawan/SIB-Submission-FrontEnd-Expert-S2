import RestaurantSource from '../../data/restaurant-source';
import createRestaurantItemTemplate from '../templates/template-creator';

const List = {
  async render() {
    return `
      <div class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const { restaurants } = await RestaurantSource.restaurantList();
    const restaurantElement = document.querySelector('.restaurant-list');

    restaurants.forEach((restaurant) => {
      restaurantElement.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default List;
