<template>
    <div class="col-lg-12 grid-margin mt-5 pt-5">
        <div class=" align-items-center mb-5">
            <div class="text-center">
                <p class="h2">Thank you for letting us know.</p>
                <p class="mb-0 text-white">
                    We will be in contact with you soon and update your payment
                    list
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 pt-3">
                <div class="card mt-4  col-md-8 offset-md-2">
                    <label class="card-body border">
                        <div
                            class="drop-box text-center p-5 "
                            @dragover.prevent
                            @drop.prevent="dragFile"
                        >
                            <p>Drag & drop your payment here or click here</p>
                            <input
                                type="file"
                                multiple
                                @change.prevent="onChange"
                                class="btn btn-outline-light"
                                hidden
                            />
                            <progress
                                class="mt-1"
                                max="100"
                                :value.prop="uploadPercentage"
                                v-if="uploading"
                            ></progress>
                            <i
                                v-if="uploaded"
                                class="mdi mdi-check text-success "
                            ></i>
                        </div>
                    </label>
                </div>

                <div class="mt-5 text-center">
                    <router-link to="/projects">
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
import UserService from "../../services/user/user.service";
import axios from "axios";
import authHeader from "../../services/user/token.services";

let baseURL = process.env.MIX_API_URL;
export default {
    data() {
        return {
            File: {},
            invoice_id: null,
            uploadPercentage: 0,
            uploaded: false,
            uploading: false
        };
    },
    methods: {
        uploadFile(e) {
            this.File = e.target.files;
        },
        dragFile(e) {
            // console.log(e.dataTransfer.files[0]);
            this.File = e.dataTransfer.files[0];
            this.uploadFile();
        },
        onChange(e) {
            this.File = e.target.files[0];
            this.uploadFile();
        },
        async uploadFile() {
            this.uploading = true;
            let self = this;
            this.invoice_id = this.$route.params.invoice_id;
            // console.log(this.file);
            let data = new FormData();
            data.append("file", this.File);
            data.append("invoice_id", this.invoice_id);

            axios
                .post(baseURL + "invoice/upload", data, {
                    headers: authHeader(),
                    onUploadProgress: function(progressEvent) {
                        self.uploadPercentage = parseInt(
                            Math.round(
                                (progressEvent.loaded / progressEvent.total) *
                                    100
                            )
                        );
                    }.bind(this)
                })
                .then(function(response) {
                    // console.log(response);

                    if (response.data.success) {
                        self.$toast.success(response.data.message);
                        self.uploaded = true;
                    }
                })
                .catch(function() {
                    // console.log("FAILURE!!");
                });
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
    border: 1px dashed #74726f !important;
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
