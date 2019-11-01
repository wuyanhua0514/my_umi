import request from '@/utils/request';

/**
 *
 *用户本身权限
 * @export
 * @param {*} params
 * @returns
 */
async function fakeAccountLogin(params) {
  return request('/permission/me');
}

/**
 *登出
 *
 * @export
 * @returns
 */
async function accountlogout() {
  return request('/logout',{
    method:'POST'
  });
}
export { accountlogout, fakeAccountLogin };

