<template>
    <div
        class="modal fade"
        id="changePassword"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header  text-center">
                    <h5 class="text-center">
                        Change Password
                    </h5>
                    <button
                        type="button"
                        class="close text-white"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            v-model="password"
                            id="password"
                            class="form-control"
                        />
                    </div>
                    <div class="form-group">
                        <label for="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            v-model="confirmPassword"
                            id="confirm-password"
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        class="btn btn-light"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        Cancel
                    </button>
                    <button
                        class="btn btn-outline-warning"
                        data-dismiss="modal"
                        aria-label="Close"
                        @click="updatePassword()"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import userService from "../../services/user/user.service";
export default {
    data() {
        return {
            password: null,
            confirmPassword: null
        };
    },
    methods: {
        updatePassword() {
            if (this.password != this.confirmPassword) {
                return false;
            }
            var data = {
                password: this.password
            };
            let responnse = userService.Post("user/password/update", data);
            if (responnse.data.success) {
                this.$toast.success("Password updated");
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
            }
        }
    }
};
</script>

<style>
.form-control {
    border: 1px solid #74726f;
    color: #fff;
    background: transparent;
}
</style>
