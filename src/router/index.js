import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'
import PlayersView from '../views/PlayersView.vue'
import PlayerInfoView from '../views/PlayerInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/players',
      name: 'players',
      component: PlayersView
    },
    {
      path: '/playerInfo',
      name: 'playerInfo',
      component: PlayerInfoView
    }
  ]
})

export default router

