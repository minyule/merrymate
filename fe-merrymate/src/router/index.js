import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import LandingPage from '../pages/LandingPage.vue';
import SignUpPage from '../pages/SignUpPage.vue';
import AuthRecoveryPage from '../pages/AuthRecoveryPage.vue';
import ProfilePage from '../pages/ProfilePage.vue';
import CreatePage from '../pages/create/CreatePage.vue';
import CreateMobileInvitationPage from '../pages/create/CreateMobileInvitationPage.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
    path: '/auth-recovery',
    name: 'AuthRecoveryPage',
    component: AuthRecoveryPage
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/create',
    name: 'CreatePage',
    component: CreatePage,
  },
  {
    path: '/create/mobile-invitation', 
    name: 'CreateMobileInvitationPage',
    component: CreateMobileInvitationPage
  },
  {
    path: '/landing',
    name: 'LandingPage',
    component: LandingPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
