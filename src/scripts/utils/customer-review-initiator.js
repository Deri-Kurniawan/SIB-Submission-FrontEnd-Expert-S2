import API_ENDPOINT from '../globals/api-endpoint';
import UrlParser from '../routes/url-parser';
import { createRestaurantFormReviewTemplate } from '../views/templates/template-creator';

const CustomerReviewInitiator = {
  init({ customerReviewContainer }) {
    this._customerReviewContainer = customerReviewContainer;
    this._renderForm();
  },

  _renderForm() {
    this._customerReviewContainer.innerHTML = createRestaurantFormReviewTemplate();
    const reviewFormElement = document.querySelector('#reviewForm');
    reviewFormElement.addEventListener('submit', (e) => {
      e.preventDefault();
      this._isFormSubmitted(e);
    });
  },

  _isFormSubmitted() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');

    this._makeRequest({ id: url.id, name: inputName.value, review: inputReview.value });
  },

  async _makeRequest({ id, name, review }) {
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
    const responseJson = await responseText.json();
    if (!responseJson.error) {
      alert('Review has been added!');
    }
  },
};

export default CustomerReviewInitiator;
