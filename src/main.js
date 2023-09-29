import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faShoppingCart, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


  
/* add icons to the library */
library.add(faUserSecret, faShoppingCart, faUser,faInstagram)

const router = createRouter({
    history: createWebHistory(),
    routes: [
      // Définissez vos routes ici
    ],
  });

  createApp(App)
  .use(router) // Utilisez le routeur
  .mount('#app');

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
