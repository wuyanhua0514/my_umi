import { fakeAccountLogin as queryUsers } from '@/services/user';

export default {
  namespace: 'user',
  state: {
    permissions: [],
    currentUser: {},
  },

  effects: {
    *me(_, { call, put }) {
      const response = yield call(queryUsers);
      const { data } = response;
      const { userName, role, permissions } = response.data;
      yield put({
        type: 'save',
        payload: data,
      });
    },
  },

  reducers: {
    save(state, action) {
      const { userName, role, permissions } = action.payload;
      return {
        ...state,
        permissions,
        currentUser:
          {
            role: role,
            user_name: userName,
          } || {},
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
  },
};
