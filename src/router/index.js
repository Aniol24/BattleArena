import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'
import PlayersView from '../views/PlayersView.vue'
import PlayerInfoView from '../views/PlayerInfoView.vue'
import ShopView from '../views/ShopView.vue'
import SellAttackView from '../views/SellAttackView.vue'
import CreateAttackView from '../views/CreateAttackView.vue'
import ArenaView from '../views/ArenaView.vue'
import GameRecordBox from '../components/GameRecordBox.vue'
import BattleArena from '../views/BattleArena.vue'

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
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/sellAttack',
      name: 'sellAttack',
      component: SellAttackView
    },
    {
      path: '/createAttack',
      name: 'createAttack',
      component: CreateAttackView
    },
    {
      path: '/arena',
      name: 'arena',
      component: ArenaView
    },
    {
      path: '/gameRecord',
      name: 'gameRecord',
      component: GameRecordBox
    },
    {
      path: '/battlearena',
      name: 'battlearena',
      component: BattleArena
    }
  ]
})

export default router
