import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faShoppingCart, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faShoppingCart, faUser,faInstagram)

const app = createApp(App)

app.use(router)

app.mount('#app') 