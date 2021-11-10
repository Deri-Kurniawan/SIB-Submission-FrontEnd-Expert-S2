import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu-toggle'),
  drawer: document.querySelector('.nav-menu'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('haschange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
