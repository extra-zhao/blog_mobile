// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible/flexible.js'

// import hljs from 'highlight.js';
// import 'highlight.js/styles/atom-one-dark.css'	//样式

import "./assets/icon/iconfont.css"
import './components'
import store from './vuex/store'



Vue.use(Vuex)
// Vue.use(ElementUI)
Vue.use(Vant)
Vue.config.productionTip = false


// Vue.directive('highlight',function (el) {
//     let blocks = el.querySelectorAll('pre code');
//     blocks.forEach((block)=>{
//         hljs.highlightBlock(block)
//     })
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


/*路由守卫*/
router.beforeEach((to, from, next) => {
    // if (to.meta.login) {
    //
    // }
    // }else{
    next();
    // }
})