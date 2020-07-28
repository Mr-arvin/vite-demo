import { createRouter, createWebHistory } from "vue-router";
import Demo from "../components/Demo.vue";
import Card from "../components/Card.vue";
import NotFound from "../views/404.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // route -> routes
    {
      path: "/demo",
      name: "Demo",
      component: Demo,
    },
    {
      path: "/card",
      name: "Card",
      component: () =>
        import(/* webpackChunkName: 'Card' */ "../components/Card.vue"),
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    }
  ],
});

var demo = router
debugger

export default router;
