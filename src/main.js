import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// Font Awesome 설정
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

library.add(faCommentDots)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
