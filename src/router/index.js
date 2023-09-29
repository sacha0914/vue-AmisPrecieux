import { createRouter, createWebHistory } from 'vue-router';
import Game from '../game'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/game',
        component: Game, // Importez votre composant
      },
      {
        path: '/about',
        component: About,
      },
      // Ajoutez d'autres routes ici
    ],
  });
  

  export default router;