<template>
    <div class="col-lg-12 grid-margin ">
        <div class=" align-items-center mb-5">
            <div class="text-center">
                <p class="h3">Pay by bank transfer</p>
                <p class="mb-0 text-white">
                    Our details for paying via bank transfer
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 pt-3">
                <div class="card mt-4 border col-md-8 offset-md-2">
                    <div class="card-body ">
                        <div class="table-responsive">
                            <table class="table ">
                                <tbody>
                                    <tr>
                                        <td>Recipient:</td>
                                        <td class="font-weight-bold">
                                            KavaX Media Ltd.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bank name:</td>
                                        <td class="font-weight-bold">
                                            Barclays bank Ltd.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sort code:</td>
                                        <td class="font-weight-bold">
                                            20-45-45
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Account number:</td>
                                        <td class="font-weight-bold">
                                            03 72 55 53
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Transfer amount:</td>
                                        <td
                                            class="font-weight-bold"
                                            v-if="invoice"
                                        >
                                            {{ invoice.total_amount }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="mt-5 text-center">
                    <router-link
                        :to="'/payment/upload-receipt/' + invoice_id"
                        class="text-white"
                        >I have already paid</router-link
                    >
                    <button class="btn btn-outline-light ml-4">
                        Take me to the dashboard
                    </button>
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
            invoice: null,
            invoice_id: null
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

<style>
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
</style>
