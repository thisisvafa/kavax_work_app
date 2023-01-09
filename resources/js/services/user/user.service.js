import authHeader from "./token.services";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Notifications from "vue-notification";

Vue.use(VueAxios, axios);
Vue.use(Notifications);
const baseURL = process.env.MIX_API_URL;
var Api = Vue.axios.create({
    // baseURL: "https://kavax.co.uk/app/api/", //process.env.MIX_API_URL,
    baseURL: "http://127.0.0.1:8080/app/api/", //process.env.MIX_API_URL,
    headers: authHeader()
});

class UserService {
    async Get(end_point) {
        try {
            const response = await axios.get(baseURL + end_point, {
                headers: authHeader()
            });

            return response;
        } catch (error) {
            if (error.response.status == 401) {
                var query = "";
                try {
                    if (this.$route.query.date) {
                        query = this.$route.query;
                        query = "?date=" + query.date + "&time=" + query.time;
                        this.$router.push("/consultation/bookings/" + query);
                    }
                } catch (e) {}
                localStorage.removeItem("user");
                window.location.replace("/app/auth" + query);
            }
            for (let field of Object.keys(error.response.data.errors)) {
                Vue.prototype.$notify({
                    group: "notify",
                    type: "error",
                    title: error.response.data.errors[field][0]
                });
            }
            return error.response;
        }
    }

    async Post(end_point, data) {
        try {
            console.log(baseURL)
            const response = await axios.post(baseURL + end_point, data, {
                headers: authHeader()
            });
            return response;
        } catch (error) {
            console.log(error);
            if (error.response.status == 401) {
                localStorage.removeItem("user");
                window.location.replace("/app/auth");
            }
            for (let field of Object.keys(error.response.data.errors)) {
                Vue.prototype.$notify({
                    group: "notify",
                    type: "error",
                    title: error.response.data.errors[field][0]
                });
            }
            return error.response;
        }
    }

    async Put(end_point, data) {
        try {
            const response = await axios.put(baseUrl + end_point, data);
            return response;
        } catch (error) {
            if (error.response.status == 401) {
                localStorage.removeItem("user");
                window.location.replace("/app/auth");
            }
            for (let field of Object.keys(error.response.data.errors)) {
                Vue.prototype.$notify({
                    group: "notify",
                    type: "error",
                    title: error.response.data.errors[field][0]
                });
            }
            return error.response;
        }
    }

    async Delete(end_point, data = []) {
        try {
            const response = await axios.delete(end_point, data);
            return response;
        } catch (error) {
            if (error.response.status == 401) {
                localStorage.removeItem("user");
                window.location.replace("/app/auth");
            }
            for (let field of Object.keys(error.response.data.errors)) {
                Vue.prototype.$notify({
                    group: "notify",
                    type: "error",
                    title: error.response.data.errors[field][0]
                });
            }
            return error.response;
        }
    }
}

export default new UserService();
