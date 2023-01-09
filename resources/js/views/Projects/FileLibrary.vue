<template>
    <div class="col-lg-12 grid-margin ">
        <div class="d-flex justify-content-between align-items-center mb-5">
            <div>
                <p class="card-title h3">File library</p>
                <p class="mb-0 text-muted">
                    Keep track of all your drawings, or share your inspiration
                    with us
                </p>
            </div>
            <label class="btn btn-outline-light" for="attach-file">
                <input
                    type="file"
                    @change="onChange"
                    style="display:none;"
                    id="attach-file"
                />
                <i class="mdi mdi-upload"></i> Upload file
            </label>
        </div>

        <div class="row">
            <div class="col-lg-3">
                <h5>Kavax uploads</h5>
                <ul class="list-group">
                    <li class="list-group-item">
                        <router-link
                            to="/file-library/kavax-upload"
                            class="d-flex justify-content-between"
                        >
                            <span>All files</span>
                            <div>
                                <span>{{ counts.kavax }} </span>
                                <i class="mdi mdi-chevron-right"></i>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <h5 class="mt-5">Your Uploads</h5>
                <ul class="list-group">
                    <li class="list-group-item nav-link ">
                        <router-link
                            to="/file-library/all"
                            class="d-flex justify-content-between"
                        >
                            <span>All files</span>
                            <div>
                                <span
                                    >{{
                                        counts.file + counts.image + counts.link
                                    }}
                                </span>
                                <i class="mdi mdi-chevron-right"></i>
                            </div>
                        </router-link>
                    </li>
                    <li class="list-group-item nav-link ">
                        <router-link
                            to="/file-library/image"
                            class="d-flex justify-content-between"
                        >
                            <span>
                                <i class="mdi mdi-keyboard-return"></i>All
                                images</span
                            >
                            <div>
                                <span>{{ counts.image }} </span>
                                <i class="mdi mdi-chevron-right"></i>
                            </div>
                        </router-link>
                    </li>
                    <li class="list-group-item nav-link ">
                        <router-link
                            to="/file-library/file"
                            class="d-flex justify-content-between"
                        >
                            <span>
                                <i class="mdi mdi-keyboard-return"></i>All
                                documents</span
                            >
                            <div>
                                <span>{{ counts.file }} </span>
                                <i class="mdi mdi-chevron-right"></i>
                            </div>
                        </router-link>
                    </li>
                    <li class="list-group-item nav-link ">
                        <router-link
                            to="/file-library/link"
                            class="d-flex justify-content-between"
                        >
                            <span> All links</span>
                            <div>
                                <span>{{ counts.link }} </span>
                                <i class="mdi mdi-chevron-right"></i>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="align-items-center">
                    <ul class="list-group bottom-list text-center mt-4">
                        <li class="list-group-item col-md-4">
                            <router-link to="/file-library/image">
                                <ul class="list-unstyled">
                                    <li>
                                        <i class="mdi mdi-camera"></i>
                                    </li>
                                    <li>
                                        Images
                                    </li>
                                </ul>
                            </router-link>
                        </li>
                        <li class="list-group-item col-md-4">
                            <router-link to="/file-library/file">
                                <ul class="list-unstyled">
                                    <li>
                                        <i class="mdi mdi-file-document"></i>
                                    </li>
                                    <li>
                                        PDF/Doc
                                    </li>
                                </ul>
                            </router-link>
                        </li>
                        <li class="list-group-item col-md-4">
                            <router-link to="/file-library/link">
                                <ul class="list-unstyled">
                                    <li>
                                        <i class="mdi mdi-link"></i>
                                    </li>
                                    <li>
                                        Links
                                    </li>
                                </ul>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-9 pt-4">
                <div class="card border">
                    <div class="card-body">
                        <h5 class="mb-5">All files</h5>

                        <div
                            class="d-flex justify-content-between align-items-center pb-3 pt-3 border-bottom border-light"
                            v-for="file in files"
                            :key="file.file_id"
                        >
                            <div style="max-width: 100%;">
                                <p
                                    class="card-title mb-1"
                                    v-if="file.file_type == 'link'"
                                >
                                    <a :href="file.file_name" target="_blank">{{
                                        file.file_name
                                    }}</a>
                                </p>
                                <p class="card-title mb-1" v-else>
                                    {{ file.file_name }}
                                </p>
                                <p class="mb-0 text-light">
                                    {{ file.created_at }}
                                </p>
                            </div>
                            <div v-if="file.file_type != 'link'">
                                <button
                                    @click="downloadItem(file)"
                                    type="button"
                                    class="btn btn-outline-light btn-rounded btn-icon"
                                >
                                    <i class="mdi mdi-download "></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from "../../services/user/user.service";
import axios from "axios";
import authHeader from "../../services/user/token.services";
let baseUrl = process.env.MIX_API_URL; //"http://localhost:8000/";

export default {
    created() {
        this.getFiles();
    },
    data() {
        return {
            files: [],
            file_type: "all",
            counts: {},
            file: null
        };
    },
    methods: {
        async onChange(e) {
            this.file = e.target.files;

            let data = new FormData();

            if (this.file != null) {
                data.append("file", this.file[0]);
            }

            let response = await UserService.Post("file/upload", data);

            if (response.data.success) {
                this.$toast.success("File Uploaded");
                this.getFiles()
            }
        },
        async getFiles() {
            this.file_type = this.$route.params.file_type;

            let response = await UserService.Get("get-files/" + this.file_type);
            if (response.data.success) {
                this.files = response.data.files;
                this.counts = response.data.counts;
            }
        },
        downloadItem(file) {
            var url = baseUrl + "files_directory/" + file.file_name;

            axios
                .get(url, { responseType: "blob" })
                .then(response => {
                    const blob = new Blob([response.data], {
                        type: "application/*"
                    });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = file.file_name;
                    link.click();
                    URL.revokeObjectURL(link.href);
                })
                .catch(console.error);
        }
    },
    watch: {
        $route(newParam, old) {
            this.file_type = newParam.params.file_type;
            this.getFiles();
        }
    }
};
</script>

<style scoped>
.mdi.mdi-keyboard-return {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}
.dark-theme .card {
    background: #25252900;
    border: 1px solid #74726f;
    box-shadow: none;
}

.dark-theme .border {
    border-color: #74726f !important;
}

.list-group .list-group-item {
    background-color: transparent;
    color: #fff;
    border: 1px solid #74726f;
}

.list-group.bottom-list {
    flex-direction: row;
}
.dark-theme .border-light {
    border-bottom-color: #74726f !important;
}

.dark-theme .btn-outline-light {
    color: #fff;
}
.dark-theme .btn-outline-light:hover {
    color: #e29826;
    border-color: #e29826;
    background: none;
}

.dark-theme .sidebar .nav .nav-item .router-link-exact-active,
.dark-theme .sidebar .nav .nav-item .active {
    background-color: #fff;
    color: #000;
}

.dark-theme .sidebar .nav .nav-item .router-link-exact-active:hover,
.dark-theme .sidebar .nav .nav-item .active:hover {
    background-color: #e29826;
    color: #000;
}

.dark-theme .sidebar .nav .nav-item .router-link-exact-active i.menu-icon,
.dark-theme .sidebar .nav .nav-item .active i.menu-icon {
    color: #000;
}

a {
    color: #fff;
}
</style>
