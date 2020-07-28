import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './../src/store'
// import viewUI from 'view-design'
import './index.css'

// import 'view-design/dist/styles/iview.css'
import './../public/css/common.scss'

// Vue.use(viewUI);

// createApp(App).mount('#app')

const app = createApp(App)

// app.use(store)
app.use(router)
app.mount('#app')