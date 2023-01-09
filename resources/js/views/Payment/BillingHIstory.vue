<template>
    <div class="col-lg-12 grid-margin ">
        <div class="d-flex justify-content-between align-items-center mb-5">
            <div>
                <p class="card-title h3">Billing History</p>
                <p class="mb-0 text-muted">
                    Please choose the project that you wish to view the payment
                    list
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 pt-2">
                <div class="card mt-3">
                    <div class="card-body px-0">
                        <div
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
                                            v-for="invoice in invoices"
                                            :key="invoice.id"
                                        >
                                            <td>
                                                {{ invoice.invoice_number }}
                                            </td>
                                            <td>
                                                {{ invoice.invoice_name }}
                                            </td>
                                            <td>£{{ invoice.total_amount }}</td>
                                            <td>
                                                {{ invoice.created_at }}
                                            </td>
                                            <td
                                                :class="
                                                    statusClass(invoice.status)
                                                "
                                            >
                                                {{ invoice.status }}
                                            </td>

                                            <td>
                                                <router-link
                                                    :to="
                                                        '/payment/details/' +
                                                            invoice.id
                                                    "
                                                >
                                                    <i
                                                        class="mdi mdi-eye menu-icon mr-2"
                                                    ></i>
                                                    See</router-link
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h4
                            v-if="invoices.length == 0"
                            class="text-center mt-5 text-light"
                        >
                            No Invoice Found
                        </h4>
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
        this.getInvoices();
    },
    data() {
        return {
            invoices: []
        };
    },
    methods: {
        async getInvoices() {
            let response = await UserService.Get("billing/history");

            if (response.data.success) {
                this.invoices = response.data.invoices;
            }
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
    }
};
</script>

<style scoped>
.dark-theme .card {
    background: #25252900;
    border: none;
    box-shadow: none;
}

.table thead,
.dark-theme .table thead {
    border-bottom: 2px solid #74726f;
    border-top: none;
}

.table td,
.dark-theme .table td {
    border-bottom: none;
    border-top: none;
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

.card .card-body {
    padding: 24px 0px;
}
</style>
