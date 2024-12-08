import { createWebHashHistory,createRouter } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import { pa } from "element-plus/es/locales.mjs";


const routes = [
    { path: "/", component: HelloWorld },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    });
export default router;