import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Login",
            component: () => import("@/components/Login.vue"),
        },
        {
            path: "/home",
            name: "Home",
            component: () => import("@/pages/Dashboard.vue"),
        },
    ]
})