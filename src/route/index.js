import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/views/LoginPage";
import HomePage from "@/views/HomePage.vue";
import GoogleLogin from "@/views/GoogleLogin.vue";
import {useAuthStore} from "@/stores/auth";

const app_name = ' / X'
const routes = [
    {'path': '/', 'component': LoginPage, 'name': `Login ${app_name}`},
    {
        'path': '/home',
        'component': HomePage,
        'name': `Home ${app_name}`,
        'meta': {
            'requiresAuth': true
        }
    },
    {'path': '/google-login', 'component': GoogleLogin, 'name': `Google Login ${app_name}`}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next('/')
    } else {
        next()
    }
})
export default router;