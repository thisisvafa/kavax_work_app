<template>
    <div class="col-lg-12 grid-margin ">
        <div class="d-flex justify-content-between align-items-center mb-5">
            <div>
                <p class="card-title h3">Payment Details</p>
                <p class="mb-0 text-muted"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 pt-3">
                <div class="card mt-4 border">
                    <div class="card-body">
                        <div class="table-responsive">
                            <div
                                class="text-center mb-3"
                                v-if="invoice.status == 'Paid'"
                            >
                                <img src="/images/paid.svg" alt="" />
                            </div>
                            <table class="table col-md-8 offset-md-2">
                                <tbody>
                                    <tr>
                                        <td>
                                            Code:
                                        </td>
                                        <td></td>
                                        <td>
                                            Owner email:
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Amount</td>
                                        <td>
                                            {{ invoice.total_amount }}
                                        </td>
                                        <td>Postal code:</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Date:</td>
                                        <td></td>
                                        <td>Origin:</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Status:</td>
                                        <td></td>
                                        <td>Tracking Code:</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-4" v-if="invoice.status != 'Paid'">
                    <router-link :to="'/payment/confirm/' + invoice_id">
                        <button class="btn btn-outline-light py-2 px-5">
                            Pay here
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Service from "../../services/user/user.service";
export default {
    created() {
        this.getInvoice();
    },
    data() {
        return {
            invoice_id: null,
            invoice: null
        };
    },
    methods: {
        async getInvoice() {
            this.invoice_id = this.$route.params.invoice_id;
            let response = await Service.Get("invoice/" + this.invoice_id);

            if (response.data.success) {
                this.invoice = response.data.invoice;
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
.dark-theme .table td {
    border-top: none;
}
.dark-theme .table {
    border-bottom: none;
}

.dark-theme .border {
    border-color: #74726f !important;
}

.dark-theme .btn-outline-light {
    color: #fff;
}
.dark-theme .btn-outline-light:hover {
    color: #e29826;
    border-color: #e29826;
    background: none;
}
</style>
