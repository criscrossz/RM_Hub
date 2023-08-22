import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import IsoManagementSystemPage from '../views/IsoManagementSystemPage.vue'
import IsoCertificationPage from '../views/IsoCertificationPage.vue'
import MsDocumentPage from '../views/MsDocumentPage.vue'
import RmacademyPage from '../views/RmacademyPage.vue'
import KnowledgeCenter from '../views/KnowledgeCenter.vue'
import GalleryPage from '../views/GalleryPage.vue'
import SendsosPage from '../views/SendsosPage.vue'
import Privacypolicy from '../views/Privacypolicy.vue'
import Termsanduse from '../views/Termsanduse.vue'
import Sitemap from '../views/Sitemap.vue'
import Helpandsupport from '../views/Helpandsupport.vue'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: AboutPage  
    },
    {
      path: '/ISO-MS',
      component: IsoManagementSystemPage  
    },
    {
      path: '/ISO-Cert',
      component: IsoCertificationPage  
    },
    {
      path: '/MS-Docs',
      component: MsDocumentPage  
    },
    {
      path: '/RM-ACADEMY',
      component: RmacademyPage
    },
    {
      path: '/knowledgecenter',
      component: KnowledgeCenter
    },
    {
      path: '/gallery',
      component: GalleryPage,
    },
    {
      path: '/send-sos',
      component: SendsosPage,
    },
    {
      path: '/Help-and-Support',
      component: Helpandsupport,
    },
    {
      path: '/Privacy-Policy',
      component: Privacypolicy,
    },
    {
      path: '/Terms-and-Use',
      component: Termsanduse,
    },
    {
      path: '/Site-Map',
      component: Sitemap,
    },
    {
      path: '/Login',
      component: LoginPage,
    },
  ]
})

export default router
