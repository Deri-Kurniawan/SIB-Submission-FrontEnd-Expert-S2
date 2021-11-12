import API_ENDPOINT from '../globals/api-endpoint';
import UrlParser from '../routes/url-parser';
import { createCustomerReviewTemplate, createRestaurantFormReviewTemplate } from '../views/templates/template-creator';
import DateHelper from './date-helper';

const CustomerReviewInitiator = {
  init({ customerReviewContainer, customerFormReviewContainer }) {
    this._customerReviewContainer = customerReviewContainer;
    this._customerFormReviewContainer = customerFormReviewContainer;
    this._renderForm();
  },

  _renderForm() {
    this._customerFormReviewContainer.innerHTML = createRestaurantFormReviewTemplate();
    this._isFormSubmitted();
  },

  _isFormSubmitted() {
    const reviewFormElement = document.querySelector('#reviewForm');
    reviewFormElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const inputName = document.querySelector('#inputName');
      const inputReview = document.querySelector('#inputReview');

      this._makeRequest({ id: url.id, name: inputName.value, review: inputReview.value });

      inputName.value = '';
      inputReview.value = '';
    });
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
    const date = new Date();

    if (!responseJson.error) {
      this._customerReviewContainer.innerHTML += createCustomerReviewTemplate({
        id,
        name,
        review,
        date: `
        ${date.getDay()} ${DateHelper.monthNameChecker(date.getMonth())} ${date.getFullYear()}
        `,
      });
      alert('Review has been successfuly added!');
    } else {
      alert('Failed to add review!');
    }
  },
};

export default CustomerReviewInitiator;
