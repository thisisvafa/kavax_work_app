<template>
    <div>
        <h4 class="">Register</h4>
        <h6 class="font-weight-light text-left mt-4">
            A few details about you...
        </h6>
        <form class="pt-3" @submit.prevent="Register">
            <div class="row">
                <div class="col-md-6">
                    <fieldset class="form-group">
                        <!-- <legend>Email</legend> -->
                        <input
                            v-model="firstName"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="First Name"
                        />
                    </fieldset>
                </div>
                <div class="col-md-6">
                    <fieldset class="form-group">
                        <!-- <legend>Email</legend> -->
                        <input
                            v-model="lastName"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Last Name"
                        />
                    </fieldset>
                </div>
                <div class="col-md-6">
                    <fieldset class="form-group">
                        <!-- <legend>Email</legend> -->
                        <input
                            v-model="userName"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="User Name"
                        />
                    </fieldset>
                </div>
                <div class="col-md-6">
                    <fieldset class="form-group">
                        <!-- <legend>Email</legend> -->
                        <input
                            v-model="email"
                            type="email"
                            class="form-control form-control-lg"
                            placeholder="Email"
                        />
                    </fieldset>
                </div>
                <div class="col-md-6">
                    <fieldset class="form-group">
                        <!-- <legend>Email</legend> -->
                        <input
                            v-model="password"
                            type="password"
                            class="form-control form-control-lg"
                            placeholder="Password"
                        />
                    </fieldset>
                </div>
                <div class="col-md-6">
                    <fieldset class="form-group">
                        <!-- <legend>Email</legend> -->
                        <input
                            v-model="confirmPassword"
                            type="password"
                            class="form-control form-control-lg"
                            placeholder="Confirm Password"
                        />
                    </fieldset>
                </div>
            </div>
            <div class="form-check  text-left ml-4">
                <label class="">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        v-model="terms"
                    />

                    I accept the terms and conditions
                </label>
            </div>
            <div class="form-check text-left ml-4">
                <label class="">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        v-model="updates"
                    />
                    Yes, please keep me updated on KavaX news, events and
                    offers.
                </label>
            </div>
            <div class="mt-5 text-center">
                <button
                    type="submit"
                    class="btn btn-block btn-outline-light btn-lg font-weight-medium auth-form-btn"
                    :disabled="false"
                >
                    REGISTER
                </button>
            </div>
            <div class="my-2  align-items-center text-center">
                <div class="text-center mt-4 font-weight-light">
                    Already registered?
                    <router-link :to="'/auth/'+queryString" class="text-warning"
                        >Login</router-link
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
    name: "Register",
    data() {
        return {
            user: new User("", "", ""),
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            userName: "",
            loading: false,
            terms: false,
            updates: false,
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
            // this.path += this.queryString
                
        }
        if (this.loggedIn) {
            this.$router.push("/dashboard"+this.queryString);
        }

    },
    methods: {
        async Register() {
            if (!this.terms) {
                this.$toast.error("Please accept the terms and conditions.");
                return false;
            }
            var data = {
                fullName: this.firstName + " " + this.lastName,
                email: this.email,
                password: this.password,
                username: this.userName
            };

            let response = await UserService.Post("auth/register", data);
            if (response.data.success) {
                this.user.email = this.email;
                this.user.password = this.password;
                this.Login();
            }
            // console.log(response);
        },
        Login() {
            if (this.user.email && this.user.password) {
                this.loading = true;
                this.$store
                    .dispatch("UserAuth/Login", this.user)
                    .then(response => {
                        if (response.status == 200) {
                            this.$router.push("/dashboard"+this.queryString);
                            this.$toast.success("Registraion successful.");
                        } else {
                            this.loading = false;
                        }
                    });
            } else {
                this.$toast.error("Email/Password is required.");
            }
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
    margin-left: 30%;
    width: 40%;
    color: #fff;
}

.auth .brand-logo {
    margin-bottom: 1 rem;
}

input:focus {
    border: 1px solid #e29826;
}
.auth form .auth-form-btn:hover {
    border: 1px solid #e29826;
    color: #e29826;
}
</style>
