import * as config from 'constants/config';

import NotFound from './NotFound';
import MainPage from './MainPage';
import Login from './Login';
import Signup from './Signup';
import ListPage from './ListPage';
import DeviceView from './DeviceView';
import DetailPage from './DetailPage';

export const ROUTE_MAIN_PAGE = '/main';
export const ROUTE_LOGIN = '/login';
export const ROUTE_LOGOUT = '/logout';
export const ROUTE_SIGNUP = '/signup';

export const ROUTE_LIST_BASEROUTE = '/list';
export const ROUTE_LIST = '/list/:name';
export const ROUTE_LIST_TYPE = '/list/:name/:type';

export const ROUTE_DEVIES_DETAIL = '/device_detail/:deviceId';

const DETAIL_ROUTE = Object.keys(config.defaults).map((ob) => {
  return {
    path: `/${ob}_detail/:id`,
    component: DetailPage,
    exact: false,
    header: true,
    ignoreSession: false,
  };
});

export const routes = [
  {
    path: '/',
    component: MainPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_MAIN_PAGE,
    component: MainPage,
    exact: false,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_LOGIN,
    component: Login,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_SIGNUP,
    component: Signup,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_LIST_TYPE,
    component: ListPage,
    exact: false,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_LIST,
    component: ListPage,
    exact: false,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_DEVIES_DETAIL,
    component: DeviceView,
    exact: false,
    header: true,
    ignoreSession: false,
  },
  ...DETAIL_ROUTE,
  {
    component: NotFound,
    header: false,
  },
];
