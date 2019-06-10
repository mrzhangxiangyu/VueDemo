import Vue from 'vue'
import MainContent from './MainContent.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);

new Vue({
  render: h => h(MainContent),
}).$mount('#app')
