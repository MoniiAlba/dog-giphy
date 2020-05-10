import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'


Vue.config.productionTip = false
process.env.GIFKEY = 'XW1HTpw6EWg9S4z8EYwbMoBy1lUOfc5o';

axios.defaults.baseURL = 'http://api.giphy.com/v1/gifs'

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

