import Vue from 'vue'
import App from './App.vue'
import DeepUi from 'deep-ui'
import 'deep-ui/lib/theme-chalk/index'
import { Button } from 'element-ui'

Vue.use(Button)
Vue.use(DeepUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
