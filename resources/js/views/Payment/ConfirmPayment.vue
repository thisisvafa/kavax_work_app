<template>
    <div class="col-lg-12 grid-margin ">
        <h2 class="text-center">Confirm your payment</h2>
        <div class="row">
            <div class="col-md-12 pt-3">
                <div class="card mt-4 ">
                    <div class="card-body">
                        <div class="table-responsive col-md-8 offset-md-2">
                            <table class="table border-bottom pb-3">
                                <tbody>
                                    <tr>
                                        <td>Billing Address:</td>
                                        <td>
                                            {{ billing_address }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Confirmation email:</td>

                                        <td>
                                            {{ email }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="table border-bottom pb-3">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h3 class="text-warning">
                                                Payment Summary
                                            </h3>
                                        </td>
                                        <td>Total amount:</td>
                                    </tr>
                                    <tr>
                                        <td>Payment description:</td>
                                        <td><h3>$2000</h3></td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="table ">
                                <tbody>
                                    <tr>
                                        <td class="text-right">
                                            <button
                                                class="btn btn-light px-5 "
                                                @click="makePayment()"
                                            >
                                                Paypal
                                            </button>
                                        </td>
                                        <td>
                                            <router-link
                                                :to="
                                                    '/payment/by-bank/' +
                                                        invoice_id
                                                "
                                            >
                                                <button
                                                    class="btn btn-outline-warning px-5"
                                                >
                                                    By Transfer
                                                </button>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="text-center">
                                <router-link to="/dashboard">
                                    Cancel payment</router-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Service from "../../services/user/user.service";
export default {
    created() {
        var user = JSON.parse(localStorage.getItem("user")).user;
        // console.log(user);
        this.billing_address = user.billing_address;
        this.email = user.email;
        this.getInvoice();
    },
    data() {
        return {
            invoice_id: null,
            invoice: null,
            billing_address: null,
            email: null
        };
    },
    methods: {
        async makePayment() {
            this.$toast.info("Please wait...");
            var data = {
                name: this.invoice.invoice_name,
                amount: this.invoice.total_amount,
                description: this.invoice.description,
                invoice_id: this.invoice_id
            };
            await Service.Post("makePayment", data)
                .then(response => {
                    localStorage.setItem(
                        "payment_id",
                        JSON.stringify(response.data.payment_id)
                    );
                    window.location.href = response.data.redirect_url;
                })
                .catch(err => {
                    // console.log(err);
                });
        },
        async getInvoice() {
            this.invoice_id = this.$route.params.invoice_id;
            console.log(this.invoice_id);

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

.dark-theme .border-bottom {
    border-color: #74726f !important;
}

.dark-theme .btn-outline-warning {
    color: #e29826;
}
.dark-theme .btn-outline-warning:hover {
    color: #fff;
}

a {
    color: #fff;
}
</style>
