import List from '../views/pages/list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': List,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
