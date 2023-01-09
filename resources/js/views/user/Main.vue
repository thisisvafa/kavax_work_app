<template>
    <div class="  container-scroller">
        <Sidebar
            :global_project_id="global_project_id"
            :global_project="global_project"
        ></Sidebar>

        <div class="container-fluid page-body-wrapper">
            <Navbar></Navbar>
            <div class="main-panel">
                <div class="content-wrapper pb-0">
                    <router-view
                        :global_project_id="global_project_id"
                        :global_project="global_project"
                    ></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Service from "../../services/user/user.service";
import Sidebar from "../Includes/Sidebar.vue";
import Navbar from "../Includes/Navbar.vue";
import UserService from "../../services/user/user.service";

export default {
    methods: {
        getProjectDetails(project_id) {}
    },
    watch: {
        global_project_id: function() {
            this.getProjectDetails(this.global_project_id);
        }
    },
    data() {
        return {
            global_project_id: 0,
            global_project: {},
            query: "",
            path: "/auth/"
        };
    },
    name: "Main",
    components: {
        Sidebar,
        Navbar
    },
    computed: {
        loggedIn() {
            return this.$store.state.UserAuth.status.loggedIn;
        },
        userInfo() {
            return this.$store.state.UserAuth.user;
        }
    },
    created() {
        if (this.$route.query) {
            this.query = this.$route.query;
            this.path +=
                "?date=" + this.query.dates + "&time=" + this.query.time;
        }
        if (!this.loggedIn) {
            this.$router.push(this.path);
        } else {
            this.global_project = JSON.parse(localStorage.getItem("project"));
            if (this.global_project != null)
                this.global_project_id = this.global_project.id;
                
        }
    }
};
</script>
<style>
.main-panel {
    padding-top: 50px;
}

.bg-dark {
    background-color: #1d1d1d;
}

.dark-theme .content-wrapper {
    background-color: #2d2d2d;
}
.btn-outline-secondary,
.editable-container.editable-inline
    .editableform
    .control-group
    .editable-buttons
    .editable-cancel {
    color: #fff;
    border-color: #fff;
}

input:focus {
    border: 1px solid #e29826;
    color: #fff;
}

.form-control {
    border: 1px solid #74726f;
    color: #fff;
}
</style>
