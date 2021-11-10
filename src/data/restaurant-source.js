import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    const restaurants = await fetch(API_ENDPOINT.LIST);
    const responseJson = await restaurants.json();
    return responseJson;
  }

  static async restaurantDetail(keyword) {
    const restaurant = await fetch(API_ENDPOINT.DETAIL(keyword));
    return restaurant.json();
  }

  static async searchRestaurant(keyword) {
    const restaurant = await fetch(API_ENDPOINT.SEARCH(keyword));
    return restaurant.json();
  }

  static async reviewRestaurant({ id, name, review }) {
    fetch(API_ENDPOINT.REVIEW(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    });
  }
}

export default RestaurantSource;
