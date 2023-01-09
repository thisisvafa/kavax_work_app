<template>
    <div class="col-md-12 grid-margin ">
        <div class="card">
            <div class="card-body">
                <router-link to="/support-tickets">
                    <button type="button" class="btn btn-outline-light">
                        <i class="mdi mdi-chevron-left"></i>
                        Back
                    </button>
                </router-link>
                <h4 class="card-title text-center">
                    Create a new support ticket
                </h4>
                <form
                    class="forms-sample"
                    enctype="multipart/form-data"
                    @submit.prevent="createSupportTicket()"
                >
                    <div class="form-group">
                        <label for="exampleInputUsername1">Title</label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputUsername1"
                            placeholder="Type here..."
                            v-model="title"
                        />
                    </div>

                    <vue-editor
                        v-model="message"
                        :editorToolbar="customToolbar"
                    ></vue-editor>

                    <div
                        class="drop-box"
                        @dragover.prevent
                        @drop.prevent="dragFile"
                    >
                        <input
                            type="file"
                            multiple
                            @change="onChange"
                            class="fade"
                        />
                        <p>Drag and drop file here</p>
                        <ul>
                            <li v-for="file in File" :key="file.id">
                                {{ file.name }}
                            </li>
                        </ul>
                    </div>

                    <div class="text-center mt-4 text-white px-3">
                        <button type="submit" class="btn btn-outline-secondary">
                            Send a Ticket
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue2-quill-editor";
import UserService from "../../services/user/user.service";
export default {
    components: {
        VueEditor
    },
    data() {
        return {
            content: "<h1>Some initial content</h1>",
            File: {},
            title: null,
            message: null,
            customToolbar: [
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],

                [{ color: ["#e29826"] }]
            ]
        };
    },
    methods: {
        async createSupportTicket() {
            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };

            let data = new FormData();
            data.append("image", this.File);
            data.append("title", this.title);
            data.append("message", this.message);

            let response = await UserService.Post(
                "support-ticket/create",
                data
            );
            if (response.data.success) {
                this.$toast.success(response.data.message);
                this.message = null;
                this.File = null;
                // console.log(response.data.message);
                this.$router.push(
                    "/support-messages/" +
                        response.data.messaging.tstID +
                        "/" +
                        this.title
                );
            }
            this.$router.push(
                "/support-messages/" +
                    response.data.messaging.tstID +
                    "/" +
                    this.title
            );
        },
        uploadFile(e) {
            this.File = e.target.files;
        },
        dragFile(e) {
            // console.log(e.dataTransfer.files[0]);
            this.File = e.dataTransfer.files;
        },
        onChange(e) {
            this.File = e.target.files;
            // console.log(this.file);
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        }
    }
};
</script>

<style scoped>
.dark-theme .card {
    background: #1a1ab100;
    border: none;
    box-shadow: none;
}

input:focus {
    border: 1px solid #e29826;
    color: #fff;
}

.form-control {
    border: 1px solid #74726f;
    color: #fff;
    background: transparent;
}

.drop-box {
    border: 1px dashed #74726f;
    padding: 40px;
    margin-top: 30px;
    text-align: center;
}

.ql-container.ql-snow {
    border: 1px solid #74726f;
}
.dark-theme .btn {
    color: #fff;
}

.dark-theme .btn-outline-danger:hover {
    color: #fff;
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

<style>
.ql-active {
    color: #e29826;
}
.ql-snow.ql-toolbar button:hover {
    color: #e29826;
}
</style>
