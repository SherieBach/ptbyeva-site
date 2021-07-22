import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WorkoutOffers from '../components/WorkoutOffers.vue'
import Contact from '../components/Contact.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'hem',
        component: Home
    },{
        path: '/train',
        name: 'workoutOffers',
        component: WorkoutOffers,
        meta: {hideNavigation: true}
    }, {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: {hideNavigation: true}
    },
];

const router = new VueRouter({
    mode: 'history', scrollBehavior(to) {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0}
        }
    },
    base: process.env.BASE_URL,
    routes
});

export default router
