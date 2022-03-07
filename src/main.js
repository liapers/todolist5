import Vue from 'vue'
import App from './App.vue'
import '../src/css/normalize.css'
import '../src/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
