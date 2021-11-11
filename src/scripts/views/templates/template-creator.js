import API_ENDPOINT from '../../globals/api-endpoint';
import DetailHelper from '../../utils/detail-helper';

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item card" data-id="${restaurant.id}" tabindex="0">
    <img class="card-image" src="${API_ENDPOINT.IMAGE_LARGE(restaurant.pictureId)}" alt="${restaurant.name} restaurant image."/>
    <div class="card-body">
        <div class="icons">
            <span aria-label="Rating ${restaurant.rating}."><i class="rating-icon fas fa-star fa-fw"></i> ${restaurant.rating}</span>
            <span aria-label="Location at ${restaurant.city} City."><i class="location-icon fas fa-map-marker-alt fa-fw"></i> ${restaurant.city}</span>
        </div>
        <h3 class="card-title" aria-label="${restaurant.name} Restaurant.">
          <a class="card-link" href="/#/detail/${restaurant.id}" tabindex="0">${restaurant.name}</a>
        </h3>
        <p class="card-description" aria-label="${restaurant.name} restaurant description. ${restaurant.description}">${restaurant.description}</p>
    </div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="card-detail">
    <img class="card-detail-image" src="${API_ENDPOINT.IMAGE_MEDIUM(restaurant.pictureId)}"/>

    <table>
      <tr>
        <td>Name</td>
        <td>:</td>
        <td>${restaurant.name}</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>:</td>
        <td>
          <i class="location-icon fas fa-map-marker-alt fa-fw"></i>
          ${restaurant.address}
        </td>
      </tr>
      <tr>
        <td>City</td>
        <td>:</td>
        <td>
          <i class="city-icon fas fa-city fa-fw"></i>
          ${restaurant.city}
        </td>
      </tr>
      <tr>
        <td>Description</td>
        <td>:</td>
        <td>${restaurant.description}</td>
      </tr>
      <tr>
        <td>Drinks</td>
        <td>:</td>
        <td>${DetailHelper.eachDrinksMenu(restaurant.menus)}</td>
      </tr>
      <tr>
        <td>Foods</td>
        <td>:</td>
        <td>${DetailHelper.eachFoodsMenu(restaurant.menus)}</td>
      </tr>
    </table>
  </div>

  <h4 class="section-title">Customer Reviews</h4>
  <div class="customer-reviews">
    ${DetailHelper.eachCustomersReview(restaurant)}
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
};
