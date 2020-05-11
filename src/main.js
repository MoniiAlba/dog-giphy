import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import store from './store'


Vue.config.productionTip = false

axios.defaults.baseURL = 'http://api.giphy.com/v1/gifs'

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

