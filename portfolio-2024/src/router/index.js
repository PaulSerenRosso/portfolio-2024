import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsOverviewView from "@/views/ProjectsOverviewView.vue";
import ContactsView from "@/views/ContactsView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,

    },
    {
      path: '/keyProjects',
      name: 'keyProjects',
      component: ProjectsOverviewView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    }
  ],
})

export default router
