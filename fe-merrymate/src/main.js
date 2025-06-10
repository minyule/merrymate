import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import vuetify from './plugins/vuetify'
import router from './router'

createApp(App)
  .use(store)
  .use(vuetify)
  .use(router)
  .mount('#app')
