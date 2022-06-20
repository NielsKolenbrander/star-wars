import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MasterJedi from '../views/MasterJediView.vue'
import Padawan from '../views/PadawanView.vue'
import SaberLayout from '../views/Layout.vue'
import SaberDetails from '../views/Details.vue'
import SaberRegister from '../views/Register.vue'
import SaberEdit from '../views/Edit.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/masterjedi',
    name: 'masterjedi',
    component: MasterJedi
  },
  {
    path: '/padawan',
    name: 'padawan',
    component: Padawan,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/padawan/:id',
    name: 'saberLayout',
    props: true,
    component: SaberLayout,
    children: [
      {
        path: '',
        name: 'saberDetails',
        component: SaberDetails
      },
      {
        path: 'register',
        name: 'saberRegister',
        component: SaberRegister
      },
      {
        path: 'edit',
        name: 'saberEdit',
        component: SaberEdit
      },
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
