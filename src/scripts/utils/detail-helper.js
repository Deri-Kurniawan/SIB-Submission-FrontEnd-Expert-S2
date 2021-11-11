const DetailHelper = {
  eachFoodsMenu({ foods }) {
    let foodsString = '';
    foods.forEach((food) => {
      foodsString += `
      <span class="food-item">
        <a href="https://google.com/search?q=Makanan ${food.name} adalah" target="_blank" rel=”noreferrer” title="Apa itu Makanan ${food.name}?">${food.name}</a>
      </span>`;
    });
    return foodsString;
  },

  eachDrinksMenu({ drinks }) {
    let drinksString = '';
    drinks.forEach((drink) => {
      drinksString += `
      <span class="drink-item">
        <a href="https://google.com/search?q=Minuman ${drink.name} adalah" target="_blank" rel=”noreferrer” title="Apa itu Minuman ${drink.name}?">${drink.name}</a>
      </span>`;
    });
    return drinksString;
  },
  eachCustomersReview({ customerReviews }) {
    let customerReviewsString = '';
    customerReviews.forEach((customerReview) => {
      customerReviewsString += `
        <div class="customer-review-item">
          <span>${customerReview.name}</span> - ${customerReview.date}
          <p>${customerReview.review}</p>
        </div>`;
    });
    return customerReviewsString;
  },
};

export default DetailHelper;
