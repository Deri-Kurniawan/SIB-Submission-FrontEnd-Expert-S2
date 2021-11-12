import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    const restaurants = await fetch(API_ENDPOINT.LIST);
    const responseJson = await restaurants.json();
    return responseJson;
  }

  static async restaurantDetail(id) {
    const restaurant = await fetch(API_ENDPOINT.DETAIL(id));
    return restaurant.json();
  }

  static async searchRestaurant(keyword) {
    const restaurant = await fetch(API_ENDPOINT.SEARCH(keyword));
    return restaurant.json();
  }

  static async addCustomerReview({ id, name, review }) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id, name, review,
      }),
    };

    const responseText = await fetch(API_ENDPOINT.ADD_REVIEW, options);
    return responseText.json();
  }
}

export default RestaurantSource;
