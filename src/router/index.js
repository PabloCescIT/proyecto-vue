import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/contador',
      name: 'copntador',
      component: () => import('../modules/contador/components/Contador.vue')
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaDeTareas',
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue')
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../modules/registro/views/RegistrarView.vue')
    },
    {
      path: '/calcular',
      name: 'calcular',
      component: () => import('../modules/calcular/views/CalcularView.vue')
    }
  ]

})

export default router
