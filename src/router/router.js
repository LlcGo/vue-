import UserTest from "../components/UserTest.vue";
import VueRouter from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";
import TestId from "@/components/Test.vue";


const router = new VueRouter({
    routes: [
        { path: '/user', name: 'user', component: UserTest },
        { path: '/', name: 'HelloWorld', component:HelloWorld },
        { path: '/test', name: 'Test', component: TestId}
    ]
})
export default router;
