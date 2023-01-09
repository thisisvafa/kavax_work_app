<template>
    <div class="col-lg-12 grid-margin ">
        <div class="d-flex justify-content-between align-items-center mb-5">
            <div>
                <p class="card-title h3">Your Account</p>
                <p class="mb-0 text-muted">
                    Keep your details up to date and change your preferences
                    here
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="card border p-3">
                    <div class="card-header">
                        <p class="card-title h3">Account details</p>
                        <p class="mb-0 text-muted">
                            Afew personal details about you,the account holder
                        </p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <fieldset class="form-group">
                                    Full Name
                                    <input
                                        v-model="fullName"
                                        type="text"
                                        class="form-control form-control-lg"
                                    />
                                </fieldset>
                            </div>
                            <div class="col-md-6">
                                <fieldset class="form-group">
                                    Email
                                    <input
                                        v-model="email"
                                        type="email"
                                        class="form-control form-control-lg"
                                    />
                                </fieldset>
                            </div>
                            <div class="col-md-6">
                                <fieldset class="form-group">
                                    Business Name
                                    <input
                                        v-model="businessName"
                                        type="text"
                                        class="form-control form-control-lg "
                                    />
                                </fieldset>
                            </div>
                            <div class="col-md-6">
                                <fieldset class="form-group">
                                    <button
                                        class="btn btn-outline-light py-2 px-5 mt-3"
                                        @click="updateAccount()"
                                    >
                                        Save changes
                                    </button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <button
                    type="button"
                    class="btn btn-outline-light btn-icon-text"
                    data-toggle="modal"
                    data-target="#changePassword"
                >
                
                    Change password
                </button>
                    </div>
                    <div class="card-header">
                        <p class="card-title h3">Contact phone Numbers</p>
                        <p class="mb-0 text-muted">
                            Update or add your contact numbers here
                        </p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <fieldset class="form-group">
                                    Phone Number
                                    <input
                                        v-model="phone"
                                        type="text"
                                        class="form-control form-control-lg"
                                    />
                                </fieldset>
                            </div>
                            <div class="col-md-6">
                                <fieldset class="form-group">
                                    <button
                                        @click="updatePhone()"
                                        class="btn btn-outline-light py-2 px-5 mt-3"
                                    >
                                        Update number
                                    </button>
                                </fieldset>
                            </div>
                            <div class="col-md-6" v-if="false">
                                <fieldset class="form-group">
                                    Add a new number
                                    <input
                                        v-model="newPhone"
                                        type="text"
                                        class="form-control form-control-lg"
                                    />
                                </fieldset>
                            </div>
                            <div class="col-md-6" v-if="false">
                                <fieldset class="form-group">
                                    <button
                                        class="btn btn-outline-light py-2 px-5 mt-3"
                                    >
                                        Add number
                                    </button>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <div class="card-header">
                        <p class="card-title h3">Billing Address</p>
                        <p class="mb-0 text-muted">
                            Your billing address
                        </p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <fieldset class="form-group">
                                    Address
                                    <input
                                        v-model="billing_address"
                                        type="text"
                                        class="form-control form-control-lg"
                                    />
                                </fieldset>
                            </div>
                            <div class="col-md-6">
                                <fieldset class="form-group">
                                    <button
                                        @click="updateBillingAddress()"
                                        class="btn btn-outline-light py-2 px-5 mt-3"
                                    >
                                        Update address
                                    </button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UpdatePassword></UpdatePassword>
        </div>
    </div>
</template>

<script>
import userService from "../../services/user/user.service";
import UpdatePassword from "./UpdatePassword.vue"
export default {
    components:{
        UpdatePassword
    },
    created() {
        this.getProfileInfo();
    },
    data() {
        return {
            fullName: null,
            email: null,
            businessName: null,
            phone: null,
            newPhone: null,
            billing_address: null
        };
    },
    methods: {
        async getProfileInfo() {
            let response = await userService.Get("profile/get");
            if (response.data.success) {
                this.fullName = response.data.user.fullName;
                this.email = response.data.user.email;
                this.businessName = response.data.user.businessName;
                this.phone = response.data.user.contactNumber;
                this.billing_address = response.data.user.billing_address
            }
        },
        async updatePhone() {
            var data = {
                contactNumber: this.phone
            };
            let response = await userService.Post(
                "profile/contact/update",
                data
            );
            if (response.data.success) {
                this.$toast.success(response.data.message);
            }
        },
        async updateAccount() {
            var data = {
                fullName: this.fullName,
                email: this.email,
                businessName: this.businessName
            };

            let response = await userService.Post("userProfilePersonal", data);
            if (response.data.success) {
                this.$toast.success(response.data.message);
            }
        },
        async updateBillingAddress() {
            if (this.billing_address) {
                var data = {
                    billing_address: this.billing_address
                };
                let response = await userService.Post(
                    "billing-address/update",
                    data
                );
                if (response.data.success) {
                    this.$toast.success("Billing address updated successfully");
                }
            }
        }
    }
};
</script>

<style scoped>
.dark-theme .card {
    background: #25252900;
    box-shadow: none;
}

.dark-theme .card .card-header {
    border: none;
}
.dark-theme .btn {
    color: #fff;
}

.text-muted {
    color: #fff !important;
    font-weight: 50;
    font-size: 14px;
}

.form-control {
    border: 1px solid #74726f;
    color: #fff;
    background: transparent;
}

.dark-theme .border {
    border-color: #74726f !important;
}

input:focus {
    border: 1px solid #e29826;
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
