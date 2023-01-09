import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Notifications from "vue-notification";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import VueFileAgent from "vue-file-agent";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Modal from "@burhanahmeed/vue-modal-2";
import VueCustomTooltip from "@adamdehaven/vue-custom-tooltip";
// Import VueScheduler
import VueScheduler from "v-calendar-scheduler";
// Import styles
import "v-calendar-scheduler/lib/main.css";
require("./bootstrap");
import VueMobileDetection from "vue-mobile-detection";
window.Vue = require("vue");
import VueCroppie from "vue-croppie";
import VueHtmlToPaper from "vue-html-to-paper";

Vue.config.performance = true;
Vue.use(Notifications);
Vue.use(VueToast, {
    position: "bottom-right"
});
Vue.use(Loading);
Vue.use(VueFileAgent);
Vue.use(VueCroppie);
Vue.use(Modal);
Vue.use(VueScheduler, { availableViews: ["month"] });
const options = {
    name: "invoice",
    // specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
    styles: [
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        "https://unpkg.com/kidlat-css/css/kidlat.css"
    ]
};
Vue.use(VueHtmlToPaper, options);
// Vue.use(VueMobileDetection);
// Vue.use(VueCustomTooltip)
Vue.use(VueCustomTooltip, {
    name: "VueCustomTooltip",
    color: "#fff",
    background: "#000",
    borderRadius: 12,
    fontWeight: 400
});
new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: {
        App
    },
    data: {}
});
