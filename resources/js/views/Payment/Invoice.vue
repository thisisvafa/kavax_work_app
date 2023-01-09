<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card px-2">
                <div class="card-body">
                    <div class="container-fluid">
                        <h4 class="text-right my-5">
                            Invoice&nbsp;&nbsp;#INV-{{ invoice.id }}
                        </h4>
                        <hr />
                    </div>
                    <div class="container-fluid d-flex justify-content-between">
                        <div class="col-lg-3 pl-0">
                            <p class="mt-5 mb-2"><b>Kavax Media</b></p>
                            <p>
                                International House,<br />64, Nile Street,
                                London, N1 7SR, United Kingdom.
                            </p>
                        </div>
                        <div class="col-lg-3 pr-0">
                            <p class="mt-5 mb-2 text-right">
                                <b>Invoice to</b>
                            </p>
                            <p class="text-right">
                                <!-- {{ invoice.project.user.fullName }},<br /> -->
                                C-201, Beykoz-34800,<br />
                                Canada, K1A 0G9.
                            </p>
                        </div>
                    </div>
                    <div class="container-fluid d-flex justify-content-between">
                        <div class="col-lg-3 pl-0">
                            <p class="mb-0 mt-5">
                                Invoice Date : {{ invoice.created_at }}
                            </p>
                        </div>
                    </div>
                    <div
                        class="container-fluid mt-5 d-flex justify-content-center w-100"
                    >
                        <div class="table-responsive w-100">
                            <table class="table">
                                <thead>
                                    <tr class="bg-dark text-white">
                                        <th>#</th>
                                        <th>Description</th>
                                        <th class="text-right pr-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="text-right"
                                        v-for="(payment,
                                        index) in invoice.payments"
                                        :key="payment.id"
                                    >
                                        <td class="text-left">
                                            {{ index + 1 }}
                                        </td>
                                        <td class="text-left">
                                            {{ payment.description }}
                                        </td>
                                        <td>£{{ payment.amount }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="container-fluid mt-5 w-100">
                        <p class="text-right mb-2">
                            Sub - Total amount: £{{ invoice.total_amount }}
                        </p>
                        <p class="text-right">vat (0%) : $0</p>
                        <h4 class="text-right mb-5">
                            Total : £{{ invoice.total_amount }}
                        </h4>
                        <hr />
                    </div>
                </div>
                <div class="card-footer">
                    <div class="container-fluid w-100">
                        <a
                            v-if="invoice.status == 'Paid'"
                            href="#"
                            data-toggle="modal"
                            data-target="#invoice"
                            class="btn btn-light float-right mt-4 ml-2"
                            ><i class="mdi mdi-printer mr-1"></i>Print</a
                        >

                        <router-link
                            class="float-right mt-4 ml-2"
                            :to="'/payment/confirm/' + invoice_id"
                            v-if="invoice.status != 'Paid'"
                        >
                            <button class="btn btn-outline-light py-2 px-5">
                                Pay here
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <InvoiceToPrint :invoice="invoice"></InvoiceToPrint>
    </div>
</template>

<script>
// import VueHtml2pdf from "vue-html2pdf";
import UserService from "../../services/user/user.service";
import InvoiceToPrint from "./InvoiceToPrint.vue";
export default {
    created() {
        this.getInvoice();
    },
    data() {
        return {
            invoice: {},
            invoice_id: null
        };
    },
    methods: {
        async getInvoice() {
            this.invoice_id = this.$route.params.invoice_id;
            let response = await UserService.Get("invoice/" + this.invoice_id);
            if (response.data.success) {
                this.invoice = response.data.invoice;
            }
        }
    },
    components: {
        InvoiceToPrint
    }
};
</script>

<style>
.bg-dark {
    background-color: #1d1d1d !important;
}
</style>
