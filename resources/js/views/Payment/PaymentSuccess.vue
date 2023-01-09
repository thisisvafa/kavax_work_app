<template>
    <div class="col-lg-12 grid-margin mt-3 pt-5">
        <div class=" align-items-center mb-5">
            <div class="text-center text-success">
                <p class="h1">Payment Successful</p>
                <p class="mb-0 text-white h3">
                    We will be in contact with you soon and update your payment
                    list
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 pt-3">
                <div class="card mt-4  col-md-8 offset-md-2">
                    <div class="card-body ">
                        <img src="/images/paymentSuccess.svg" alt="" />
                    </div>
                </div>
                <div class="text-center">
                    <a href="" class="text-white ">
                        <i class="fa fa-print"></i> Click here </a
                    >to print a copy of your receipt
                </div>
                <div class="mt-5 text-center">
                    <router-link to="/dashboard">
                        <button class="btn btn-outline-light ml-4">
                            Take me to the dashboard
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
    props: {},
    name: "payment_successful",
    data() {
        return {
            packages: [],
            invoice_id: null
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.UserAuth.status.loggedIn;
        }
    },
    async created() {
        if (!this.loggedIn) {
            this.$router.push("/auth");
        } else {
            await this.paymentStatus();
        }
    },
    methods: {
        async paymentStatus() {
            this.invoice_id = this.$route.params.invoice_id;

            this.$toast.info("Payment status checking...");
            let data = {
                token: this.$route.query.token,
                payment_id: JSON.parse(localStorage.getItem("payment_id")),
                invoice_id: this.invoice_id
            };
            localStorage.removeItem("payment_id");
            await Service.Post("paymentStatus", data)
                .then(response => {
                    this.$toast.success(response.data.message);
                })
                .catch(err => {
                    // console.log(err);
                });
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
    border: 1px dashed #74726f;
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
