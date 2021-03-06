import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import HomePage from '../components/HomePage/HomePage.vue';
import ResultOnAnotherPage from '../components/ResultOnAnotherPage/ResultOnAnotherPage.vue';
import Get from '../components/Get/Get.vue';
import Post from '../components/Post/Post.vue';


const routes = [
    {
        path: '/',
        component: HomePage,
        children: [
            {
                path: 'get',
                component: Get
            },
            {
                path: '',
                component: Post
            }
        ]
    },
    {
        path: '/resultOnAnotherPage',
        component: ResultOnAnotherPage
    }
];

export default new VueRouter({ mode: 'history', routes: routes });