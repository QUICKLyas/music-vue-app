import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
// import "@vant/touch-emulator";
// import "amfe-flexible";
// import qs from 'qs'
// import Fastclick from 'fastclick'
// import {Button} from 'vant'

// Vue.config.productionTip = false
// Vue.prototype.qs = qs

// new Vue ({
//     router,store,render: h=>h(App)
// }).$mount("#app")
createApp(App).use(pinia).use(router).mount('#app')
