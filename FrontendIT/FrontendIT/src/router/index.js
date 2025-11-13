import { createRouter, createWebHistory } from 'vue-router'
import IT021 from '../views/IT021.vue'
import IT022 from '../views/IT022.vue'
import IT023 from '../views/IT023.vue'

const routes = [
    { path: '/', name: 'IT021', component: IT021 },
    { path: '/IT022', name: 'IT022', component: IT022 },
    { path: '/IT023', name: 'IT023', component: IT023 },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router