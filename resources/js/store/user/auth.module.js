import AuthService from "../../services/user/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
    ? { status: { loggedIn: true }, user, userInfo: null }
    : { status: { loggedIn: false }, user: null, userInfo: null };

export const UserAuth = {
    namespaced: true,
    state: initialState,
    actions: {
        Login({ commit }, user) {
            return AuthService.Login(user).then(
                user => {
                    commit("Logged", user.data);
                    return Promise.resolve(user);
                },
                error => {
                    commit("LoginFailed");
                    return Promise.reject(error);
                }
            );
        },
        AutoLogin({ commit }, token) {
            return AuthService.AutoLogin(token).then(
                user => {
                    commit("Logged", user.data);
                    return Promise.resolve(user);
                },
                error => {
                    commit("LoginFailed");
                    return Promise.reject(error);
                }
            );
        },

        userInfo({ commit }, data) {
            commit("storeData", data);
        },
        logout({ commit }) {
            AuthService.logout();
            commit("logout");
        }
    },
    mutations: {
        Logged(state, user) {
            state.status.loggedIn = true;
            state.user = user;
            state.userInfo = user.info;
        },
        storeData(state, data) {
            state.userInfo = data;
        },
        LoginFailed(state) {
            state.status.loggedIn = false;
            state.user = null;
            state.userInfo = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
            state.userInfo = null;
        }
    }
};
