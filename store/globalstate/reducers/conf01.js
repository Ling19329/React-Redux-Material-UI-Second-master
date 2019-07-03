import { routerReducer as router } from 'react-router-redux';
import { sessionReducer as session } from 'redux-react-session';
import { reducer as idle } from 'modules/idleMonitor';
import global from '../global';

export default {
  router,
  session,
  idle,
  global,
};
