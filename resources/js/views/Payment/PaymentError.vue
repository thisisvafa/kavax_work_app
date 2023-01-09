<template>
    <div class="col-lg-12 grid-margin mt-5 pt-5">
        <div class=" align-items-center mb-5">
            <div class="text-center text-danger">
                <p class="h1">Payment Error</p>
                <p class="mb-0 text-white">
                    We will be in contact with you soon and update your payment
                    list
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 pt-3">
                <div class="card mt-4  col-md-8 offset-md-2">
                    <div class="card-body ">
                        <img src="/images/paymentError.svg" alt="" />
                    </div>
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
export default {
    data() {
        return {};
    },
    methods: {}
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
