import * as Frontends from '../frontends';
import Dashboard from './features/dashboard/Dashboard';

const routes = Object.values(Frontends).reduce(
  (acc, value) => {
    value.forEach((route) => {
      acc.push({name: route.route, component: route.component});
    });
    return acc;
  },
  [{name: 'Dashboard', component: Dashboard}],
);

export default routes;
