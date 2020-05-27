import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: resolve => require(['@pages/index/index'], resolve),
            meta:{
                navBar:{
                    back_arrow:false,
                    title:"首页"
                }
            }
        },
        {
            path: '/archive',
            name: 'archive',
            component: resolve => require(['@pages/archive/index'], resolve),
            meta:{
                navBar:{
                    back_arrow:false,
                    title:"归档"
                }
            }
        },
        {
            path: '/dynamic',
            name: 'dynamic',
            component: resolve => require(['@pages/dynamic/index'], resolve),
            meta:{
                navBar:{
                    back_arrow:false,
                    title:"动态"
                }
            }
        },
        {
            path: '/share',
            name: 'share',
            component: resolve => require(['@pages/share/index'], resolve),
            meta:{
                navBar:{
                    back_arrow:false,
                    title:"分享"
                }
            }
        },
        {
            path: '/about',
            name: 'about',
            component: resolve => require(['@pages/about/index'], resolve),
            meta:{
                navBar:{
                    back_arrow:false,
                    title:"关于"
                }
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: resolve => require(['@pages/detail/index'], resolve),
            meta:{
                navBar:{
                    back_arrow:false,
                    title:"详情"
                }
            }
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            // 前进后退
            return savedPosition
        } else {
            // 如果不是通过上述行为切换组件，就会让页面回到顶部
            return {x: 0, y: 0}
        }
    }
})
