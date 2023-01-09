<template>
    <div class="col-md-12 grid-margin ">
        <div class="d-flex justify-content-between align-items-center ">
            <div>
                <router-link
                    to="/support-tickets"
                    class="nav-link"
                    aria-controls="sidebar-layouts"
                >
                    <button class="btn btn-outline-light">
                        <i class="mdi mdi-chevron-left"></i> Tickets
                    </button>
                </router-link>
            </div>
            <div class="text-center" v-if="!isMobile()">
                <p class="card-title h4">{{ title }}</p>
            </div>
            <div>
                <button
                    type="button"
                    class="btn btn-outline-danger btn-icon-text "
                    @click="closeTicket()"
                    v-show="status != 'Closed'"
                >
                    <i class="mdi mdi-block-helper btn-icon-append"></i>
                    Close Ticket
                </button>
            </div>
        </div>

        <div class="text-center mb-5 mt-3">
            <p class="card-title h4" v-if="isMobile()">{{ title }}</p>
        </div>
        <div class="row">
            <div
                class="col-md-12  mb-3"
                v-for="message in messages"
                :key="message.id"
            >
                <div
                    :class="'d-flex  profile-feed-item ' + getMsgClass(message)"
                >
                    <img
                        src="https://via.placeholder.com/30x30"
                        alt="profile"
                        class="img-sm rounded-circle"
                        v-if="!isMobile()"
                    />
                    <div class="ml-4">
                        <h6>
                            {{ message.user.fullName }}
                            <small class="ml-4 text-muted "
                                ><i class="mdi mdi-clock mr-1"></i>
                                {{ message.created_at }}</small
                            >
                        </h6>
                        <div style="max-width:100%;">
                            <p
                                v-html="message.message"
                                style="max-width:100%;"
                            ></p>
                        </div>
                        <div v-if="message.files && message.files.length > 0">
                            <a v-for="file in message.files" :key="file.id" :href="filePath(file)+'/'+file.file_name" target="_blank" download>
                            <i class="mdi mdi-attachment"></i>
                            {{ file.file_name }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="  mt-5 d-flex justify-content-center">
            <div class="card col-md-8 col-sm-12"                      
                    v-show="status != 'Closed'">
                <div class="card-body">
                    <h4>Reply to support...</h4>
                    <div class="">
                        <form
                            class="forms-sample"
                            enctype="multipart/form-data"
                        >
                            <vue-editor
                                v-model="message"
                                :editorToolbar="customToolbar"
                            ></vue-editor>

                            <div class="mt-4">
                                <small>Please attach any relevent files</small>
                            </div>

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
                                <button
                                    type="button"
                                    class="btn btn-outline-light"
                            @click="sendSupportTicketMessage()"
                                >
                                    Send a Ticket
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue2-quill-editor";
import UserService from "../../services/user/user.service";
export default {
    created() {
        this.title = this.$route.params.title;
        this.getMessages();
    },
    components: {
        VueEditor
    },
    data() {
        return {
            File: null,
            title: null,
            message: null,
            messages: [],
            tstID: null,
            status: "Closed",
            customToolbar: [
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],

                [{ color: ["#e29826"] }]
            ]
        };
    },
    methods: {
         filePath(file){
            if(file.user_id == null){
                return "https://kavax.co.uk/admin-panel/public/storage/ticket/files"
            }
                return 'https://kavax.co.uk/app/public'+'/files_directory'
            
        },
        async sendSupportTicketMessage() {
            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };

            if (this.message == null) {
                this.$toast.error("You message box is empty.")
                return false;
            }
            let data = new FormData();
            if (this.File != null) {
                for (var i = 0; i < this.File.length; i++) {
                    data.append("stFiles[]", this.File[i]);
                }
            }
            var message = this.urlify(this.message);
            if (message != this.message) {
                data.append("link", true);
                data.append("link_msg", this.message);
            }
            data.append("message", message);
            data.append("tstID", this.tstID);
            // console.log(data);

            let response = await UserService.Post(
                "support-ticket/messages/send",
                data
            );
            if (response.data.success) {
                this.$toast.success(response.data.message);
                this.messages.push(response.data.newMessage);
                this.message = null;
                this.File = null;
            }
        },
        uploadFile(e) {
            this.File = e.target.files;
        },
        dragFile(e) {
            // console.log(e.dataTransfer.files);
            this.File = e.dataTransfer.files;
        },
        onChange(e) {
            this.File = e.target.files;
        },
        async getMessages() {
            this.tstID = this.$route.params.ticket_id;
            let response = await UserService.Get(
                "support-ticket/messages/get/" + this.tstID
            );

            if (response.data.success) {
                this.messages = response.data.messages;
                this.status = response.data.status
            }
        },
        getMsgClass(message) {
            if (
                message.user.role == "admin" ||
                message.user.role == "super_admin"
            ) {
                return "float-left bg-grey";
            } else {
                return "float-right";
            }
        },
        urlify(text) {
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            return text.replace(urlRegex, function(url) {
                return '<a href="' + url + '">' + url + "</a>";
            });
            // or alternatively
            // return text.replace(urlRegex, '<a href="$1">$1</a>')
        },
        async closeTicket() {
            
            var data = {
                status: "Closed",
                tstID: this.tstID
            };
            let response = await UserService.Post(
                "support-ticket/status/update",
                data
            );

            if (response.data.success) {
                this.status = "Closed"
                this.$toast.success("Ticket Closed");
            }
        },
        isMobile() {
            if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            ) {
                return true;
            } else {
                return false;
            }
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        }
    }
};
</script>

<style>
.client-msg-box {
    background-color: #414141;
    border: 1px solid #74726f;
}

.dark-theme .profile-feed-item {
    border-bottom: none;
    border: 1px solid #74726f;
    padding-left: 10px;
    padding-right: 10px;

    width: 80%;
    max-width: 100%;
}

.dark-theme .card {
    background: #1a1ab100;
    border: none;
    box-shadow: none;
}

.card .card-body {
    padding: 10px 10px;
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
    text-align: center;
}

.ql-container.ql-snow {
    border: 1px solid #74726f;
}
.dark-theme .btn {
    color: #fff;
}

.dark-theme .btn-outline-danger {
    color: #f537;
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

.bg-grey {
    background-color: #414141;
}
.profile-feed-item a l,
l {
    max-width: 100%;
}
</style>
