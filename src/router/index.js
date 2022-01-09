import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Medicine from "../views/Medicine";
import Promotion from "../views/Promotion";
import Invoice from "../views/Invoice";

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Home
  },
  {
    path: '/medicinas',
    name: 'medicinas',
    component: Medicine
  },
  {
    path: '/promociones',
    name: 'promociones',
    component: Promotion
  },
  {
    path: '/facturas',
    name: 'facturas',
    component: Invoice
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
