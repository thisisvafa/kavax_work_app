<template>
    <div class="row dashboard-row g-0 px-3">
        <div class="col content-col">
            <article class="content-inner">
                <div class="heading-text">Messages</div>
                <div class="page-content-body mt-4">
                    <div class="messages-body">
                        <div class="message-of-day">
                            <div class="message-items">
                                <div class="message-part">
                                    <div
                                        v-for="message in messages"
                                        :key="message.id"
                                        :class="
                                            'message-item my-message  ' +
                                                adminClass(message)
                                        "
                                    >
                                        <div
                                            :id="'last' + message.msg_id"
                                            :class="
                                                'message-inner ' +
                                                    msg_bg(message)
                                            "
                                        >
                                            <div class="message-owner-name">
                                                <div
                                                    class="row d-flex justify-content-between"
                                                >
                                                    <div v-if="message.user">
                                                    {{ message.user.fullName }}
                                                    </div>
                                                 <div v-if="message.replied_by">
                                                    {{ message.replied_by.fullName }}
                                                 </div>
                                                    <div
                                                        class="col-md-4 text-right message-time"
                                                    >
                                                        {{ message.created_at }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="message-content">
                                                {{ message.message }}
                                            </div>
                                            <div v-if="message.file">
                                                <a :href="filePath(message)+'/'+message.file.file_name" download target="_blank">
                                                <i
                                                    class="mdi mdi-attachment"
                                                ></i>{{message.file.file_name}}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    :class="
                                        'message-send-form ' +
                                            (isMobile()
                                                ? 'message-send-form-mobile'
                                                : 'message-send-form')
                                    "
                                >
                                    <form
                                        @submit.prevent="sendMessage()"
                                        enctype="multipart/form-data"
                                    >
                                        <div class="row">
                                            <div class="col-12 pr-0">
                                                <div class="field-block">
                                                    <textarea
                                                        required=""
                                                        v-model="message"
                                                        placeholder="Write your message here..."
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div
                                                class="d-flex justify-content-between col-md-12 pr-0"
                                            >
                                                <div class="">
                                                    <div
                                                        class="field-block file-field"
                                                    >
                                                        <input
                                                            @change="onChange"
                                                            id="attach-file"
                                                            type="file"
                                                        />
                                                        <label for="attach-file"
                                                            ><span
                                                                class="icon-attachment"
                                                            ></span>
                                                            <i
                                                                class="mdi mdi-attachment"
                                                            ></i>
                                                            Attach</label
                                                        >
                                                    </div>
                                                </div>
                                                <div class="text-right">
                                                    <div
                                                        class="field-block submit-field"
                                                    >
                                                        <button type="submit">
                                                            Send
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import UserService from "../../services/user/user.service";
import axios from "axios";
export default {
    created() {
        this.getMessages();
        var self = this;
        Echo.channel("client-message").listen(".client-message", e => {
            // console.log(e);
            var msg = {};
            msg = e.message;
            if(msg.project_id == this.project_id){
            self.messages.push(msg);
            self.scrollToLastMsg("last" + msg.msg_id);
            }
        });
    },
    data() {
        return {
            project_id: null,
            messages: [],
            message: null,
            File: null
        };
    },
    methods: {
        onChange(e) {   
            this.File = e.target.files;
        },
        scrollToLastMsg(viewID) {
            setTimeout(function() {
                document.getElementById(viewID).scrollIntoView({
                    behavior: "smooth"
                });
            }, 50);
        },
        async getMessages() {
            this.project_id = this.$route.params.project_id;

            let response = await UserService.Get(
                "project/messages/" + this.project_id
            );
            if (response.data.success) {
                this.messages = response.data.messages;
                var viewID =
                    "last" + this.messages[this.messages.length - 1].msg_id;
                this.scrollToLastMsg(viewID);
            }
        },
        async sendMessage() {
            if (this.message) {
                let data = new FormData();

                if (this.File != null) {
                    for (var i = 0; i < this.File.length; i++) {
                        data.append("files[]", this.File[i]);
                    }
                }
                var message = this.urlify(this.message);
                if (message != this.message) {
                    data.append("link", true);
                    data.append("link_msg", this.message);
                }
                data.append("message", message);
                data.append("project_id", this.project_id);

                let response = await UserService.Post(
                    "project/message/send",
                    data
                );
                if (response.data.success) {
                    // this.$toast.success(response.data.message);
                    this.messages.push(response.data.newMessage);
                    this.message = null;
                    this.File = null;
                    var viewID = "last" + response.data.newMessage.msg_id;

                    this.scrollToLastMsg(viewID);
                }
            } else {
                this.$toast.error("Write Something!");
            }
        },
        filePath(message){
            if(message.user_id == null){
                return "https://kavax.co.uk/admin-panel/public/storage/message/files"
            }
                return 'https://kavax.co.uk/app/public'+'/files_directory'
            
        },
        adminClass(message) {
            if (message.user_id == null) {
                return "text-left";
            }
            return "";
        },
        msg_bg(message) {
            if (message.user_id == null) {
                return "bg-admin-msg";
            }
            return "";
        },
        downloadItem({ url, label }) {
            axios
                .get(url, { responseType: "blob" })
                .then(response => {
                    const blob = new Blob([response.data], {
                        type: "application/pdf"
                    });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = label;
                    link.click();
                    URL.revokeObjectURL(link.href);
                })
                .catch(console.error);
        },
        urlify(text) {
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            return text.replace(urlRegex, function(url) {
                return '<a href="' + url + '">' + url + "</a>";
            });
            // or alternatively
            // return text.replace(urlRegex, '<a href="$1">$1</a>')
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
    }
};
</script>
<style scoped>
.content-col
    .content-inner
    .page-content-body.profile-edit-form
    .item
    .field-block
    label {
    font-size: 18px;
    font-weight: 300;
    display: inline-block;
    width: 100%;
}

.content-col
    .content-inner
    .page-content-body.profile-edit-form
    .item
    .field-block
    input {
    display: inline-block;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #cfcfcf;
    height: 36px;
}

.content-col
    .content-inner
    .messages-body
    .message-send-form
    .field-block
    textarea {
    background: transparent;
    border: none;
    border-bottom: solid 1px #cfcfcf;
    margin-bottom: 30px;
    width: 100%;
    color: #fff;
}

.content-col
    .content-inner
    .messages-body
    .message-send-form
    .field-block
    textarea::placeholder {
    color: #ff9524;
    font-size: 16px;
    font-weight: 300;
}

.content-col
    .content-inner
    .messages-body
    .message-send-form
    .field-block.file-field
    input {
    display: none;
    color: #fff;
}

.content-col
    .content-inner
    .messages-body
    .message-send-form
    .field-block.file-field
    label {
    height: 49px;
    line-height: 49px;
    border-color: #d8d8d8;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 0 25px 0 15px;
    cursor: pointer;
    transition: 0.3s;
}

.content-col
    .content-inner
    .messages-body
    .message-send-form
    .field-block.file-field
    label:hover {
    color: white;
}

.content-col
    .content-inner
    .messages-body
    .message-send-form
    .field-block.file-field
    label
    span {
    font-size: 20px;
}

.content-col
    .content-inner
    .messages-body
    .message-send-form
    .field-block.submit-field
    button {
    color: #ed7b00;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    height: 49px;
    border-color: #ed7b00;
    padding: 0 40px;
    background: transparent;
    transition: 0.3s;
}

.content-col
    .content-inner
    .messages-body
    .message-send-form
    .field-block.submit-field
    input:hover {
    border-color: #ff9524;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item
    .message-inner
    .message-owner-name {
    margin-bottom: 10px;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item
    .message-inner
    .message-owner-name
    .name {
    font-size: 16px;
    font-weight: 700;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item
    .message-inner
    .message-owner-name
    .message-time {
    color: #fff;
    font-weight: 300;
    font-size: 13px;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item
    .message-inner
    .message-content {
    font-size: 16px;
    font-weight: 300;
}

.content-col .content-inner .messages-body .message-of-day .date-all-message {
    margin-bottom: 14px;
    font-weight: 300;
}

.content-col .content-inner .messages-body .message-of-day .message-items {
    margin-bottom: 65px;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item {
    margin-bottom: 45px;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item:last-child {
    margin-bottom: 0;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item
    .message-inner {
    width: 70%;
    display: inline-block;
    padding: 30px;
    border: 1px solid #d8d8d8;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item
    .message-inner
    .message-owner-name {
    margin-bottom: 10px;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item
    .message-inner
    .message-owner-name
    .name {
    font-size: 16px;
    font-weight: 700;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item
    .message-inner
    .message-owner-name
    .message-time {
    color: #fff;
    font-weight: 300;
    font-size: 13px;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item
    .message-inner
    .message-content {
    font-size: 16px;
    font-weight: 300;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item.my-message {
    text-align: right;
}

.content-col
    .content-inner
    .messages-body
    .message-of-day
    .message-items
    .message-item.my-message
    .message-inner {
    text-align: left;
    border-color: #74726f;
}

.msg-from-admins {
    background-color: transparent;
    text-align: left !important;
}
.bg-admin-msg {
    background-color: #414141 !important;
}

.message-send-form {
    position: fixed;
    bottom: 0px;
    right: 0px;
    width: calc(100% - 245px);
    max-width: calc(100% - 45px);
    padding: 30px;
    margin-left: 350px;
    background: #1d1d1d;
}

.message-send-form-mobile {
    width: 100%;
    max-width: 100%;
    margin-left: 0px;
}

.message-part {
    margin-bottom: 300px;
}
</style>
