const DetailHelper = {
  eachFoodsMenu({ foods }) {
    let foodsString = '';
    foods.forEach((food) => {
      foodsString += `<span class="food-item">${food.name}</span>`;
    });
    return foodsString;
  },

  eachDrinksMenu({ drinks }) {
    let drinksString = '';
    drinks.forEach((drink) => {
      drinksString += `<span class="drink-item">${drink.name}</span>`;
    });
    return drinksString;
  },
  eachCustomersReview({ customerReviews }) {
    let customerReviewsString = '';
    customerReviews.forEach((customerReview) => {
      customerReviewsString += `
        <div class="customer-item">
          <span>${customerReview.name}</span> - ${customerReview.date}
          <p>${customerReview.review}</p>
        </div>`;
    });
    return customerReviewsString;
  },
};

export default DetailHelper;
