<template>
    <!-- partial:partials/_sidebar.html -->
    <nav class="sidebar sidebar-offcanvas " id="sidebar">
        <ul class="nav scrollbar-hidden">
            <li class="nav-item ">
                <a href="/">
                    <div class="brand-logo mb-2">
                        <img src="/images/logo.svg" />
                    </div>
                </a>
            </li>
            <li class="nav-item ">
                <span class="nav-link">
                    Welcome
                </span>
            </li>
            <li class="nav-item ">
                <span
                    class="nav-link font-weight-medium mb-2 pt-0 text-warning"
                    >{{ user.user.fullName }}</span
                >
            </li>
            <li class="nav-item">
                <router-link
                    class="nav-link"
                    data-toggle="collapse"
                    to="/dashboard"
                    aria-expanded="false"
                    aria-controls="page-layouts"
                >
                    <i class="mdi mdi-home " style="font-size:large;"></i>
                    <span class="menu-title ml-3">Dashboard</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                    class="nav-link "
                    data-toggle="collapse"
                    to="/projects"
                    aria-expanded="false"
                    aria-controls="page-layouts"
                >
                    <!-- <img :src="'/images/' + icons[0]" alt="" /> -->
                    <i class="mdi mdi-menu ml-0" style="font-size:large;"></i>
                    <span class="menu-title ml-3">Your Projects</span>
                </router-link>
            </li>

            <li
                class="project-section"
                v-if="global_project && global_project.categories"
            ><VueCustomTooltip
                                                                    :label="global_project.name"
                                                                    position="is-top"
                                                                >
                <a
                    class="nav-link project_name "
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="page-layouts"
                >
                    <img :src="'/images/' + icons[1]" alt="" />

                    <span class="menu-title ml-3 text-warning">
                        {{ global_project.name.slice(0,20) || "Choose Project" }}</span
                    >
                    <span class=" text-warning" v-if="global_project.name.length > 20">...</span>
                    <i class="menu-arrow"></i>
                </a>
                </VueCustomTooltip>
                <ul class="sub-nav nav flex-column sub-menu">
                    <li
                        class="nav-item"
                        id="page-layouts"
                        v-for="category in global_project.categories"
                        :key="category.id"
                    >
                        <router-link
                            class="nav-link"
                            :to="
                                '/project/tasks/' +
                                    category.id +
                                    '/' +
                                    category.name
                            "
                        >
                            <img
                                :src="'/images/' + category.image + '.svg'"
                                alt=""
                                class="icon"
                            />
                            {{ category.name }}
                        </router-link>
                    </li>
                </ul>
            </li>
            <li
                class="nav-item project-section"
                v-if="global_project && global_project.categories"
            >
                <router-link
                    class="nav-link project_name"
                    data-toggle="collapse"
                    :to="'/project/messages/' + global_project.id"
                    aria-expanded="false"
                    aria-controls="sidebar-layouts"
                >
                    <img :src="'/images/' + icons[2]" alt="" />
                    <!-- <i class="mdi mdi-message-bulleted menu-icon"></i> -->
                    <span class="menu-title ml-3">Messages</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                    class="nav-link project_name"
                    data-toggle="collapse"
                    to="/payments"
                    aria-expanded="false"
                    aria-controls="sidebar-layouts"
                >
                    <img :src="'/images/' + icons[4]" alt="" />
                    <span class="menu-title ml-3">Payment</span>
                </router-link>
            </li>

            <li class="nav-item ">
                <router-link
                    class="nav-link "
                    data-toggle="collapse"
                    to="/file-library/all"
                    aria-expanded="false"
                    aria-controls="sidebar-layouts"
                >
                    <img :src="'/images/' + icons[3]" alt="" />
                    <span class="menu-title ml-3">File Library</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                    @click="hover(6)"
                    to="/support-tickets"
                    class="nav-link"
                    aria-controls="sidebar-layouts"
                >
                    <img :src="'/images/' + icons[5]" alt="" class="colored" />
                    <span class="menu-title ml-3">Support Ticket</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                    @click="hover(5)"
                    to="/consultation/bookings"
                    class="nav-link"
                    aria-controls="sidebar-layouts"
                >
                    <img :src="'/images/' + icons[6]" alt="" />
                    <span class="menu-title ml-3">Book a Call</span>
                </router-link>
            </li>
            <li class="nav-item" v-if="false">
                <a
                    class="nav-link"
                    href="#sidebar-layouts"
                    aria-expanded="false"
                    aria-controls="sidebar-layouts"
                    data-toggle="modal"
                    data-target="#whatsNew"
                >
                    <img :src="'/images/' + icons[7]" alt="" />
                    <span class="menu-title ml-3">What's new?</span>
                </a>
                <WhatsNew></WhatsNew>
            </li>

            <li class="nav-item border-top mt-5">
                <router-link to="/profile" class="nav-link">
                    <i
                        class="mdi mdi-account ml-0"
                        style="font-size:large;"
                    ></i>
                    <span class="menu-title ml-3"
                        >Your Account</span
                    ></router-link
                >
            </li>
            <li class="nav-item">
                <router-link to="/billing/history" class="nav-link">
                    <img :src="'/images/' + icons[8]" alt="" />
                    <span class="menu-title ml-3">
                        Billing History</span
                    ></router-link
                >
            </li>
            <li class="nav-item">
                <a class="nav-link" @click="logout()">
                    <i class="mdi mdi-logout " style="font-size:large;"></i>
                    <span class="menu-title ml-3">logout </span></a
                >
            </li>
        </ul>
    </nav>

    <!-- partial -->
