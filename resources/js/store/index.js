import Vue from "vue";
import Vuex from "vuex";

import { UserAuth } from "./user/auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        UserAuth
    }
});