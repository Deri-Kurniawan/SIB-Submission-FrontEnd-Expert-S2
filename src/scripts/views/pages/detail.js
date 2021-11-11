import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return '<div class="restaurant-detail"></div>';
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.restaurantDetail(url.id);
    const restaurantDetailElement = document.querySelector('.restaurant-detail');
    const pageTitleElement = document.querySelector('#pageTitle');

    restaurantDetailElement.innerHTML = createRestaurantDetailTemplate(restaurant);
    pageTitleElement.innerHTML = 'Restaurant Detail';
  },
};

export default Detail;
