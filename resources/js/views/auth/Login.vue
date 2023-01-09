<template>
    <div>
        <h4 class="mb-5 pb-3">Login</h4>
        <h6 class="font-weight-light text-left">Complete your information.</h6>
        <form class="pt-3 text-left" @submit.prevent="Login">
            <fieldset class="form-group ">
                <!-- <legend>Email</legend> -->
                <label for="email">Email</label>
                <input
                    id="email"
                    type="email"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="user.email"
                />
            </fieldset>

            <div class="form-group pb-2">
                <label for="password">Password</label>
                <input
                    id="password"
                    type="password"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="user.password"
                />
            </div>
            <div class="mt-5 text-center pt-3">
                <button
                    type="submit"
                    class="btn btn-block btn-outline-light btn-lg font-weight-medium auth-form-btn"
                    :disabled="false"
                >
                    LOG IN
                </button>
            </div>
            <div class="my-2  align-items-center text-center">
                <div class="text-center mt-4 font-weight-light">
                    Don't have an account?
                    <router-link :to="'/auth/register'+queryString" class="text-warning"
                        >Register</router-link
                    >
                </div>
                <!-- <div class="form-check">
                    <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" /> Keep
                        me signed in
                    </label>
                </div> -->
                <div class="text-center mt-3 ">
                    <a href="https://kavax.co.uk/admin/password/reset" class="auth-link text-white"
                        >Forgot password?</a
                    >
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import User from "../../models/user";
import UserService from "../../services/user/user.service";

export default {
    name: "Login",
    data() {
        return {
            user: new User("", "", ""),
            loading: false,
            token: null,
            query: "",
            path: "/dashboard/",
            queryString:""
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.UserAuth.status.loggedIn;
        }
    },
    created() {
                        localStorage.removeItem("user");
                localStorage.removeItem("project");
        if (this.$route.query.date && this.$route.query.time) {
            this.query = this.$route.query;
            this.queryString = "?date=" + this.query.date + "&time=" + this.query.time;
            this.path += this.queryString

        }

        if (this.loggedIn) {
            this.$router.push(this.path);
        } else {
            if (this.$route.params.token) {
                this.token = this.$route.params.token;
                var data = {
                    token:this.$route.params.token
                }
                this.defaultLogin(data);
            }else if(this.$route.query.date && this.$route.query.time){
                var data = {
                    full_name : this.$route.query.full_name,
                    phone: this.$route.query.phone,
                    password: this.$route.query.password,
                    email: this.$route.query.email,
                    date: this.$route.query.date,
                    time: this.$route.query.time
                }
                this.defaultLogin(data);
            }
        }
    },
    methods: {
        Login() {
            if (this.user.email && this.user.password) {
                this.loading = true;
                this.$store
                    .dispatch("UserAuth/Login", this.user)
                    .then(response => {
                        if (response.status == 200) {
                            // this.$router.push("/dashboard")

                            localStorage.removeItem("project");
                            this.$router.length = this.$router.length -2
                            this.$router.push('/dashboard')
                            // window.location.reload();
                            // this.$router.go();
                            this.$toast.success("Logged In.");
                        } else {
                            this.loading = false;
                        }
                    });
            } else {
                this.$toast.error("Email/Password is required.");
            }
        },
        async defaultLogin(data) {

                this.$store
                    .dispatch("UserAuth/AutoLogin", data)
                    .then(response => {
                        if (response.status == 200) {


                            this.$router.push('/dashboard')
                            this.$toast.success("Logged In.");
                        } else {
                            this.loading = false;
                        }
                    });

        }
    }
};
</script>

<style scoped>
.form-control {
    border: 1px solid #74726f;
    color: #fff;
}
.auth form .auth-form-btn {
    height: auto;
    line-height: 1.5;
    margin-left: 20%;
    width: 60%;
    color: #fff;
}

.auth .brand-logo {
    margin-bottom: 1 rem;
}
input:focus {
    border: 1px solid #e29826;
    background-color: transparent !important;
}

.auth-bg:before {
    content: "";
    position: fixed;
    width: 100%;
    background-image: linear-gradient(
        rgba(23, 23, 23, 0.12) 0%,
        #171717 57%,
        rgba(23, 23, 23, 0.95) 100%
    );
    height: 50%;
    right: 0;
    bottom: -30px;
    z-index: -1;
    pointer-events: none;
}

.auth form .auth-form-btn:hover {
    border: 1px solid #e29826;
    color: #e29826;
}
</style>
