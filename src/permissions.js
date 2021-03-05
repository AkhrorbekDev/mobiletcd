import { Notification } from 'element-ui';
import router from './router/index';
import { getToken } from './utils/auth'; // get token from cookie
import store from './store/index';

router.beforeEach(async (to, from, next) => {
  // determine whether the user has logged in
  const hasToken = (store.getters.token != null) ? store.getters.token : getToken();
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' });
    } else {

      next();

    }
  } else {
    /* has no token */
    if (to.path === '/login') {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
    }
  }
});

router.afterEach(() => {
  // finish progress bar
});
