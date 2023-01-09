<template>
    <div class="col-lg-12 grid-margin ">
        <div class="d-flex justify-content-between align-items-center mb-5">
            <div>
                <p class="card-title h3">Payment List</p>
                <p class="mb-0 text-muted">
                    Please choose the project that you wish to view the payment
                    list
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 pt-2">
                <div class="card mt-3">
                    <div class="card-body">
                        <div class="table-responsive">
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
                                        <td>{{ invoice.invoice_number }}</td>
                                        <td>
                                            {{ invoice.invoice_name }}
                                        </td>
                                        <td>£{{ invoice.total_amount }}</td>
                                        <td>
                                            {{ invoice.created_at }}
                                        </td>
                                        <td
                                            :class="statusClass(invoice.status)"
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
            let response = await UserService.Get(
                "invoices/" + this.$parent.global_project_id
            );

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
        }
    }
};
</script>

<style>
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
</style>
