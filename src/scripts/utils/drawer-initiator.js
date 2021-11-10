const DrawerInitiator = {
  init({
    button,
    icon,
    drawer,
    content,
  }) {
    button.addEventListener('click', (event) => {
      this._iconChanger(event, icon);
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._iconChanger(event, icon);
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

  _iconChanger(event, icon) {
    event.stopPropagation();
    const replacedStatus = icon.classList.replace('fa-bars', 'fa-times');
    if (!replacedStatus) {
      icon.classList.replace('fa-times', 'fa-bars');
    }
  },
};

export default DrawerInitiator;
