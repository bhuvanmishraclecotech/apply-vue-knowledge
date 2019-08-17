import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import HomePage from '../components/HomePage/HomePage.vue';
import ResultOnAnotherPage from '../components/ResultOnAnotherPage/ResultOnAnotherPage.vue';

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/resultOnAnotherPage',
        component: ResultOnAnotherPage
    }
];

export default new VueRouter({mode: 'history', routes: routes});