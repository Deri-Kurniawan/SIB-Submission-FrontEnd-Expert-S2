import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, icon, drawer, content,
  }) {
    this._button = button;
    this._icon = icon;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  async _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      icon: this._icon,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
