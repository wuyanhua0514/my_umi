const Routes= [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    // {
    //   path: '/',
    //   component: '../layouts/SecurityLayout',
    //   routes: [
    //     {
    //       path: '/',
    //       component: '../layouts/BasicLayout',
    //       authority: ['admin', 'user'],
    //       routes: [
    //         {
    //           path: '/',
    //           redirect: '/welcome',
    //         },
    //         {
    //           path: '/welcome',
    //           name: 'welcome',
    //           icon: 'smile',
    //           component: './Welcome',
    //         },
    //         {
    //           component: './404',
    //         },
    //       ],
    //     },
    //     {
    //       component: './404',
    //     },
    //   ],
    // },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      Routes: ['src/pages/Authorized'],
      routes: [
        {
          path: '/',
          redirect: '/welcome',
        },
        {
          path: '/welcome',
          name: 'welcome',
          icon: 'smile',
          component: './Welcome',
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
    {
      component: './404',
    },
  ]

  export default Routes;