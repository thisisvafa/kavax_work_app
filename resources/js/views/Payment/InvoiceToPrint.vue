<template>
    <div
        class="modal fade"
        id="invoice"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="card-body" id="printMe">
                    <div class="container-fluid">
                        <h3 class="text-right my-5">
                            Invoice&nbsp;&nbsp;#INV-{{ invoice.id }}
                        </h3>
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
                            <table class="table text-dark">
                                <thead>
                                    <tr class=" ">
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
                            @click="generateReport()"
                            class="btn btn-light float-right mt-4 ml-2"
                            ><i class="mdi mdi-printer mr-1"></i>OK</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import VueHtml2pdf from "vue-html2pdf";
import UserService from "../../services/user/user.service";
import html2pdf from "html2pdf.js";
export default {
    props: {
        invoice: Object
    },
    created() {},
    data() {
        return {};
    },
    methods: {
        generateReport() {
            var element = document.getElementById("printMe");

            html2pdf(element, {
                margin: 1,
                filename: "kavax-invoice.pdf",
                // image: { type: "jpeg", quality: 0.98 },
                html2canvas: { dpi: 192, letterRendering: true },
                jsPDF: {
                    unit: "in",
                    format: "letter",
                    orientation: "landscape"
                }
            });
        },
        print() {
            // Pass the element id here
            this.$htmlToPaper("printMe");
        }
    },
    components: {
        // VueHtml2pdf
    }
};
</script>

<style>
.bg-dark {
    background-color: #1d1d1d !important;
}

#printMe {
    background: #fff;
    border: 1px solid #111115;
    color: black;
}
</style>
