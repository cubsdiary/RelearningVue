import Vue from "vue";
import Router from "vue-router";
import eventBus from "./views/eventBus.vue";
import dispatchBroadcase from "./views/dispatchBroadcase.vue";
import provideInject from "./views/provideInject.vue";
import vuexCon from "./views/vuexCon.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "busRouter",
      path: "/eventBus",
      component: eventBus
    }, {
      name: "dispatchBroadcase",
      path: "/dispatchBroadcase",
      component: dispatchBroadcase
    }, {
      name: "provideInject",
      path: "/provideInject",
      component: provideInject
    }, {
      name: "vuexRouter",
      path: "/vuexCon",
      component: vuexCon
    }
  ]
});
