import React from 'react';
import RenderAuthorized from 'ant-design-pro/lib/Authorized';
import { getAuthority } from '@/utils/authority';
import Redirect from 'umi/redirect';
import router from 'umi/router';
import Cookies from 'universal-cookie';
import { LocaleProvider } from 'antd';
const Authority = getAuthority();
const Authorized = RenderAuthorized(Authority);
const cookies = new Cookies();
console.log(cookies);
if (!cookies.get('token')) {
  router.push('/user/login');
} else {
  // router.push('/welcome');
}
export default ({ children }) => (
  <LocaleProvider>
    <Authorized authority={children.props.route.authority} noMatch={<Redirect to="/user/login" />}>
      {children}
    </Authorized>
  </LocaleProvider>
);
