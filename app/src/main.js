import Vue from 'vue'
import app from './App.vue'
import router from './router/router.js'
// element ui
import { Button, Select, Row, Col, Pagination } from 'element-ui';
//axios
import http from "./api";

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Select);
Vue.use(Row);
Vue.use(Col);
Vue.use(Pagination);
//给vue原型添加axios
Vue.prototype.$axios = http;
// Vue.use(Layout);
new Vue({
    router,
    render: h => h(app)
}).$mount('#app')