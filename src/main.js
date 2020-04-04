import Vue from 'vue'
import App from './App.vue'
import { DeepexiCard, LoadingButton, ListContainer } from 'deep-ui'
import 'deep-ui/lib/theme-chalk/index'
import { Button } from 'element-ui'

Vue.use(Button)
Vue.use(DeepexiCard)
Vue.use(LoadingButton)
Vue.use(ListContainer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
