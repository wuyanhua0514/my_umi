import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { fakeAccountLogin, accountlogout } from '@/services/user';
import { clearAuthority, setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // // Login successfully
      // if (response.status === 'ok') {
      reloadAuthorized();
      const urlParams = new URL(window.location.href);
      const params = getPageQuery();
      // console.log(params)
      // alert(1)
      let { redirect } = params;
      if (redirect) {
        const redirectUrlParams = new URL(redirect);
        if (redirectUrlParams.origin === urlParams.origin) {
          redirect = redirect.substr(urlParams.origin.length);
          if (redirect.match(/^\/.*#/)) {
            redirect = redirect.substr(redirect.indexOf('#') + 1);
          }
        } else {
          window.location.href = redirect;
          return;
        }
      }
      yield put(routerRedux.replace(redirect || '/'));
      // }
    },
    *logout(_, { call, put }) {
      const response = yield call(accountlogout);
      if (response.error_code == 0) {
        const prefix =
          location.host.includes('test') || location.host.includes('localhost') ? 'test.' : '';
        clearAuthority();
        window.location.href = location.hostname;
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.data.permissions);
      return {
        status: payload.data.error_code,
        ...payload.data,
      };
    },
  },
};
