import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Projects from './views/Projects.vue'
import Designs from './views/Designs.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Justin Parker' } },
  { path: '/projects' , component: Projects, meta: { title: 'Back Home' } },
  { path: '/designs' , component: Designs, meta: { title: 'Back Home' } },
  {
    path: '/contact',
    meta: { title: 'Back Home' },
    component: Contact,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
