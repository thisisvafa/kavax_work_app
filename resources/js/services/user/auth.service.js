import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Notifications from "vue-notification";
import authHeader from "./token.services";

Vue.use(VueAxios, axios);
Vue.use(Notifications);

const apiUrl = process.env.MIX_API_URL;

class AuthService {
    async Login(user) {
        try {
            const response = await Vue.axios.post(apiUrl + "auth/login", user);
            if (response.data.access_token) {
                // alert(JSON.stringify(response.data))
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response;
        } catch (error) {
            Vue.prototype.$notify({
                group: "notify",
                type: "error",
                title: error.response.data.message
            });
            return error.response;
        }
    }
    async AutoLogin(data) {
        try {

            const response = await Vue.axios.post(
                apiUrl + "auth/default-login",
                data
            );

            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response;
        } catch (error) {
            Vue.prototype.$notify({
                group: "notify",
                type: "error",
                title: error.response.data.message
            });
            return error.response;
        }
    }

    async logout() {
        let token = authHeader();
        localStorage.removeItem("user");
        try {
            const response = await Vue.axios.post(apiUrl + "auth/logout", [], {
                headers: token
            });
            console.log(response);
            return response;
        } catch (error) {
            Vue.prototype.$notify({
                group: "notify",
                type: "error",
                title: error.response.data.message
            });

            return error.response;
        }
    }
}

export default new AuthService();
