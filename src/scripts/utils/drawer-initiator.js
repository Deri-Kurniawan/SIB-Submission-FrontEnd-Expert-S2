const DrawerInitiator = {
  init({
    button,
    drawer,
    content,
  }) {
    button.addEventListener('click', (event) => {
      this._iconChanger();
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._iconChanger();
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('menu-open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('menu-open');
  },

  _iconChanger() {
    const menuToggleIconElement = document.querySelector('#menu-toggle .icon');

    const replaced = menuToggleIconElement.classList.replace('fa-bars', 'fa-times');

    if (!replaced) {
      menuToggleIconElement.classList.replace('fa-times', 'fa-bars');
    }
  },
};

export default DrawerInitiator;
