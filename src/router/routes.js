const routes = [
    {
        path:'/',
        name:'layout',
        component:()=>import('@/layout/index.vue'),
        redirect:'/home',
        children:[
            {
                path:'/home',
                component:()=>import('@/views/home/index.vue'),
                name:'home',
                meta: { title: '首页' ,path:'/home'},
            },
            {
                path: '/test1',
                component: () => import('@/views/test1/index.vue'),
                meta: { title: '一级菜单1' ,path:'/test1'},
                redirect:'/test1/test1-1',
                children:[
                    {
                      path: '/test1/test1-1',
                      component: () => import('@/views/test1/test1-1.vue'),
                      meta: { title: '二级菜单1-1' ,path:'/test1/test1-1'},
                    },
                    {
                      path: '/test1/test1-2',
                      component: () => import('@/views/test1/test1-2.vue'),
                      meta: { title: '二级菜单1-2',path:'/test1/test1-2' },
                    },
                ]
            },
            {
                path: '/test2',
                component: () => import('@/views/test2/index.vue'),
                meta: { title: '一级菜单2' ,path:'/test2'},
                redirect:'/test2/test2-1',
                children:[
                    {
                      path: '/test2/test2-1',
                      component: () => import('@/views/test2/test2-1.vue'),
                      meta: { title: '二级菜单2-1' ,path:'/test2/test2-1'},
                    },
                    {
                      path: '/test2/test2-2',
                      component: () => import('@/views/test2/test2-2.vue'),
                      meta: { title: '二级菜单2-2' ,path:'/test2/test2-2'},
                    },
                ]
            },
            {
                path: '/test3',
                component: () => import('@/views/test3/index.vue'),
                meta: { title: '一级菜单3' ,path:'/test3'},
                redirect:'/test3/test3-1',
                children:[
                    {
                      path: '/test3/test3-1',
                      component: () => import('@/views/test3/test3-1/index.vue'),
                      meta: { title: '二级菜单3-1' ,path:'/test3/test3-1'},
                      redirect:'/test3/test3-1/test3-1-1',
                      children:[
                        {
                          path: '/test3/test3-1/test3-1-1',
                          component: () => import('@/views/test3/test3-1/test3-1-1.vue'),
                          meta: { title: '三级菜单3-1-1',path:'/test3/test3-1/test3-1-1' },
                        },
                        {
                            path: '/test3/test3-1/test3-1-2',
                            component: () => import('@/views/test3/test3-1/test3-1-2.vue'),
                            meta: { title: '三级菜单3-1-2' ,path:'/test3/test3-1/test3-1-2'},
                          },
                      ]
                    },
                    {
                      path: '/test3/test3-2',
                      component: () => import('@/views/test3/test3-2.vue'),
                      meta: { title: '二级菜单3-2',path:'/test3/test3-2' },
                    },
                    {
                      path: '/test3/test3-3',
                      component: () => import('@/views/test3/test3-3.vue'),
                      meta: { title: '二级菜单3-3' ,path:'/test3/test3-3'},
                    },
                    {
                      path: '/test3/test3-4',
                      component: () => import('@/views/test3/test3-4.vue'),
                      meta: { title: '二级菜单3-4',path:'/test3/test3-4' },
                    },
                    {
                      path: '/test3/test3-5',
                      component: () => import('@/views/test3/test3-5.vue'),
                      meta: { title: '二级菜单3-5',path:'/test3/test3-5' },
                    },
                    {
                      path: '/test3/test3-6',
                      component: () => import('@/views/test3/test3-6.vue'),
                      meta: { title: '二级菜单3-6',path:'/test3/test3-6' },
                    },
                ]
            }
        ]
    },
    {
      path: '/login',
      name: 'Login',
      component:()=>import('@/views/login/index.vue'),
    },
  
  ];

  export default routes