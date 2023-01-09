<template>
    <div>
        <notifications position="top center" group="notify" />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    created() {},
    name: "App",
    computed: {
        loggedIn() {
            return this.$store.state.UserAuth.status.loggedIn;
        },
        userData() {
            return this.$store.state.UserAuth.user;
        }
    },
    created() {
        if (this.loggedIn) {
        }
    }
};
</script>

<style>
.btn-outline-secondary,
.editable-container.editable-inline
    .editableform
    .control-group
    .editable-buttons
    .editable-cancel {
    color: #fff;
    border-color: #fff;
}
</style>
