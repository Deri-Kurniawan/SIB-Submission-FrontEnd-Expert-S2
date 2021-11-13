import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.css';
import '../styles/responsive.css';

import './components/app-bar';
import './components/hero-image';
import './components/skip-to-content';
import './components/footer-copyright';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu-toggle'),
  drawer: document.querySelector('.nav-menu'),
  content: document.querySelector('#mainContent'),
},
{
  skipButton: document.querySelector('.skip-link'),
  skipTarget: document.getElementById('mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
