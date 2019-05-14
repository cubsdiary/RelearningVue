import Vue from "vue";
const bus = new Vue({
  data() {
    return {
      busName: "eventBus"
    };
  }
});

const eventBus = {
  install(Vue, options) {
    Vue.prototype.$bus = bus;
  }
};

export default eventBus;
