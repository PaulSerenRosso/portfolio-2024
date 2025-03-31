import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsOverviewView from '@/views/ProjectsOverviewView.vue'
import ContactsView from '@/views/ContactsView.vue'
import EsquirelView from "@/views/Projects/EsquirelView.vue";
import INRSView from "@/views/Projects/INRSView.vue";
import JabView from "@/views/Projects/JabView.vue";
import DofusBetaView from "@/views/Projects/DofusBetaView.vue";
import BobyView from "@/views/Projects/BobyView.vue";
import RSMView from "@/views/Projects/RSMView.vue";

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
    },
    {
      path: '/esquirel',
      name: 'esquirel',
      component: EsquirelView,
    },
    {
      path: '/inrs',
      name: 'inrs',
      component: INRSView,
    },
    {
      path: '/jab',
      name: 'jab',
      component: JabView,
    },
    {
      path: '/dofusBeta',
      name: 'dofusBeta',
      component: DofusBetaView,
    },
    {
      path: '/boby',
      name: 'boby',
      component: BobyView,
    },
    {
      path: '/rsm',
      name: 'rsm',
      component: RSMView,
    },
  ],
})

export default router
