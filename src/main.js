import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'


import './assets/font_2909169_eswlq380dw6/iconfont.css'

import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
import 'animate.css'

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
