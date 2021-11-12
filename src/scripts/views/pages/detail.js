import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import CustomerReviewInitiator from '../../utils/customer-review-initiator';

const Detail = {
  async render() {
    return `
    <div class="restaurant-detail"></div>
    <div id="customerReviewContainer"></div>
    <div id="favoriteButtonContainer"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.restaurantDetail(url.id);
    const restaurantDetailElement = document.querySelector('.restaurant-detail');
    const pageTitleElement = document.querySelector('#pageTitle');

    restaurantDetailElement.innerHTML = createRestaurantDetailTemplate(restaurant);
    pageTitleElement.innerHTML = 'Restaurant Detail';

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant,
    });

    CustomerReviewInitiator.init({
      customerReviewContainer: document.querySelector('#customerReviewContainer'),
    });
  },
};

export default Detail;