</template>

<script>
import userService from "../../services/user/user.service";
import WhatsNew from "../user/WhatsNew.vue";
import VueCustomTooltip from "@adamdehaven/vue-custom-tooltip";
export default {
    created() {
        this.user = JSON.parse(localStorage.getItem("user"));

    },
    data() {
        return {
            icons: [
                "project.svg",
                "project.svg",
                "msg.svg",
                "file.svg",
                "wallet.svg",
                "support.svg",
                "calender.svg",
                "whatsnew.svg",
                "billing.svg"
            ],
            user: null
        };
    },
    components: {
        WhatsNew,
        VueCustomTooltip
    },
    methods: {
        getCategoryImage(category) {
            if (category == "Web Development") {
                return "web";
            } else if (category == "App Development") {
                return "mobile";
            } else if (category == "Video Marketing") {
                return "video";
            } else if (category == "Digital Marketing") {
                return "mic";
            } else {
                return "typewriter";
            }
        },
        async logout() {
            let response = await userService.Post("auth/logout", {});

            // console.log(response);
            if (response.status == 200) {
                this.$store.state.UserAuth.status.loggedIn = false;
                this.$router.push("/auth");
                this.$toast.success("Logged Out.");
                localStorage.removeItem("user");
                localStorage.removeItem("project");
            } else {
                this.loading = false;
            }
        },
        hover(index) {
            this.icons[index] = this.icons[index].split(".")[0] + "-black.svg";
        },
        resetAllIcons() {
            this.icon;
        }
    },
    watch: {
        global_project: function() {
            // console.log(this.global_project);
        }
    },
    props: {
        global_project_id: Number,
        global_project: Object
    }
};
</script>

<style scoped>
.dark-theme .sidebar {
    background-color: #1d1d1d;
}
.dark-theme .sidebar .nav .nav-item .nav-link i.menu-icon {
    color: #fff;
}

.brand-logo img {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 30px;
}

.sidebar .nav.sub-menu .nav-item .nav-link:before {
    color: white;
    font-size: 0.75rem;
    content: none;
    position: absolute;
    width: 9px;
    height: 9px;
    border: 2px solid #3e4b5b;
    border-radius: 50%;
    margin-left: -1.25rem;
    top: 19px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.75rem;
}

.dark-theme .sidebar .nav.sub-menu .nav-item .nav-link {
    color: #fff;
}

.icon {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}
.project-section {
    border-left: 1px solid #fff;
}

.dark-theme .sidebar .nav .nav-item .router-link-exact-active,
.dark-theme .sidebar .nav .nav-item .active {
    filter: invert(1);
    background-color: #000;
    /* color: #000; */
}

/* .dark-theme .sidebar .nav .nav-item .router-link-exact-active:hover,
.dark-theme .sidebar .nav .nav-item .active:hover {
    background-color: #e29826;
    color: #000;
} */

.dark-theme .sidebar .nav .nav-item .router-link-exact-active i.menu-icon,
.dark-theme .sidebar .nav .nav-item .active i.menu-icon {
    color: #000;
}

.sidebar {
    min-height: calc(100vh);
}

.account-nav {
    position: fixed;
    bottom: 0px;
}

.sidebar .nav.sub-menu {
    margin-bottom: 0px;
    margin-top: 0;
    list-style: none;
}

.scrollbar-hidden::-webkit-scrollbar {
    display: none;
}

.nav .nav-item:hover {
    background: #252529;
}
.dark-theme .sidebar .nav.sub-menu .nav-item .nav-link.active {
    color: #ffffff;
    background: #000;
}
.dark-theme .sidebar .sub-nav .nav-item .router-link-exact-active,
.dark-theme .sidebar .sub-nav .nav-item .active {
    filter: invert(1);
    background-color: #000;
    /* color: #000; */
}
.sub-nav .nav-item:hover {
    background: #252529;
}
.sidebar .nav .nav-link.project_name {
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 12px 2.25rem 12px 4.25rem;
    transition: all 0.3s ease-in-out;
}
</style>
