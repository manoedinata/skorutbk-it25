// import css
import './assets/main.css'

import { createApp } from 'vue'
import { configure } from 'vue-gtag'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// Google Analytics
configure({
  tagId: 'G-G41625PYPY',
  pageTracker: {
    router,
  },
})

app.mount('#app')
