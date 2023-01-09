<template>
    <div class="px-3">
        <div class="d-flex justify-content-between">
            <h3>Dashboard</h3>
            <button
                class="btn btn-outline-light btn-icon-text"
                data-toggle="modal"
                data-target="#newProject"
            >
                <i class="mdi mdi-plus btn-icon-append"></i>Create Project Brief
            </button>
        </div>
        <div class="alert alert-warning" role="alert" v-if="changePassword">
            Your default password has been sent to your email. Please reset your
            password
            <button
                class="btn btn-link p-1"
                data-toggle="modal"
                data-target="#changePassword"
            >
                here</button
            >.
        </div>
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <div class="card-title">
                    Consultation Appointments
                </div>
                <router-link
                    to="/consultation/bookings"
                    class="card-link"
                    v-if="appointments.length > 0"
                    >See all</router-link
                >
            </div>
            <div class="card-body">
                <div class="row">
                    <div
                        v-if="appointments.length == 0"
                        class="text-center text-light h4 col-md-12"
                    >
                        No upcoming appointment
                    </div>
                    <div
                        v-else
                        class="col-md-3 mb-2"
                        v-for="appointment in appointments"
                        :key="appointment.id"
                    >
                        <div class="p-3 appoint-box m-1">
                            <div class="p-2 mb-1">
                                {{ appointment.time.part_of_day.name }}
                            </div>

                            <div class="p-2 h3">
                                <!-- <i class="mdi mdi-clock-fast"></i> -->
                                {{ appointment.time.time }}
                            </div>
                            <div class="p-2">
                                <i class="mdi mdi-calendar-check"></i>
                                {{ appointment.date }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 p-3 "></div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <div class="card-title">
                    Projects
                </div>
                <router-link
                    to="/projects"
                    class="card-link"
                    v-if="projects.length > 0"
                    >See all</router-link
                >
            </div>
            <div class="card-body">
                <div class="row ">
                    <div
                        class="text-center text-light"
                        v-if="projects.length == 0"
                    >
                        <h4>
                            No Projects
                        </h4>
                    </div>

                    <div
                        v-else
                        class="  col-lg-6  col-md-6 col-sm-12 mt-3"
                        v-for="(project, index) in projects"
                        :key="project.id"
                    >
                    <div class="project-bg">


                        <input
                            type="radio"
                            :id="project.id"
                            name="projects"
                            :checked="$parent.global_project_id == project.id || index == 0"
                            @change="onChange(project)"
                        />
                        <label :for="project.id" class="card bg-gray">
                            <div class="card-body px-1 py-4">
                                <div
                                    class="d-flex justify-content-between align-items-start"
                                >
                                    <div class="color-card">
                                        <span class="mb-0 color-card-head">
                                            {{ project.created_at }}
                                        </span>
                                        <h3 class="text-white mt-2">
                                            {{ project.name }}
                                        </h3>
                                    </div>
                                    <i
                                        class="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"
                                    ></i>
                                </div>
                            </div>
                            <div class="card-footer ">
                                <div
                                    class="d-flex justify-content-between align-items-start align-middle row"
                                >
                                    <div class="col-8">
                                        <ul
                                            class="list-group list-group-horizontal list-inline"
                                        >
                                            <li
                                                v-for="category in project.categories"
                                                :key="category.id"
                                            >
                                                <VueCustomTooltip
                                                    :label="
                                                        getProgressByCategory(
                                                            category.id,
                                                            project.progressPerCategory
                                                        )
                                                    "
                                                    position="is-top"
                                                >
                                                    <img
                                                        :src="
                                                            '/images/' +
                                                                category.image +
                                                                '.svg'
                                                        "
                                                        alt=""
                                                    />
                                                </VueCustomTooltip>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="pt-3 col-4">
                                        <ul
                                            class="list-group list-group-horizontal list-unstyled align-middle"
                                        >
                                            <li>
                                                <VueCustomTooltip
                                                    label="Overall progress"
                                                    position="is-top"
                                                >
                                                    <div
                                                        class="progress progress-md mt-2"
                                                        style="width:100px;"
                                                    >
                                                        <div
                                                            class="progress-bar bg-success"
                                                            role="progressbar"
                                                            aria-valuenow="5"
                                                            :style="
                                                                'width: ' +
                                                                    parseInt(
                                                                        project.progress
                                                                    ) +
                                                                    '%'
                                                            "
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                    </div>
                                                </VueCustomTooltip>
                                            </li>
                                            <li class="ml-1 text-success">
                                                <small
                                                    >{{
                                                        parseInt(
                                                            project.progress
                                                        )
                                                    }}%</small
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <UpdatePassword></UpdatePassword>
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    Billing History
                </div>
            </div>
            <div class="card-body">
                <h4 class="text-center text-light" v-if="payments.length == 0">
                    No billing history
                </h4>
                <div
                    v-else
                    class="table-holder  mt-4"
                    @wheel.prevent="wheelHorizontal($event)"
                >
                    <div
                        class="table-responsive"
                        ref="table"
                        @scroll.prevent="scrollHorizontal($event)"
                    >
                        <table class="table ">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Service type and name</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Processes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="invoice in payments"
                                    :key="invoice.id"
                                >
                                    <td>{{ invoice.invoice_number }}</td>
                                    <td>
                                        {{ invoice.invoice_name }}
                                    </td>
                                    <td>£{{ invoice.total_amount }}</td>
                                    <td>
                                        {{ invoice.created_at }}
                                    </td>
                                    <td :class="statusClass(invoice.status)">
                                        {{ invoice.status }}
                                    </td>

                                    <td>
                                        <router-link
                                            :to="
                                                '/payment/details/' + invoice.id
                                            "
                                            class="card-link"
                                        >
                                            <i
                                                class="mdi mdi-eye menu-icon mr-2"
                                            ></i>
                                            View</router-link
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <router-link
                        to="billing/history"
                        class="card-link"
                        v-if="payments.length > 0"
                        >Show all billings</router-link
                    >
                </div>
            </div>
        </div>

        <NewProject :projects="projects"></NewProject>
    </div>
</template>
<script>
import Service from "../../services/user/user.service";
import UpdatePassword from "./UpdatePassword.vue";
import NewProject from "../Projects/NewProject.vue";
export default {
    components: {
        NewProject,
        UpdatePassword
    },
    methods: {
        async getDashboard() {
            let response = await Service.Get("dashboard");
            if (response.data.success) {

                this.appointments = response.data.appointments;
                this.projects = response.data.projects;
                this.payments = response.data.payments;

                var selectedProject = JSON.parse(localStorage.getItem("project"));
                if(selectedProject == null && this.projects.length> 0){
                    this.onChange(this.projects[0])
                }
            }
        },
        onChange(project) {
            this.$parent.global_project = project;
            this.$parent.global_project_id = project.id;
            localStorage.setItem("project", JSON.stringify(project));
        },

        statusClass(status) {
            if (status == "Paid") {
                return "text-success";
            } else if (status == "Unpaid") {
                return "text-danger";
            } else {
                return "text-warning";
            }
        },
        getProgressByCategory(category_id, progressPerCategory) {
            var progress = "0";
            for (var i = 0; i < progressPerCategory.length; i++) {
                if (progressPerCategory[i].category == category_id) {
                    progress = progressPerCategory[i].sumProgress;
                    break;
                }
            }
            return progress + "%";
        },
        wheelHorizontal: function(e) {
            if (e.deltaY < 0) {
                this.$refs.table.scrollLeft = this.$refs.table.scrollLeft - 50;
            } else {
                this.$refs.table.scrollLeft = this.$refs.table.scrollLeft + 50;
            }
        },
        scrollHorizontal: function(e) {
            if (this.$refs.table.scrollLeft > 0) {
                this.showInfo = false;
            }
            if (this.$refs.table.scrollLeft == 0) {
                this.showInfo = true;
            }
        }
    },
    data() {
        return {
            appointments: [],
            projects: [],
            payments: [],
            changePassword: false,
            // query: ""
            path: "/auth"
        };
    },
    name: "Dashboard",
    computed: {
        loggedIn() {
            return this.$store.state.UserAuth.status.loggedIn;
        }
    },
    created() {
        if (this.$route.query.date && this.$route.query.time) {
            var query = this.$route.query;
            query = "?date=" + query.date + "&time=" + query.time;
            this.$router.push("/consultation/bookings/" + query);
            this.path += query;
        }

        var user = JSON.parse(localStorage.getItem("user"));
        if (user.default_password == 1) {
            this.changePassword = true;
        }
        if (!this.loggedIn) {
            this.$router.push(this.path);
        }
        this.getDashboard();
    }
};
</script>
<style scoped>
.appoint-box {
    border: 1px solid #fff;
    text-align: center;
}
.card .card-header {
    background-color: #23222000;
    border: none;
    padding: 0rem;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #74726f;
}

.dark-theme .card {
    background: transparent !important;
    border: none;
    box-shadow: none;
}

.card .card-body {
    padding: 24px 0px;
}

input[type="radio"] {
    display: none;
}

:checked + label {
    border-top: 2px solid #e29826 !important;
    border-left: 2px solid #e29826 !important;
    border-right: 2px solid #e29826 !important;
    border-bottom: 2px solid #e29826 !important;
    background-color: #332f2a;
    padding: 0px 15px 0px 15px;
    margin-bottom: -15px;
    /* color: #e29826; */
}

:checked + label:before {
    content: "\2714"; /*   "✓";*/
    background-color: #e29826;
    transform: scale(1);
    /* border: 1px solid #e29826; */
    margin: auto -16px -21px auto;
    color: #fff;
    width: 20px;
    height: 20px;
    text-align: center;
}

.project-bg,
.card-header {
    background-color: #232220;
}

.project-bg.col-lg-6, .project-bg.col-md-6, .project-bg.col-sm-12 {
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 0px;
}

.project-bg label {
    padding: 0px 15px 0px 15px;
    margin-bottom: 0px;
    height: 100%;
}

.project-bg:hover {
    border: 1px solid #74726f;
}

.card-footer {
    border-top: none;
    padding-left: 0px;
}

.list-inline li {
    padding: 10px;
}
.progress {
    background-color: #00000000;
    border: 1px solid #068d50;
}

.card-link {
    color: #e29826;
}

.card-link:hover {
    color: #fff;
}

.table-holder,
.table-responsive {
    position: relative;
}

.table-responsive::-webkit-scrollbar {
    height: 10px;
}

.table-responsive::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #333333;
    -webkit-box-shadow: inset 0 0 6px #333333;
}

.table-responsive::-webkit-scrollbar-thumb {
    background: #333333;
    outline: 1px solid #333333;
}

.info {
    position: absolute;
    width: 200px;
    height: 100%;
    /* background: linear-gradient(to right, transparent, #ffffff); */
    top: 0;
    right: 0;
    padding: 20px;
    text-align: right;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out;
    opacity: 0;
    visibility: hidden;
    z-index: 1;
    pointer-events: none;
}

.show {
    opacity: 1;
    visibility: visible;
}
tr th,
tr td {
    min-width: 50px;
    left: 0;
    background: rgba(37, 36, 36, 0.8);
}

tr th:first-child,
tr td:first-child {
    position: sticky;
    min-width: 50px;
    left: 0;
    background: rgba(37, 36, 36, 0.9);
}

.dark-theme .btn-outline-light {
    color: #fff;
}
.dark-theme .btn-outline-light:hover {
    color: #e29826;
    border-color: #e29826;
    background: none;
}

.card-body h3 {
    word-break: break-word;
}
</style>
