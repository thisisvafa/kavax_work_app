<template>
    <div class="col-lg-12 grid-margin ">
        <div
            :class="
                (!isMobile() ? 'd-flex ' : '') +
                    'justify-content-between align-items-center mb-5'
            "
        >
            <div>
                <p class="card-title h3">Technical Support Tickets</p>
                <p class="mb-0 text-muted">
                    Customer ID #15489
                </p>
            </div>
            <div :class="isMobile() ? 'text-right mt-3' : ''">
                <router-link to="/support-tickets/new">
                    <button
                        type="button"
                        class="btn btn-outline-light btn-icon-text"
                        data-toggle="modal"
                        data-target="#newProject"
                    >
                        <i class="mdi mdi-plus btn-icon-append"></i>
                        New Ticket
                    </button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 pt-3">
                <div class="card mt-4">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th>Ticket#</th>
                                        <th>Ticket title</th>
                                        <th>Status</th>
                                        <th>Answered by</th>
                                        <th>Opened on</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="ticket in supportTickets"
                                        :key="ticket.id"
                                    >
                                        <td>{{ ticket.id }}</td>
                                        <td>
                                            {{ ticket.ticket_title }}
                                        </td>
                                        <td>
                                            <label
                                                :class="
                                                    'badge ' +
                                                        getStatusClass(
                                                            ticket.status
                                                        )
                                                "
                                            >
                                                {{ ticket.status }}
                                            </label>
                                        </td>
                                        <td>
                                            <div id="container">
                                                <div
                                                    id="name"
                                                    v-for="(fullName,
                                                    index) in ticket.answered_by"
                                                    :key="index"
                                                >
                                                    {{
                                                        getPhotoFromName(
                                                            fullName.fullName
                                                        )
                                                    }}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ ticket.created_at }}</td>

                                        <td>
                                            <label>
                                                <i
                                                    class="mdi mdi-reply menu-icon"
                                                ></i>
                                            </label>
                                            &nbsp;
                                            <router-link
                                                :to="
                                                    '/support-messages/' +
                                                        ticket.id +
                                                        '/' +
                                                        ticket.ticket_title
                                                "
                                            >
                                                <i
                                                    class="mdi mdi-eye menu-icon"
                                                ></i>
                                                See</router-link
                                            >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from "../../services/user/user.service";
export default {
    created() {
        this.getSupportTickets();
    },
    data() {
        return {
            supportTickets: [],
            answeredBy: []
        };
    },
    methods: {
        async getSupportTickets() {
            let response = await UserService.Get("support-tickets");
            // console.log(response.data);
            if (response.data.success == 1) {
                this.supportTickets = response.data.supportTickets;
            }
        },
        getStatusClass(status) {
            if (status == "Opened") {
                return "badge-success";
            }
            return "badge-danger";
        },
        getPhotoFromName(fullName) {
            var names = fullName ? fullName.split(" ") : [];
            var letters = "";
            for (var i = 0; i < names.length; i++) {
                letters += names[i][0];
            }
            return letters;
        },
        isMobile() {
            if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            ) {
                return true;
            } else {
                return false;
            }
        }
    }
};
</script>

<style scoped>
.dark-theme .card {
    background: #25252900;
    border: none;
    box-shadow: none;
}

.card .card-body {
    padding: 0px;
}

.dark-theme .btn {
    color: #fff;
}

tr {
    border: none;
}

.table thead,
.dark-theme .table thead {
    border-bottom: 1px solid #74726f;
    border-top: none;
}

.table td,
.dark-theme .table td {
    border-bottom: none;
    border-top: none;
}

table tbody {
    border-bottom: none;
}

#container {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: #333;
}
#name {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 18px;
    line-height: 50px;
}

tr td:first-child {
    position: sticky;
    min-width: 50px;
    left: 0;
    background: rgba(37, 36, 36, 0.9) !important;
}
tr th:first-child {
    position: sticky;
    min-width: 50px;
    left: 0;
    background: rgb(45, 45, 45, 0.9) !important;
    padding-right: 10px;
}
</style>
