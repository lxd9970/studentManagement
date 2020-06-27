import Vue from 'vue'
import App from './App.vue'


import router from './router'


import Axios from 'axios'
Vue.prototype.$axios = Axios;


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
    Axios,
    router,
    render: h => h(App)
}).$mount('#app')