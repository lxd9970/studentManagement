import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
Vue.component('chart', ECharts)


import Axios from 'axios'
Vue.prototype.$axios = Axios;
// axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = apiConfig.baseUrl; // 配置接口地址
// axios.defaults.withCredentials = false;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
    Axios,
    router,
    render: h => h(App)
}).$mount('#app')